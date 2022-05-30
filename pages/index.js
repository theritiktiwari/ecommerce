import react from "react";
import Image from "next/image";
import Link from "next/link";

import { FaTruck, FaUsers } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';

import heroImage from "../Components/assets/hero.png";
import product from "../Components/assets/product.png";

export default function Home() {
  return (
    <>
      <section className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex px-5 py-7 md:py-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
              <br className="hidden lg:inline-block" /> readymade gluten
            </h1>
            <p className="mb-5 text-justify leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-50 text-lg">Explore</button>
              <button className="ml-4 inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 text-lg">Buy Now</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center" alt="hero" src={heroImage} width={720} height={600} />
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
            <p className="lg:w-2/3 w-full text-justify leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center mb-6" src={product} alt="content" width={720} height={400} />
                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base text-justify">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link href="/products"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center mb-6" src={product} alt="content" width={720} height={400} />
                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base text-justify">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link href="/products"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center mb-6" src={product} alt="content" width={720} height={400} />
                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base text-justify">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link href="/products"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6">
                <Image className="h-40 w-full object-cover object-center mb-6" src={product} alt="content" width={720} height={400} />
                <h3 className="tracking-widest text-indigo-700 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base text-justify">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <Link href="/products"><a className="block mt-2 text-white bg-black border-0 py-2 md:py-1 px-3 focus:outline-none hover:bg-gray-800 w-full text-center">Click Here</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
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
