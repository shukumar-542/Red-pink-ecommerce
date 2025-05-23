import React, { useState } from 'react'
import Descriptions from '../Descriptions/Descriptions'
import Ingredients from '../Ingredients/Ingredients'
import HowToUse from '../HowToUse/HowToUse'
import Reviews from '../Reviews/Reviews'

const ProductDescriptions = () => {
    const [activeDetails, setActiveDetails] = useState('descriptions')
    return (
        <div className=' bg-white border rounded-2xl shadow-2xl border-gray-400 p-10 my-10'>
            {/* All Table */}
            <div className=' my-5  '>

                <div className='flex items-center gap-5 text-xl font-semibold border-b  border-[#C14196]'>
                    <p onClick={() => setActiveDetails("descriptions")} className={`cursor-pointer  p-2  transition-all duration-300 ${activeDetails === "descriptions" ? "bg-[#C14196] text-white" : "hover:text-[#4F378B]"}  rounded-tr-2xl rounded-tl-2xl`}>Descriptions</p>

                    <p onClick={() => setActiveDetails("ingredient")} className={`cursor-pointer p-2  ${activeDetails === "ingredient" ? "bg-[#C14196] text-white" : "hover:text-[#4F378B]"} transition-all duration-300 rounded-tr-2xl rounded-tl-2xl`}>Ingredients</p>

                    <p onClick={() => setActiveDetails("use")} className={`cursor-pointer p-2 rounded-tr-2xl rounded-tl-2xl  ${activeDetails === "use" ? "bg-[#C14196] text-white" : "hover:text-[#4F378B]"}  transition-all duration-300`}>How To Use</p>

                    <p onClick={() => setActiveDetails("review")} className={`cursor-pointer p-2 rounded-tr-xl rounded-tl-xl ${activeDetails === "review" ? "bg-[#C14196] text-white" : "hover:text-[#4F378B]"}  transition-all duration-300`}>Reviews</p>
                </div>
            </div>

        {/* Product details on active tab */}

        {
            activeDetails === "descriptions" && <Descriptions/>
        }
        {
            activeDetails === "ingredient" && <Ingredients/>
        }
        {
            activeDetails === "use" && <HowToUse/>
        }
        {
            activeDetails === "review" && <Reviews/>
        }



        </div>
    )
}

export default ProductDescriptions