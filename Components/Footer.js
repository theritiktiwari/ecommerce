import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';

const Footer = (props) => {
    const copyright = (year) => {
        const currYear = new Date().getFullYear();
        return currYear === year ? year : `${year}-${currYear % 100}`;
    }
    return (
        <>
            <footer className="text-gray-600 body-font bg-gray-100">
                <div className="container px-5 pt-4 md:pt-10 mx-auto">
                    <div className="flex justify-between flex-col md:flex-row text-left order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE NOW</h2>
                            <div className="flex flex-col">
                                <p className="leading-7 text-sm text-gray-600">To be one of the first to know about the new products, discounts, updates and more.</p>
                                <div className="flex justify-between w-full">
                                    <input type="text" id="footer-field" name="footer-field" className="w-full mr-2 bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-transparent focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out" />
                                    <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800">Subscribe</button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 md:w-1/2 w-full px-4 flex md:justify-around justify-between mt-10 md:mt-0">
                            <div className='md:mx-10'>
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Links</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <Link href={"/"} className="text-gray-600 hover:text-gray-800"><a>Home</a></Link>
                                    </li>
                                    <li>
                                        <Link href={"/about"} className="text-gray-600 hover:text-gray-800"><a>About</a></Link>
                                    </li>
                                    <li>
                                        <Link href={"/contact"} className="text-gray-600 hover:text-gray-800"><a>Contact</a></Link>
                                    </li>
                                    <li>
                                        <Link href={"../"} className="text-gray-600 hover:text-gray-800"><a>Main Menu</a></Link>
                                    </li>
                                </nav>
                            </div>
                            <div>
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Products</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-gray-200'>
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">{props.name}</span>
                        </a>
                        <p className="text-sm text-gray-500 text-center sm:ml-6 sm:mt-0 mt-4">© {copyright(2020)} —
                            <a href="https://twitter.com/theritiktiwari" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@theritiktiwari</a>. All Rights Reserved.
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="ml-3 text-gray-500 text-xl hover:text-blue-500 transition-colors duration-300 ease-in-out" href="#">
                                <FaFacebookF />
                            </a>
                            <a className="ml-3 text-gray-500 text-xl hover:text-blue-300 transition-colors duration-300 ease-in-out" href="#">
                                <FaTwitter />
                            </a>
                            <a className="ml-3 text-gray-500 text-xl hover:text-pink-700 transition-colors duration-300 ease-in-out" href="#">
                                <FaInstagram />
                            </a>
                            <a className="ml-3 text-gray-500 text-xl hover:text-blue-700 transition-colors duration-300 ease-in-out" href="#">
                                <FaLinkedin />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer