import img1 from "../../assets/offer1.jpg"
import img2 from "../../assets/offer2.jpg"

const SpecialOffers = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5 pb-10 px-2">
            <div className="relative">
                <img src={img1} className="rounded-xl h-[200px] md:h-full" alt="" />
                <div className="absolute top-1/2 -translate-y-1/2 text-left left-5">
                    <p className=" bg-white inline-block px-2 rounded-md ">Special Offer</p>
                    <p className="text-xs md:text-[18px] mt-2 font-medium text-white max-w-[67%]">Beauty of Joseon Relief Sun Rice + Probiotics Spf 50+ Pa++++ 50ml</p>
                    <div className="flex items-center gap-5 mt-5 text-white">
                        <p className="bg-[#C14196] px-2 py-1 text-xs md:text-[16px] rounded-md ">Buy Now 1500 BDT</p>
                        <p className="hover:text-[#C14196] cursor-pointer">View Details</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={img2} className="rounded-xl  h-[200px] md:h-full" alt="" />
                <div className="absolute top-1/2 -translate-y-1/2 text-left left-5">
                    <p className=" bg-white inline-block px-2 rounded-md ">Special Offer</p>
                    <p className="text-xs md:text-[18px] mt-2 font-medium text-white max-w-[67%]">Beauty of Joseon Relief Sun Rice + Probiotics Spf 50+ Pa++++ 50ml</p>
                    <div className="flex items-center gap-5 mt-5 text-white">
                        <p className="bg-[#4F378B] text-xs md:text-[16px] px-2 py-1 rounded-md ">Buy Now 1500 BDT</p>
                        <p className="hover:text-[#4F378B] cursor-pointer">View Details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers