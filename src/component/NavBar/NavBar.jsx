import React, { useState } from "react";
import img1 from "../../assets/logo.jpeg";
import { IoIosArrowDown, IoMdNotifications } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { IoOptionsOutline } from "react-icons/io5";
import { brands, categories } from "../../constants/category";
import { BiSupport } from "react-icons/bi";
import BrandDropdown from "../BrandDropDown/BrandDropDown";
import SkinCareDropdown from "../SkinCareDropdown/SkinCareDropdown";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    // const categories = ["Electronics", "Fashion", "Books", "Home Appliances", "Toys"];

    return (
        <div className=" fixed top-0 left-0 right-0 z-50 bg-white   ">
            {/* Top Navbar */}
            <div className="py-2 border-b bg-cover  border-[#CECECE] ">
                <div className="container mx-auto h-full flex items-center  justify-between px-4 md:px-8">
                    {/* Logo */}
                    <div>
                        <NavLink to={"/"}>
                            <img className="h-16 rounded-sm" src={img1} alt="Logo" />
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
                        <NavLink to={"/cart"}>
                            <div className="text-[#4F378B] relative">
                                <GiShoppingCart size={40} />
                                <p className="absolute -top-1 -right-4 bg-red-600 h-6 w-6 rounded-full text-center text-white">0</p>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                    <button className="absolute top-5 right-5 text-gray-800" onClick={() => setMenuOpen(false)}>
                        <HiX size={28} />
                    </button>
                    <NavLink to="/home" onClick={() => setMenuOpen(false)} className="text-xl py-2">Home</NavLink>
                    <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">About us</NavLink>
                    <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className="text-xl py-2">Contact us</NavLink>
                    
                    <NavLink to="/login" onClick={() => setMenuOpen(false)} className="text-xl py-2 mt-2">Login</NavLink>
                    <NavLink to={"/signup"} className="bg-[#4F378B] text-white px-6 py-2 rounded mt-4" onClick={() => setMenuOpen(false)}>Sign Up Here</NavLink>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="container  bg-white  mx-auto flex justify-between items-center py-5 md:py-0 ">
                <div className="flex items-center gap-3 md:gap-8 relative px-4">
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => setCategoryOpen(!categoryOpen)}
                            className="bg-[#4F378B] py-3 cursor-pointer px-8 text-white flex items-center gap-2 "
                        >
                            <IoOptionsOutline size={20} /> Category <IoIosArrowDown size={20} />
                        </button>

                        {categoryOpen && (
                            <div className={`absolute flex flex-wrap gap-10 left-0 mt-2 min-w-4xl bg-white shadow-lg rounded transition-all duration-300 ease-in-out transform z-50 `}>
                                {categories.map((category, index) => (
                                    <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer ">
                                        <img className="h-20 w-20" src={category?.icon} alt="" />
                                        <p className="text-center">{category?.name}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to={"/"}><p className="cursor-pointer hover:text-[#4F378B] text-xs md:text-[16px]">Home</p></NavLink>
                    <NavLink to={"/category/:category"}><p className="cursor-pointer hover:text-[#4F378B] text-xs md:text-[16px]">Products</p></NavLink>

                    <BrandDropdown brands={brands} />
                    <SkinCareDropdown />
                    <NavLink><p className="text-xs md:text-[16px]">Combo</p></NavLink>
                    <NavLink className={"text-xs md:text-[16px]"}>Offers</NavLink>
                    <NavLink className={"hidden md:block"} to={"/category/:category"}>New Arrival</NavLink>
                    <NavLink className={"hidden md:block"} to={"/category/:category"}>Best Sellers</NavLink>
                </div>
                <div >
                    <div className="hidden md:flex items-center gap-2 ">
                        <BiSupport size={25} />
                        <div>
                            <span className="text-gray-700">Hotline:</span>
                            <p className="text-[#4F378B]">+8801872999038</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;
