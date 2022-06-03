import Subscribe from "../../server/models/Subscribe";
import connectToDB from "../../server/middleware/db";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { email } = req.body;
            if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                res.status(400).json({
                    type: "error",
                    message: "Email is not valid",
                });
                return;
            }
            let subs = new Subscribe({ email });
            await subs.save();
            res.status(200).json({
                type: "success",
                message: "Subscribed Successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Internal Server Error"
                // message: err
            });
        }
    } else {
        res.status(405).json({
            type: "error",
            message: "Method not allowed"
        });
    }
}

export default connectToDB(handler);
