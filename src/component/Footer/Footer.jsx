import { FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuDot, LuPhone } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#FBF3F8]">
      {/* Fixed Cart Button for Mobile View */}
      <div className="fixed bottom-0  z-50 md:hidden w-full">
        <div className="bg-[white] flex items-center gap-2 justify-between px-2">
          <p className="flex flex-col items-center">
            <MdHome size={20} />
            <span className="text-xs">Home</span>
          </p>
          <p className="flex flex-col items-center">
            <IoMdHeartEmpty size={20} />
            <span className="text-xs">White List</span>
          </p>
          <Link to="/cart">
            <div className="bg-[#B33C89] text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" width="24" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a.75.75 0 01.728.578l.694 3.11M6 12.75h12.638c.778 0 1.293-.79 1.023-1.51l-1.615-4.41a1.125 1.125 0 00-1.023-.74H5.1m0 0L4.057 4.38a.75.75 0 00-.729-.63H2.25m2.85 7.5L6 19.5m0 0a1.5 1.5 0 003 0m-3 0h10.5m0 0a1.5 1.5 0 003 0m-3 0L17.25 16.5" />
              </svg>
              <span className="text-xs">Cart(1)</span>
            </div>
          </Link>
           <p className="flex flex-col items-center">
            <FiPhone size={20} />
            <span className="text-xs">Contact</span>
          </p>
           <p className="flex flex-col items-center">
            <FaRegUserCircle size={20} />
            <span className="text-xs">User</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 border-b border-[#D1D5DB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10">
          <div>
            <p>Korean Shop</p>
            <p>Bangladesh</p>
            <p>
              Real beauty starts truly with your skin and skin Improves
              Confidence.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Popular Category</p>
            <div className="space-y-2 text-[18px]">
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Home</p>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Product</p>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Blogs</p>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Sitemap</p>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> FAQ</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Customer Service</p>
            <div className="space-y-2 text-[18px]">
              <Link to={"/about-us"}>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> About Us</p>
              </Link>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Contact Us</p>
              <Link to="/return-refund"><p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Return & Refund</p></Link>

              <Link to={"/shipping-delivery"}>
                <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Shipping & Delivery</p>
              </Link>
              <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "><LuDot /> Store Location</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium mb-4">Contact Us</p>
            <div className="space-y-2 text-[18px]">
              <p className="flex gap-2 items-center"><LuPhone /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> 01303-779646</span></p>
              <p className="flex gap-2 items-center"><HiOutlineMail /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> Koreanshop@gmail.com</span></p>
              <p className="flex gap-2 items-center"><FaLocationDot /><span className=" cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 "> Rampura, Banasree, Dhaka</span></p>

            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 flex items-center justify-between">
        <p>© 2025 All right reserved</p>
        <div className="flex items-center gap-2">
          <p className="flex border-r-2 p-2  items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 ">Terms and conditions</p>
          <p className="flex items-center cursor-pointer hover:text-[#C14196] transition-all duration-1000 hover:scale-105 ">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;