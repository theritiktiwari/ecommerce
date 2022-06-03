import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { FaTruck, FaUsers } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';

import mainImage from "../Components/assets/main.png";
import men from "../Components/assets/men.png";
import women from "../Components/assets/women.png";
import kids from "../Components/assets/kids.png";
import accessories from "../Components/assets/accessories.png";

export default function Home() {
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    e.target.search.value = e.target.search.value.replace(/\s/g, "");
    router.push(`/products/search/${e.target.search.value}`);
  }
  return (
    <>
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-7 md:py-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Buy them
              <br /> Before they sold out
            </h1>
            <p className="mb-5 text-justify leading-relaxed">Here you can find the products of your niche. Have a look on the product. Product for men, women, kids and some other accessories are available here in the store.</p>
            <form onSubmit={search} className="flex justify-center">
              <input name="search" placeholder="Search a Product" className="w-2/3 md:w-auto text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-50 text-lg" />
              <input type="submit" value="Search" className="ml-4 w-1/3 md:w-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 text-lg" />
            </form>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center" alt="hero" src={mainImage} width={720} height={600} />
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Products</h1>
              <div className="h-1 w-20 bg-indigo-700 rounded"></div>
            </div>
            <p className="lg:w-2/3 w-full text-justify leading-relaxed text-gray-500">Whatever your need is here it is available, we have diversified the list of products which you find interesting, so please go through once.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center" src={women} alt="content" width={720} height={400} />
                <h2 className="text-lg text-gray-900 font-medium title-font my-2">Women&apos;s Wear</h2>
                <p className="leading-relaxed text-base text-justify">This section is for the ladies from Indian to Western available here.</p>
                <Link href="/products/women"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center" src={men} alt="content" width={720} height={400} />
                <h2 className="text-lg text-gray-900 font-medium title-font my-2">Men&apos;s Wear</h2>
                <p className="leading-relaxed text-base text-justify">This section is all about the men, from pant to kurta everything is here.</p>
                <Link href="/products/men"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center" src={kids} alt="content" width={720} height={400} />
                <h2 className="text-lg text-gray-900 font-medium title-font my-2">Kid&apos;s Wear</h2>
                <p className="leading-relaxed text-base text-justify">The variety is so much diversified here, which you cannot resist for small kids.</p>
                <Link href="/products/kids"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center" src={accessories} alt="content" width={720} height={400} />
                <h2 className="text-lg text-gray-900 font-medium title-font my-2">Accessories</h2>
                <p className="leading-relaxed text-base text-justify">Most important part of our life right now is some accessories for all kind of problems.</p>
                <Link href="/products/accessories"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <div className="flex justify-center py-2">
                  <FaTruck className="text-indigo-700 text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-white">99+</h2>
                <p className="leading-relaxed">Orders Completed</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <div className="flex justify-center py-2">
                  <FaUsers className="text-indigo-700 text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-white">1.3K+</h2>
                <p className="leading-relaxed">Happy Customers</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <div className="flex justify-center py-2">
                  <AiOutlineShop className="text-indigo-700 text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-white">2.7K+</h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <div className="flex justify-center py-2">
                  <MdPlace className="text-indigo-700 text-5xl" />
                </div>
                <h2 className="title-font font-medium text-3xl text-white">50+</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
