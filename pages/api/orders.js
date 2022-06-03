import Order from "../../server/models/Order";
import connectToDB from "../../server/middleware/db";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    try {
        const token = req.body.token;
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        let orders = await Order.find({ email: data.data.email, paymentStatus: "Success" });
        res.status(200).json({
            type: "success",
            message: "Fetched Successfully",
            data: orders
        });
    } catch (err) {
        res.status(500).json({
            type: "error",
            message: "Internal Server Error"
            // message: err
        });
    }
}

export default connectToDB(handler);