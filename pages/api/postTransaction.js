import Order from "../../server/models/Order";
import Product from "../../server/models/Product";
import connectToDB from "../../server/middleware/db";
import PaytmChecksum from "paytmchecksum";

const handler = async (req, res) => {
    var paytmChecksum = "";
    var paytmParams = {};

    const received_data = req.body;

    for (var key in received_data) {
        if (key == "CHECKSUMHASH") {
            paytmChecksum = received_data[key];
        } else {
            paytmParams[key] = received_data[key];
        }
    }

    var isValidChecksum = PaytmChecksum.verifySignature(paytmParams, process.env.PAYTM_MERCHANT_KEY, paytmChecksum);
    if (!isValidChecksum) {
        res.status(500).send("Some Error Occured");
        return
    }

    let order;
    if (req.body.STATUS == "TXN_SUCCESS") {
        order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID },
            {
                paymentInfo: JSON.stringify(req.body),
                paymentStatus: "Success",
                transactionId: req.body.TXNID
            });
        let products = order.products;
        for (let slug in products) {
            let qty;
            let product = await Product.findOne({ slug: slug });
            if (product.availableQuantity <= 0) {
                qty = 0
            } else {
                qty = product.availableQuantity - products[slug].qty
            }
            await Product.findOneAndUpdate({ slug: slug }, { availableQuantity: qty });
        }
    } else if (req.body.STATUS == "PENDING") {
        order = await Order.findOneAndUpdate({ orderId: req.body.ORDERID },
            {
                paymentInfo: JSON.stringify(req.body),
                paymentStatus: "Pending",
                transactionId: req.body.TXNID
            });
    }
    res.redirect(`/order?id=${order._id}&clearCart=1`, 200);
}

export default connectToDB(handler);