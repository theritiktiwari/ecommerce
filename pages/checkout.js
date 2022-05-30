import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Checkout = (props) => {
  return (
    <>
      <Head>
        <title>Checkout | {props.name}</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Saved Address</h1>
          </div>
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/3">
              <div className="flex h-full text-gray-500 bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">Ritik Tiwari</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-justify text-base">VIT Men&apos;s Hostel B Block, Room No. 432</p>
                  <p className="leading-relaxed text-justify text-base">Kelambakkam - Vandalur Rd, Rajan Nagar</p>
                  <p className="leading-relaxed text-justify uppercase text-base">CHENNAI, TAMIL NADU 600127</p>
                  <p className="leading-relaxed text-justify text-base">India</p>
                  <Link href={"/buy"}><a className="mt-3 text-indigo-700 inline-flex items-center">Deliver to this address</a></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Add a new address</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                  <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="address1" className="leading-7 text-sm text-gray-600">House no., Flat, Building, Company, Apartment</label>
                  <input type="text" id="address1" name="address1" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="address2" className="leading-7 text-sm text-gray-600">Area, Street, Sector, Village</label>
                  <input type="text" id="address2" name="address2" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">Town/City</label>
                  <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" />
                </div>
              </div>
              <div className="p-2 w-full">
              <Link href={"/buy"}><button className="w-full flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Use this address</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout