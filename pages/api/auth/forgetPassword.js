import User from "../../../server/models/User";
import Forget from "../../../server/models/Forget";
import connectToDB from "../../../server/middleware/db";
import CryptoJS from "crypto-js";
import nodemailer from "nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            if (req.body.sendMail) {
                let token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
                let user = await User.findOne({ email: req.body.email });
                if (user) {
                    let forget = new Forget({
                        userId: user._id,
                        email: req.body.email,
                        token: token
                    });
                    await forget.save();

                    let url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/forgetPassword?token=${token}`;
                    let emailTemplate = `
                    <div style="display:flex; flex-direction:column;">
                        <h1 style="text-align:center;">${req.body.siteName}</h1>
                        <h2>Reset Your Password</h2>
                        <p style="text-align:justify;">Click the link below to reset your password</p>
                        <a href="${url}" style="padding: 10px 20px; background-color: #000; color: #FFF; width:100%;">Reset Password</a>
                    </div>
                    `;

                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'prtk350@gmail.com',
                            pass: 'Prateek@other'
                            // user: 'theritiktiwari@gmail.com',
                            // pass: 'ykgeqnkjmrspmugr'
                        }
                    });

                    await transporter.sendMail({
                        from: `'${req.body.siteName}' <support@${req.body.siteName}.com>`,
                        to: req.body.email,
                        subject: "Reset Password",
                        html: emailTemplate,
                    });

                    res.status(200).json({
                        type: "success",
                        message: "Email sent successfully"
                    });

                } else {
                    res.status(400).json({
                        type: "error",
                        message: "User Not Found"
                    });
                }
            } else {
                let forget = await Forget.findOne({ token: req.body.token });
                if (forget) {
                    if (req.body.newPassword === req.body.confirmNewPassword) {
                        let user = await User.findOneAndUpdate({ _id: forget.userId }, {
                            password: CryptoJS.AES.encrypt(req.body.newPassword, process.env.CRYPTOJS_SECRET_KEY).toString()
                        });
                        if (user) {
                            await Forget.deleteOne({ token: req.body.token });
                            res.status(200).json({
                                type: "success",
                                message: "Password Changed Successfully"
                            });
                        } else {
                            res.status(400).json({
                                type: "error",
                                message: "User Not Found"
                            });
                        }
                    } else {
                        res.status(400).json({
                            type: "error",
                            message: "Password does not match"
                        });
                    }
                } else {
                    res.status(400).json({
                        type: "error",
                        message: "Invalid Token"
                    });
                }
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                // message: "Internal Server Error"
                message: err
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
