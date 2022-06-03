import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Product from "../../server/models/Product";
import mongoose from 'mongoose';

const Accessories = (props) => {
    return (
        <>
            <Head>
                <title>Accessories | {props.name}</title>
            </Head>
            <section className="text-gray-600 body-font min-h-screen">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {Object.keys(props.products).length ? Object.keys(props.products).map((item) => {
                            return <Link href={`/product/${props.products[item].slug}`} key={props.products[item]._id}>
                                <div className="lg:w-1/5 md:w-1/2 w-full m-5 shadow-lg p-4 cursor-pointer">
                                    <a className="block relative overflow-hidden">
                                        <img alt="ecommerce" className="m-auto h-[30vh] md:h-[30vh] block" src={props.products[item].image} />
                                    </a>
                                    <div className="mt-4">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{props.products[item].title}</h2>

                                        {props.products[item].availableQuantity > 0 ? <>
                                            <p className="mt-1">₹{props.products[item].price}</p>
                                            <div className='mt-2'>
                                                {
                                                    props.products[item].color.map((color) => {
                                                        return <button key={color} className={`${(color === "black" || color === "white") ? `bg-${color}` : `bg-${color}-500`} border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none`}></button>
                                                    })
                                                }
                                            </div>

                                            <div className='mt-2'>
                                                {
                                                    props.products[item].size.map((size) => {
                                                        return <span key={size} className='border border-gray-400 p-1 mr-1'>{size}</span>
                                                    })
                                                }
                                            </div></> : <div className='mt-2 mx-auto'>
                                            <p className=' text-red-500 mt-2 font-bold text-center md:text-left'>Out of Stock</p>
                                        </div>}

                                    </div>
                                </div>
                            </Link>
                        }) : <h1 className='font-bold'>Sorry all the items are currently out of stock. New stock is coming soon. Stay Tuned!</h1>}
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
    let products = await Product.find({ category: "accessories" });
    let prod = {};
    for (let item of products) {
        if (item.title in prod) {
            if (item.availableQuantity > 0) {
                !prod[item.title].color.includes(item.color) ? prod[item.title].color.push(item.color) : null;
                !prod[item.title].size.includes(item.size) ? prod[item.title].size.push(item.size) : null;
            }
        } else {
            prod[item.title] = JSON.parse(JSON.stringify(item));
            if (item.availableQuantity > 0) {
                prod[item.title].color = [item.color];
                prod[item.title].size = [item.size];
            } else {
                prod[item.title].color = [];
                prod[item.title].size = [];
            }
        }
    }
    return {
        props: { products: JSON.parse(JSON.stringify(prod)) }
    }
}

export default Accessories;