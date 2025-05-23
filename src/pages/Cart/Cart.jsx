import React from 'react'
import { TbCurrencyTaka } from 'react-icons/tb'

const Cart = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-2xl mt-5 text-[#4F378B] font-semibold border-b-2 border-[#4F378B] inline-block '>Cart</p>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mt-5'>
                <div className='col-span-12 md:col-span-8 border border-gray-300 rounded-md shadow-2xl'>
                    
                </div>


                <div className="col-span-12 md:col-span-4 border border-gray-300 rounded-md shadow-2xl p-5 space-y-1">
                    <p className="text-2xl font-bold pb-5 text-center">Cart Summary</p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Quantity</span> <span>1</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Product Price</span> <span className="flex items-center "><TbCurrencyTaka size={20} />1700</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Discount</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />400</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Subtotal Price</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1300</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Delivery Charge</span> <span className="flex items-center w-[50px] "><TbCurrencyTaka size={20} />80</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span className="w-full">Total</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1380</span></p>
                    <button className="bg-[#4F378B] w-full mt-5 text-white py-2 rounded-sm cursor-pointer">Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart