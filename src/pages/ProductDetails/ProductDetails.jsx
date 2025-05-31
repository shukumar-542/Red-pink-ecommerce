import { FaBangladeshiTakaSign, FaMinus, FaPlus } from "react-icons/fa6"
import img from "../../assets/prod1.webp"
import img2 from "../../assets/prod2.webp"
import img3 from "../../assets/prod3.webp"
import img4 from "../../assets/prod4.webp"
import img5 from "../../assets/prod5.webp"
import { useState } from "react"
import { RiShoppingCart2Line } from "react-icons/ri"
import Colors from "../../constants/Colors"
import ProductDescriptions from "../../component/ui/ProductDescriptions/ProductDescriptions"
import { Link } from "react-router-dom"
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
const ProductDetails = () => {
    const [countProduct, setCountProduct] = useState(1)
    return (
        <div className='container mx-auto mt-10'>
            {/* Product details section top */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                <div className='col-span-9  flex gap-5 shadow-2xl rounded-md border-gray-500 p-10'>
                    <div className={` border-[#C14196] border-2 rounded-xl p-2 w-full`}>
                        {/* <img src={img} className="h-96" alt="" /> */}
                        <div className="w-[500px]">
                            <InnerImageZoom
                                src={img}
                                zoomSrc={img} // high-res image optional, same as src if not available
                                zoomType="hover" // zoom on hover
                                zoomPreload={true}
                                cursor="zoom-in"
                                zoomScale={1.5} // 1.5x zoom
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl font-medium text-[#C14196]">Tiam Vita B3 Source 40ml</p>
                        <p><span className="font-medium">Product Code : </span><span>KSB-P0022</span></p>
                        <p><span className="font-medium">Brand : </span><span>Tiam</span></p>
                        <p><span className="font-medium">Origin : </span><span>Korea</span></p>
                        <p><span className="font-medium">Category : </span><span>Serum</span></p>
                        <p><span className="font-medium">Status : </span><span>In Stock </span></p>
                        <div className='mt-2 flex items-center  gap-1'>
                            <p className='flex items-center  font-semibold text-[22px]'><FaBangladeshiTakaSign />1300</p>
                            <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                            <div className=" border-[#4F378B] border-2 rounded-md flex items-center justify-between ml-5 h-10 w-[120px]  overflow-hidden">
                                <button onClick={() => setCountProduct(countProduct - 1)} className="bg-gray-300 cursor-pointer h-full px-2 flex items-center justify-center overflow-hidden">
                                    <FaMinus />
                                </button>
                                <p className="px-2">{countProduct}</p>
                                <button onClick={() => setCountProduct(countProduct + 1)} className="bg-gray-400 cursor-pointer h-full px-2 flex my-0 py-0 items-center justify-center">
                                    <FaPlus />
                                </button>
                            </div>

                        </div>
                        <div className="flex items-center gap-5 text-white">
                            <Link to={'/checkout'}>
                                <button className="bg-[#4F378B] py-2 cursor-pointer px-5 rounded-md">BUY NOW</button>
                            </Link>
                            <Link to={"/cart"}><button className="bg-[#C14196] py-2 px-5 rounded-md cursor-pointer">ADD TO CART</button></Link>

                        </div>
                        <p>Skin discoloration, dark spots, and acne scars making you feel down? One great option is the Tiam Vita B3 Source, a strong Korean serum taking the skincare world by storm. Niacinamide (Vitamin B3) and Arbutin, the two main ingredients in this light mix, reveal a brighter, more radiant you.</p>
                    </div>

                </div>
                <div className='col-span-3 '>
                    <div className="border-b-2 border-[#C14196]">
                        <p className="text-2xl font-medium">Related <span className="text-[#C14196]">Products</span></p>
                    </div>
                    <div className="mt-5 space-y-5 max-h-[500px]  overflow-y-scroll ">
                        <div className="flex ">
                            <img src={img2} className="h-36 w-36" alt="" />
                            <div className="bg-[#EFEFEF] rounded-sm p-2">
                                <p className="text-sm  font-semibold">Goodal Green Tangerine Vita C Dark Spot Serum 40ml</p>
                                <div className=' flex items-center gap-1'>
                                    <p className='flex items-center text-[#C14196] font-semibold '><FaBangladeshiTakaSign />1300</p>
                                    <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                                </div>
                                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                                        <RiShoppingCart2Line size={18} />
                                    </div>
                                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-1 rounded-md  cursor-pointer`}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex ">
                            <img src={img2} className="h-36 w-36" alt="" />
                            <div className="bg-[#EFEFEF] rounded-sm p-2">
                                <p className="text-sm  font-semibold">Goodal Green Tangerine Vita C Dark Spot Serum 40ml</p>
                                <div className=' flex items-center gap-1'>
                                    <p className='flex items-center text-[#C14196] font-semibold '><FaBangladeshiTakaSign />1300</p>
                                    <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                                </div>
                                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                                        <RiShoppingCart2Line size={18} />
                                    </div>
                                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-1 rounded-md  cursor-pointer`}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex ">
                            <img src={img2} className="h-36 w-36" alt="" />
                            <div className="bg-[#EFEFEF] rounded-sm p-2">
                                <p className="text-sm  font-semibold">Goodal Green Tangerine Vita C Dark Spot Serum 40ml</p>
                                <div className=' flex items-center gap-1'>
                                    <p className='flex items-center text-[#C14196] font-semibold '><FaBangladeshiTakaSign />1300</p>
                                    <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                                </div>
                                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                                        <RiShoppingCart2Line size={18} />
                                    </div>
                                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-1 rounded-md  cursor-pointer`}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex ">
                            <img src={img2} className="h-36 w-36" alt="" />
                            <div className="bg-[#EFEFEF] rounded-sm p-2">
                                <p className="text-sm  font-semibold">Goodal Green Tangerine Vita C Dark Spot Serum 40ml</p>
                                <div className=' flex items-center gap-1'>
                                    <p className='flex items-center text-[#C14196] font-semibold '><FaBangladeshiTakaSign />1300</p>
                                    <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                                </div>
                                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                                        <RiShoppingCart2Line size={18} />
                                    </div>
                                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-1 rounded-md  cursor-pointer`}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex ">
                            <img src={img2} className="h-36 w-36" alt="" />
                            <div className="bg-[#EFEFEF] rounded-sm p-2">
                                <p className="text-sm  font-semibold">Goodal Green Tangerine Vita C Dark Spot Serum 40ml</p>
                                <div className=' flex items-center gap-1'>
                                    <p className='flex items-center text-[#C14196] font-semibold '><FaBangladeshiTakaSign />1300</p>
                                    <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />1700</p>
                                </div>
                                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                                        <RiShoppingCart2Line size={18} />
                                    </div>
                                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-1 rounded-md  cursor-pointer`}>Buy Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Product details section bottom */}

            <ProductDescriptions />
        </div>
    )
}

export default ProductDetails