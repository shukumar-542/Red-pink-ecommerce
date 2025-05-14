import React from 'react'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'

const ProductCard = ({ product }) => {
    return (
        <div className='border p-2 rounded-md border-[#CECECE] cursor-pointer group'>
            <div className='overflow-hidden'>

                <img src={product?.image} alt="" className='w-full h-auto object-cover transition-transform duration-700  group-hover:scale-110' />
            </div>
            <p className='text-sm font-medium h-[40px] overflow-hidden '>{product?.name}</p>
            <div className='mt-2'>
                <p className='flex items-center text-[#C14196] font-semibold text-xl'><FaBangladeshiTakaSign />{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard