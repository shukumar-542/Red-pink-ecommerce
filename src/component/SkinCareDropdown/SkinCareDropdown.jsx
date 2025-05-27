import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { productCategory, skinConcern, skinType } from '../../constants/category';

const SkinCareDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (category) => {
        setShowDropdown(false);
        navigate(`/category/${category}`);
    };


    return (
        <div
            className="relative hidden md:block"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <button className="cursor-pointer hover:text-[#4F378B] flex items-center gap-2">
                Skin Care <MdOutlineKeyboardArrowDown size={25} />
            </button>

            {showDropdown && (
                <div className="absolute grid grid-cols-1 md:grid-cols-3 left-0 min-w-4xl bg-white shadow-lg rounded transition-all duration-300 ease-in-out transform z-50 p-4">

                    <div>
                        <p className='text-xl font-semibold py-2'>Skin Types:</p>
                        {skinType.map((skinType, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavigate(skinType)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <p className="">{skinType}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-xl font-semibold py-2'>Skin Concern:</p>
                        {skinConcern.map((skinType, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavigate(skinType)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <p className="">{skinType}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className='text-xl font-semibold py-2'>Product Category:</p>
                        <div className='grid grid-cols-2 md:grid-cols-2'>
                            {productCategory.map((skinType, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleNavigate(skinType)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <p className="">{skinType}</p>
                                </div>
                            ))}
                        </div>

                    </div>



                    {/* <div>
                
                <div></div>
              </div>
              <div>
                <p className='text-xl font-semibold py-2'>Skin Concern:</p>
              </div>
              <div>
                
              </div> */}

                </div>
            )}
        </div>
    )
}

export default SkinCareDropdown