import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import products from "../../Components/assets/prodImage.png";

const index = (props) => {
  return (
    <>
      <Head>
        <title>All Products | {props.name}</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link href={"/product/prod1"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod2"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod3"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod4"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod5"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod6"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod7"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

            <Link href={"/product/prod8"}>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 cursor-pointer">
                <a className="block relative overflow-hidden">
                  <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={products} width={400} height={400} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">₹499</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}

export default index