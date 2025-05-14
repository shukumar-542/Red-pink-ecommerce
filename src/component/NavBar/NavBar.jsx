import React, { useState } from "react";
import img1 from "../../assets/logo.jpeg";
import { IoMdNotifications } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="py-2 bg-cover border-b border-[#CECECE] " >
            <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8  ">

                {/* Logo */}
                <div>
                    <NavLink to={"/"}><img className="h-16 rounded-sm " src={img1} alt="Logo" /></NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-5">
                    <NavLink to={"/auth/login"}>
                        <div className="flex items-center gap-2">
                            <div className="border border-[#4F378B] text-[#4F378B] p-2 rounded-full">
                                <CiUser size={25} />
                            </div>
                            <div>
                                <p className="text-sm"> Hello,Sign In / Sign Up</p>
                                <p>Your Account</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={"/cart"}> <div className="text-[#4F378B] relative"><GiShoppingCart size={40} /><p className="absolute -top-1 -right-4 bg-red-600 h-6 w-6 rounded-full text-center text-white">0</p></div></NavLink>

                </div>
            </div>

            {/* Right Section */}


            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <button className="absolute top-5 right-5 text-gray-800" onClick={() => setMenuOpen(false)}>
                    <HiX size={28} />
                </button>
                <NavLink to="/home" onClick={() => setMenuOpen(false)} className="text-xl py-2">Home</NavLink>
                <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">About us</NavLink>
                <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">Contact us</NavLink>
                <NavLink to="/feedback-first-step" onClick={() => setMenuOpen(false)} className="text-xl py-2">Feedback</NavLink>
                <NavLink to="/notification" onClick={() => setMenuOpen(false)} className="bg-[#FFA175] rounded-full p-2 mt-4">
                    <IoMdNotifications size={24} color="white" />
                </NavLink>
                <NavLink to="/login" onClick={() => setMenuOpen(false)} className="text-xl py-2 mt-2">Login</NavLink>
                <NavLink to={"/signup"} className="bg-[#FFA175] text-white px-6 py-2 rounded mt-4" onClick={() => setMenuOpen(false)}>Sign Up Here</NavLink>
            </div>
        </div>
    );
};

export default NavBar;
