"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";


export default function Nav() {

    const [isopen, setIsopen] = useState(false)
    const dropref = useRef<HTMLDivElement>(null)
    const [view, setView] = useState();

    useEffect(() => {

        let handler = (event: MouseEvent) => {

            if (dropref.current && !dropref.current.contains(event.target as Node)) {
                setIsopen(false)
            };
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.addEventListener('mousedown', handler)
        }
    }, []);


    return (
        <div className="shadow-sm shadow-slate-600 bg-[#172A3A]">
            <nav className="text-gray-600 body-font">
                <div className="container mx-auto flex  lg:flex-wrap gap-3 p-1 md:p-5  md:flex-row items-center justify-between flex-col-reverse">
                    <div className="flex gap-5">
                        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">

                            <span className="ml-3 text-xl ">Tailblocks</span>
                        </a>

                        <div className="w-[220] relative ">
                            <input type="text" className="rounded-lg grow-0 h-10 p-2.5 transition duration-200 border-solid border-2.5 border-black text-sm uppercase tracking-widest focus:outline-none focus:border-0.5 focus:shadow-[inset_-5px_-5px_0px_black]" placeholder="search..." />
                            <span className=" cursor-pointer absolute right-2.5 bottom-0 transform translate-y-[calc(-50%-5px)] hover:animate-icon text-black">
                                <FaSearch />
                            </span>
                        </div>
                    </div>



                    <div className="flex flex-nowrap gap-3">
                        <Link href="/Register?page=signup"
                            type="button" className="flex gap-2 items-center text-gray-900  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"> Become a seller</Link>
                        <Link href="/login"
                            type="button" className="flex gap-2 items-center  text-gray-900  hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"> <FaCartArrowDown className="w-6 h-4" />My cart</Link>

                        <div ref={dropref}>
                            <button onClick={() => setIsopen((prev) => !prev)}

                                type="button" className="text-gray-900 relative hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Register
                                {!isopen ? (
                                    <IoMdArrowDropdown className="absolute  right-1 bottom-3" />
                                ) :
                                    (
                                        <IoMdArrowDropup className="absolute  right-1 bottom-3" />
                                    )}
                            </button>
                            {isopen && (
                                <div className="  bg-white text-white divide-gray-100  shadow w-44 dark:bg-gray-700 flex flex-col gap-1 absolute right-2 top-16 rounded-lg">

                                    <Link
                                        href='/Register'
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Sign up</Link>
                                    <Link
                                        href="/Register/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Log In</Link>
                                    <Link href="/components/FirstRegister" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        My Profile</Link>
                                </div>)}
                        </div>
                    </div>

                </div>
            </nav>



        </div>
    )
}
