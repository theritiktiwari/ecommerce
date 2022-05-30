import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import product from "../Components/assets/prodImage.png";
import Image from 'next/image';

const order = (props) => {
  return (
    <>
      <Head>
        <title>Order | {props.name}</title>
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Your Orders</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image alt="team" className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={product} width={200} height={200} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Product Name</h2>
                  <h3 className="text-gray-500 mb-3">May 30, 2022</h3>
                  <Link href="/"><a><p className="mb-4 text-indigo-700">More Details</p></a></Link>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image alt="team" className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={product} width={200} height={200} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Product Name</h2>
                  <h3 className="text-gray-500 mb-3">May 30, 2022</h3>
                  <Link href="/"><a><p className="mb-4 text-indigo-700">More Details</p></a></Link>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image alt="team" className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={product} width={200} height={200} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Product Name</h2>
                  <h3 className="text-gray-500 mb-3">May 30, 2022</h3>
                  <Link href="/"><a><p className="mb-4 text-indigo-700">More Details</p></a></Link>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image alt="team" className="flex-shrink-0 w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={product} width={200} height={200} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Product Name</h2>
                  <h3 className="text-gray-500 mb-3">May 30, 2022</h3>
                  <Link href="/"><a><p className="mb-4 text-indigo-700">More Details</p></a></Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default order