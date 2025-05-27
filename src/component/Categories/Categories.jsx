import { FaArrowRightLong } from 'react-icons/fa6'
import { categories } from '../../constants/category'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // tablets and small desktops
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // large phones / small tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto pb-5 overflow-hidden'>
      <div className='flex justify-between items-center py-5 px-2 md:px-0'>
        <p ><span className='text-md md:text-4xl font-semibold'>Fetured</span> <span className='text-[#C14196]  font-medium'>Categories</span></p>
        <p className='flex items-center gap-2 md:text-xl cursor-pointer border-b border-black hover:border-transparent transition-all duration-700 hover:text-[#C14196] '>

          <span>View All</span>
          <FaArrowRightLong />
        </p>
      </div>
      <Slider {...settings}>
        {categories?.map((brand, index) => (
          <div
            key={index}
            className="px-2 py-8"
          >
            <div className="bg-white   border border-gray-400 shadow-md rounded-tr-full rounded-tl-full  cursor-pointer">
              <div className='py-4'>

                <img src={brand.icon} alt={`brand-${index}`} className="h-36 mx-auto " />
              </div>
              <p className='text-center border-t border-gray-400  py-2'>{brand?.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Categories