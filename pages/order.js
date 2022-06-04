import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Order from "../server/models/Order";
import mongoose from 'mongoose';
import Link from 'next/link';

const MyOrder = (props) => {
    const router = useRouter();
    const [date, setDate] = useState();
    useEffect(() => {
        const d = new Date(props.order.createdAt);
        setDate(d);
        if (router.query.clearCart == 1) {
            props.clearCart();
        }
        if (!localStorage.getItem("myUser")) {
            router.push("/auth");
        }
    }, [router, props])
    const products = props.order.products;
    return (
        <>
            <Head>
                <title>Order | {props.name}</title>
            </Head>

            <section className="text-gray-600 body-font overflow-hidden min-h-screen">
                <div className=" px-6 py-12 mt-10 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 mx-auto w-full lg:pr-10 lg:py-6 lg:mb-0 p-4 bg-gray-100 overflow-hidden">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.name}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID : <span className='underline text-indigo-700'>#{props.order.orderId}</span></h1>
                            <p className="leading-relaxed mb-2">Your order has been placed successfully on : <span className="font-medium text-indigo-700">{date && date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                            <p className="leading-relaxed">Payment Status : <span className='font-semibold text-indigo-700'>{props.order.paymentStatus}</span></p>
                            <p className="leading-relaxed mb-2">Order Status : <span className='font-semibold text-indigo-700'>{props.order.orderStatus}</span></p>
                            <p className="leading-relaxed mb-4">Transaction ID : <span className='font-semibold text-indigo-700'>{props.order.transactionId}</span></p>

                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full px-6 md:px-3">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full">
                                                <thead className="border-b">
                                                    <tr>
                                                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                            Name
                                                        </th>
                                                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-right">
                                                            Amount
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Object.keys(products).map((item) => {
                                                        return <tr key={item} className="border-b">
                                                            <td className="text-left px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{products[item].name} <span className="capitalize">{(products[item].size && products[item].variant) ? `(${products[item].size}/${products[item].variant})` : (products[item].size ? `(${products[item].size})` : (products[item].variant ? `(${products[item].variant})` : ``))}</span></td>
                                                            <td className="text-center text-sm  text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                                {products[item].qty}
                                                            </td>
                                                            <td className="text-right text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                                                ₹{products[item].price} X  {products[item].qty} = ₹{products[item].price * products[item].qty}
                                                            </td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                {props.order.orderStatus === "Ordered" ? <p className="flex mr-auto font-bold uppercase text-yellow-500 text-xl">Processing</p> : props.order.orderStatus === "Shipped" ? <Link href={props.order.trackURL}><button className="flex mr-auto text-white bg-black hover:bg-gray-800 border-0 py-2 px-6 focus:outline-none">Track Order</button></Link> : <p className="flex mr-auto font-bold uppercase text-green-500 text-xl">Delivered</p>}
                                <span className="title-font ml-auto font-medium text-2xl text-gray-900">Total : ₹{props.order.amount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }
    let order = await Order.findById({ _id: context.query.id });

    return {
        props: { order: JSON.parse(JSON.stringify(order)) }
    }
}

export default MyOrder