import React from 'react';
import Head from 'next/head';

const Buy = (props) => {
    return (
        <>
            <Head>
                <title>Buy | {props.name}</title>
            </Head>

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-12 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 mx-auto w-full lg:pr-10 lg:py-6 lg:mb-0 p-4 bg-gray-100">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.name}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID : <span className='underline text-indigo-700'>#9876ABC</span></h1>
                            <p className="leading-relaxed mb-4">Your order has been placed successfully.</p>

                            <div className="flex font-bold py-2">
                                <span className="text-gray-900">Name</span>
                                <span className="ml-auto text-gray-900">Amount</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Item 1</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Item 2</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Item 2</span>
                                <span className="ml-auto text-gray-900">₹499</span>
                            </div>
                            <div className="flex mt-6">
                                <button className="flex mr-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800">Track Order</button>
                                <span className="title-font font-medium text-2xl text-gray-900">₹1497</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buy