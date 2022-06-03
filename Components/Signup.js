import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const data = { name, email, password };
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            let response = await res.json();

            if (response.type == "success") {
                toast.success(`${response.message}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error(`${response.message}`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            toast.error('Password did not match', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        else if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        else if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font min-h-screen">
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
                <div className="container px-5 py-20 mx-auto flex flex-wrap items-center flex-col-reverse md:flex-row">

                    <form onSubmit={handleSubmit} method="POST" className="lg:w-2/6 md:w-1/2 mt-10 bg-gray-100 p-8 flex flex-col md:ml-auto w-full md:mr-16 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">User Name</label>
                            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={handleChange} value={password} type="password" id="password" name="password" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="confirmPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                            <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <input type='submit' value="Signup" className="text-white cursor-pointer bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg" />
                    </form>

                    <div className="lg:w-3/5 md:w-1/2">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signup