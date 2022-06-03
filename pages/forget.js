import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forget = (props) => {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("myUser")) {
            router.push("/");
        }
    }, [router]);

    const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();

    const apiRequest = async (data) => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/forgetPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    }

    const tst = (type, msg) => {
        if (type == 'success') {
            toast.success(`${msg}`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error(`${msg}`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const checkError = (resp, mode, route) => {
        if (resp.type === "success") {
            tst("success", mode);
            setTimeout(() => {
                router.push(route);
            }, 2000);
        } else {
            tst("error", resp.message);
        }
    }

    const resetPassword = async (e) => {
        e.preventDefault();
        if (email) {
            const data = { email, sendMail: true, siteName: props.name };
            let response = await apiRequest(data);
            checkError(response, "Email Sent Successfully", "/");
        } else {
            tst("error", "Please enter your email");
        }
        setEmail('');
    }

    const setNewPass = async (e) => {
        e.preventDefault();
        let token = router.query.token;
        if (newPassword && confirmNewPassword) {
            if (newPassword === confirmNewPassword) {
                const data = { token, sendMail: false, newPassword, confirmNewPassword };
                let response = await apiRequest(data);
                checkError(response, "Password Updated Successfully", "/");
            } else {
                tst("error", "Password does not match");
            }
        } else {
            tst("error", "Please fill all the fields");
        }
        setNewPassword('');
        setConfirmNewPassword('');
    }
    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "newPassword") {
            setNewPassword(e.target.value);
        }
        else if (e.target.name === "confirmNewPassword") {
            setConfirmNewPassword(e.target.value);
        }
    }

    return (
        <>
            <Head>
                <title>{router.query.token ? "Set New Password" : "Forget Password"} | {props.name}</title>
            </Head>
            <section className=" flex justify-center items-start pt-20 min-h-screen w-full">

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                {!router.query.token && <form onSubmit={resetPassword} method="POST" className="md:w-1/2 bg-gray-100 p-8 flex flex-col w-full mt-10 mx-5">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Reset Password</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                        <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                    </div>
                    <input type="submit" value={"Reset Now"} className="text-white cursor-pointer bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg" />
                </form>}

                {router.query.token && <form onSubmit={setNewPass} method="POST" className="md:w-1/2 bg-gray-100 p-8 flex flex-col w-full mt-10 mx-5">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Set Password</h2>
                    <div className="relative mb-4">
                        <label htmlFor="newPassword" className="leading-7 text-sm text-gray-600">New Password</label>
                        <input onChange={handleChange} value={newPassword} type="password" id="newPassword" name="newPassword" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="confirmNewPassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                        <input onChange={handleChange} value={confirmNewPassword} type="password" id="confirmNewPassword" name="confirmNewPassword" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                    </div>
                    <input type="submit" value={"Set Now"} className="text-white cursor-pointer bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg" />
                </form>}

            </section>
        </>
    )
}

export default Forget