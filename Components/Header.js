import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Header = (props) => {
    const [dropDown, setDropDown] = useState(false)
    const toggleDropDown = () => {
        setDropDown(!dropDown);
    }

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
                        {!props.user.token && <Link href={"/auth"}><a className="hover:text-gray-900">Login</a></Link>}
                    </nav>
                    <Link href={"/cart"}>
                        <a><FaShoppingCart className='cursor-pointer text-2xl absolute right-12 top-7' /></a>
                    </Link>
                    {props.user.token &&
                        <>
                            <FaUserCircle onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className='cursor-pointer text-2xl absolute right-20 top-7' />

                            {dropDown && <div onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className='absolute right-20 top-14 md:top-12 px-5 py-2 w-36 bg-white  border shadow-lg'>
                                <ul className=''>
                                    <Link href={"/profile"}><a><li className='my-2'>My Account</li></a></Link>
                                    <Link href={"/orders"}><a><li className='my-2'>My Orders</li></a></Link>
                                    <li onClick={props.logout} className='cursor-pointer text-red-500 my-2'><a>Logout</a></li>
                                </ul>
                            </div>}
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Header