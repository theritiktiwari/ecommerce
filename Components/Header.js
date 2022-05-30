import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Header = (props) => {
    return (
        <>
            <header className="text-gray-600 body-font bg-white sticky top-0 z-10 shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"}>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">{props.name}</span>
                        </a>
                    </Link>
                    <nav className="md:mx-auto flex flex-wrap items-center text-base justify-center space-x-4">
                        <Link href={"/"}><a className="hover:text-gray-900">Home</a></Link>
                        <Link href={"/about"}><a className="hover:text-gray-900">About</a></Link>
                        <Link href={"/products"}><a className="hover:text-gray-900">All Products</a></Link>
                        <Link href={"/contact"}><a className="hover:text-gray-900">Contact</a></Link>
                        <Link href={"/auth"}><a className="hover:text-gray-900">Login</a></Link>
                    </nav>
                    <Link href={"/cart"}>
                        <FaShoppingCart className='cursor-pointer text-2xl absolute right-12 top-7' />
                    </Link>
                    <Link href={"/profile"}>
                            <FaUserCircle className='cursor-pointer text-2xl absolute right-20 top-7' />
                            {/* <ul className=''>
                                <li>My Account</li>
                                <li>My Orders</li>
                                <li>Logout</li>
                            </ul> */}
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header