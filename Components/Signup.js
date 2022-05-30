import React from 'react'

const Signup = () => {
    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto flex flex-wrap items-center flex-col-reverse md:flex-row">

                    <div className="lg:w-2/6 md:w-1/2 mt-10 bg-gray-100 p-8 flex flex-col md:ml-auto w-full md:mr-16 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">User Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="confirmPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                        </div>
                        <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Signup</button>
                    </div>

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