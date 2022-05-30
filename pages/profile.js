import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Profile = (props) => {

  const handleOnChange = (e) => {
    return e.target.value;
  }
  return (
    <>
      <Head>
        <title>Profile | {props.name}</title>
      </Head>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-16 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Update Your Account</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"Ritik Tiwari"} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                  <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={9876543210} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"theritiktiwari@gmail.com"} disabled />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="address1" className="leading-7 text-sm text-gray-600">House no., Flat, Building, Company, Apartment</label>
                  <input type="text" id="address1" name="address1" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"Ritik Tiwari"} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="address2" className="leading-7 text-sm text-gray-600">Area, Street, Sector, Village</label>
                  <input type="text" id="address2" name="address2" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"Ritik Tiwari"} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={110003} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-600">Town/City</label>
                  <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"Ritik Tiwari"} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" value={"Ritik Tiwari"} onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 w-full">
                <Link href={"/order"}><button className="w-full flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Update Now</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-2xl text-xl text-gray-900">Change the password</h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="currentPassword" className="leading-7 text-sm text-gray-600">Current Password</label>
                  <input type="password" id="currentPassword" name="currentPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="newPassword" className="leading-7 text-sm text-gray-600">New Password</label>
                  <input type="password" id="newPassword" name="newPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="confirmNewPassword" className="leading-7 text-sm text-gray-600">Confirm New Password</label>
                  <input type="password" id="confirmNewPassword" name="confirmNewPassword" className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8" onChange={handleOnChange} />
                </div>
              </div>
              <div className="p-2 w-full">
                <Link href={"/order"}><button className="w-full flex justify-center mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 text-lg">Change Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile