import Product from "../../../server/models/Product";
import connectToDB from "../../../server/middleware/db";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            }
            res.status(200).json({
                type: "success",
                message: "Products updated successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Internal Server Error"
            });
        }
    } else {
        res.status(405).json({
            type: "error",
            message: "Method not allowed"
        });
    }
    let products = await Products.find();
    res.status(200).json({ products });
}

export default connectToDB(handler);
