import Product from "../../../server/models/Product";
import connectToDB from "../../../server/middleware/db";

const handler = async (req, res) => {
    try {
        let products = await Product.find()
        let tshirts = {};
        for (let item of products) {
            if (item.title in tshirts) {
                if (item.availableQuantity > 0) {
                    !tshirts[item.title].color.includes(item.color) ? tshirts[item.title].color.push(item.color) : null;
                    !tshirts[item.title].size.includes(item.size) ? tshirts[item.title].size.push(item.size) : null;
                }
            } else {
                tshirts[item.title] = JSON.parse(JSON.stringify(item));
                if (item.availableQuantity > 0) {
                    tshirts[item.title].color = [item.color];
                    tshirts[item.title].size = [item.size];
                }
            }
        }
        res.status(200).json({ tshirts });
        // res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Internal Server Error"
        });
    }
}

export default connectToDB(handler);
