import User from "../../../server/models/User";
import connectToDB from "../../../server/middleware/db";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            const token = req.body.token;
            const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
            let user = await User.findOneAndUpdate({ email: data.data.email }, {
                name: req.body.name,
                mobile: req.body.mobile,
                address: req.body.address,
                city: req.body.city,
                pincode: req.body.pincode
            });
            if (user) {
                res.status(200).json({
                    type: "success",
                    message: "User Updated Successfully"
                });
            } else {
                res.status(400).json({
                    type: "error",
                    message: "No user found"
                });
            }

        } else {
            res.status(405).json({
                type: "error",
                message: "Method not allowed"
            });
        }
    } catch (error) {
        res.status(500).json({
            type: "error",
            // message: "Internal Server Error"
            message: error
        });
    }
}

export default connectToDB(handler);
