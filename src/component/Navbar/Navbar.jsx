"use client";
import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();
    const links = <>
        <li ><Link  href="/" className={pathname === "/" ? "bg-[#244D3F] text-white" : ""}><RiHome2Line/>Home</Link></li>
        <li><Link className={pathname === "/timeline" ? "bg-[#244D3F] text-white" : ""} href="/timeline"><IoMdTime />Timeline</Link></li>
        <li><Link className={pathname === "/stats" ? "bg-[#244D3F] text-white" : ""} href="/stats"><ImStatsDots />Stats</Link></li>
    </>

    return (
        <div className='shadow-xl bg-white sticky top-0 z-50'>
            <div className="navbar container m-auto">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-1 w-35 p-2 shadow">

                            {links}
                        </ul>

                    </div>

                    <Link href="/" className="btn hidden sm:flex btn-ghost font-extrabold text-3xl">FrKeeper</Link>

                </div>

                <Link href="/" className="btn sm:hidden btn-ghost font-extrabold text-xl ">FrKeeper</Link>

                <div className="navbar-end hidden sm:flex">

                    <ul className="menu menu-horizontal px-1 gap-3 text-xl font-medium">
                        
                        {links}

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;