import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Error from 'next/error';
import { useRouter } from 'next/router';
import Product from "../../server/models/Product";
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (!props.error) {
      setColor(props.product.color);
      setSize(props.product.size);
    }
  }, [props]);

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

  const checkPincode = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinData = await pins.json();
    if (pin) {
      if (Object.keys(pinData).includes(pin)) {
        tst('success', 'Congo! This area is deliverable!');
      } else {
        tst('success', 'Sorry! Area is not deliverable!');
      }
      setPin('');
    }
  }

  const onChangePin = (e) => {
    setPin(e.target.value);
  }

  const refreshVariant = (newSize, newColor) => {
    let url = `/product/${props.variants[newColor][newSize]['slug']}`;
    router.push(url);
  }

  const added = () => {
    tst('success', 'Product added to cart!');
    setTimeout(() => {
      router.push('/cart');
    }, 2000);
  }

  if (props.error) {
    return <Error statusCode={props.error} />
  }
  return (
    <>
      <Head>
        <title>{props.product.title} | {props.name}</title>
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
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
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className='w-full md:w-1/2 p-10 flex justify-center items-center'>
              <img alt="ecommerce" className="lg:h-auto md:h-64  object-cover object-center" src={props.product.image} />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{props.name}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{props.product.title} <span className="capitalize">({size}/{color})</span></h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-justify">{props.product.description}</p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {
                    Object.keys(props.variants).map(col => (
                      Object.keys(props.variants[col]).includes(size) ? <button onClick={() => { refreshVariant(size, col) }} key={col} className={`${color === col ? "border-black" : "border-gray-300"} ${col === "black" || col === "white" ? `bg-${col}` : `bg-${col}-500`} border-2 ml-1 rounded-full w-6 h-6 focus:outline-none`}></button> : null
                    ))
                  }
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => { refreshVariant(e.target.value, color) }} className="border appearance-none border-gray-300 py-2 focus:outline-none text-base pl-3 pr-10">
                      {color &&
                        Object.keys(props.variants[color]).map(size => (
                          <option value={size} key={size}>{size}</option>
                        ))
                      }
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {props.product.availableQuantity > 0 ? <>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">₹{props.product.price}</span>
                  <div className="flex justify-between">
                    <button onClick={() => { props.buyNow(slug, 1, props.product.price, props.product.title, size, color, props.product.image) }} className="flex text-black border bg-white border-black py-2 px-6 focus:outline-none hover:text-white hover:bg-black">Buy Now</button>
                    <button onClick={() => { props.addToCart(slug, 1, props.product.price, props.product.title, size, color, props.product.image); added(); }} className="flex ml-3 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800">Add to Cart</button>
                  </div>
                </div>
              </> : <div className='mt-2 mx-auto'>
                <p className='text-red-500 title-font font-medium text-xl md:text-xl'>Out of Stock</p>
              </div>}
              <div className="flex my-5 justify-between">
                <input type="text" onChange={onChangePin} value={pin} placeholder="Enter Your Pincode" className='border border-gray-300 bg-gray-100 mr-3 focus:outline-none px-3 py-2 w-full' />
                <button onClick={checkPincode} className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800">Check</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  if (product == null) {
    return {
      props: {
        error: 404
      }
    }
  }
  let variants = await Product.find({ title: product.title, category: product.category });
  let colorSizeSlug = {}
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      error: error,
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug))
    }
  }
}

export default Slug


