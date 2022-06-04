import Contact from "../../server/models/Contact";
import connectToDB from "../../server/middleware/db";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;
            if(!name || !email || !message) {
                res.status(400).json({
                    type: "error",
                    message: "Please fill out all fields"
                });
                return;
            }
            
            let cont = new Contact(req.body);
            await cont.save();
            res.status(200).json({
                type: "success",
                message: "Message Send Successfully"
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
}

export default connectToDB(handler);
