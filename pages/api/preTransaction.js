const https = require('https');
const PaytmChecksum = require('paytmchecksum');
import Order from "../../server/models/Order";
import Product from "../../server/models/Product";
import connectToDB from "../../server/middleware/db";
import pincodes from "../../Components/assets/pincodes.json";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {

            if (req.body.subTotal <= 0) {
                res.status(200).json({
                    type: "error",
                    cartClear: true,
                    message: "Please add some items!"
                })
                return
            }

            // check if the cart is tampered
            let product, sumTotal = 0;
            for (let item in req.body.cart) {
                sumTotal += req.body.cart[item].price * req.body.cart[item].qty;
                product = await Product.find({ slug: item });
                if (product[0].availableQuantity < req.body.cart[item].qty) {
                    res.status(200).json({
                        type: "error",
                        cartClear: true,
                        message: "Some items are out of stock!"
                    })
                    return
                }
                if (product[0].price != req.body.cart[item].price) {
                    res.status(200).json({
                        type: "error",
                        cartClear: true,
                        message: "Price of some items have changed!"
                    })
                    return
                }
            }
            if (sumTotal !== req.body.subTotal) {
                res.status(200).json({
                    type: "error",
                    cartClear: true,
                    message: "Price of some items have changed!"
                })
                return
            }

            if (!/^[6-9]\d{9}$/.test(req.body.mobile)) {
                res.status(200).json({
                    type: "error",
                    cartClear: false,
                    message: "Invalid phone number!"
                })
                return
            }
            if (req.body.pincode.length !== 6 || !Number.isInteger(Number(req.body.pincode))) {
                res.status(200).json({
                    type: "error",
                    cartClear: false,
                    message: "Invalid pincode!"
                })
                return
            }

            if (!Object.keys(pincodes).includes(req.body.pincode)) {
                res.status(200).json({
                    type: "error",
                    cartClear: false,
                    message: "Sorry! Area is not deliverable!"
                })
                return
            }

            let order = new Order({
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                orderId: req.body.ordID,
                products: req.body.cart,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode,
                amount: req.body.subTotal
            });
            await order.save();

            var paytmParams = {};
            paytmParams.body = {
                "requestType": "Payment",
                "mid": process.env.NEXT_PUBLIC_PAYTM_MID,
                "websiteName": "DEFAULT",
                "orderId": req.body.ordID,
                "callbackUrl": `${process.env.NEXT_PUBLIC_HOST}/api/postTransaction`,
                "txnAmount": {
                    "value": req.body.subTotal,
                    "currency": "INR",
                },
                "userInfo": {
                    "custId": req.body.email,
                },
            };

            const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MERCHANT_KEY);
            paytmParams.head = {
                "signature": checksum
            };

            var post_data = JSON.stringify(paytmParams);

            const requestAsync = async () => {
                return new Promise((resolve, reject) => {
                    var options = {
                        hostname: "securegw.paytm.in",
                        port: 443,
                        path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.ordID}`,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': post_data.length
                        }
                    };

                    var response = "";
                    var post_req = https.request(options, function (post_res) {
                        post_res.on('data', function (chunk) {
                            response += chunk;
                        });
                        post_res.on('end', function () {
                            let ress = JSON.parse(response).body
                            ress.type = "success"
                            ress.cartClear = false
                            resolve(ress);
                        });
                    });
                    post_req.write(post_data);
                    post_req.end();
                });
            }

            let myr = await requestAsync();
            res.status(200).json(myr);

        } catch (err) {
            res.status(500).json({
                type: "error",
                cartClear: false,
                message: "Internal Server Error"
                // message: err
            });
        }
    } else {
        res.status(405).json({
            type: "error",
            cartClear: false,
            message: "Method not allowed"
        });
    }
}

export default connectToDB(handler);