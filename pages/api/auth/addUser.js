import User from "../../../server/models/User";
import connectToDB from "../../../server/middleware/db";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            const { name, email } = req.body;

            if (!name || !email || !req.body.password) {
                res.status(400).json({
                    type: "error",
                    message: "Please fill out all fields"
                });
                return;
            }

            if (req.body.password.length < 8) {
                res.status(400).json({
                    type: "error",
                    message: "Password must be at least 8 characters long"
                });
                return;
            }

            let u = await User.findOne({ email });
            if (u) {
                res.status(400).json({
                    type: "error",
                    message: "User already exists"
                });
                return;
            }

            let user = new User({
                name,
                email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString()
            });
            await user.save();
            res.status(200).json({
                type: "success",
                message: "User added successfully"
            });

        } else {
            res.status(405).json({
                type: "error",
                message: "Method not allowed"
            });
        }
    } catch (error) {
        res.status(500).json({
            type: "error",
            message: "Internal Server Error"
            // message: error
        });
    }
}

export default connectToDB(handler);
