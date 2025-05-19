import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Categories = () => {
  return (
    <div className='container mx-auto '>
        <div className='flex justify-between items-center py-5'>
            <p ><span className='text-4xl font-semibold'>Fetured</span> <span className='text-[#C14196] text-4xl font-medium'>Categories</span></p>
            <p className='flex items-center gap-2 text-xl cursor-pointer border-b border-black hover:border-transparent transition-all duration-700 hover:text-[#C14196] '>

                <span>View All</span>
                <FaArrowRightLong />
            </p>
        </div>
    </div>
  )
}

export default Categories