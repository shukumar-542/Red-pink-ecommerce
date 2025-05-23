import { FaBangladeshiTakaSign, FaRegHeart } from 'react-icons/fa6'
import { RiShoppingCart2Line } from 'react-icons/ri'
import Colors from '../../constants/Colors'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to={"/product-details/:id"}>
            <div className='border p-2 rounded-md border-[#CECECE] cursor-pointer group shadow-md'>
                <div className='flex items-center justify-between'>

                    <p className='bg-[#C14196] inline-block text-white text-xs px-2 py-1 rounded-sm'>Save {product.discount}</p>
                    <FaRegHeart />
                </div>
                <div className='overflow-hidden'>

                    <img src={product?.image} alt="" className='w-full h-auto object-cover transition-transform duration-700  group-hover:scale-110' />
                </div>
                <p className='text-sm font-medium h-[40px] overflow-hidden '>{product?.name}</p>
                <div className='flex justify-between items-center'>
                    <div className='mt-2 flex items-center gap-1'>
                        <p className='flex items-center text-[#C14196] font-semibold text-[22px]'><FaBangladeshiTakaSign />{product.price}</p>
                        <p className='flex items-center text-gray-500 line-through'><FaBangladeshiTakaSign />{product?.originalPrice}</p>
                    </div>
                    <p className='text-gray-500'>Sold</p>
                </div>
                <div className='flex items-center justify-between gap-2 text-white pt-5'>
                    <div className='bg-[#C14196] hover:bg-[#32004A]  transition-all duration-300 rounded-full p-2 cursor-pointer '>
                        <RiShoppingCart2Line size={22} />
                    </div>
                    <button className={`bg-[${Colors.primary}] hover:bg-[#32004A] transition-all duration-300 w-full py-2 rounded-md  cursor-pointer`}>Buy Now</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard