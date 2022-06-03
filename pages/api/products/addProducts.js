import Product from "../../../server/models/Product";
import connectToDB from "../../../server/middleware/db";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    description: req.body[i].description,
                    image: req.body[i].image,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    price: req.body[i].price,
                    availableQuantity: req.body[i].availableQuantity
                });
                await p.save();
            }
            res.status(200).json({
                type: "success",
                message: "Products added successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Internal Server Error"
            })
        }
    } else {
        res.status(405).json({
            type: "error",
            message: "Method not allowed"
        });
    }
}

export default connectToDB(handler);
