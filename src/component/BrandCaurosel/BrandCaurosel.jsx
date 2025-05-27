import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../assets/brand1.webp"
import brand2 from "../../assets/brand2.webp"
import brand3 from "../../assets/brand3.webp"
import brand4 from "../../assets/brand4.webp"
import brand5 from "../../assets/brand5.webp"
import brand6 from "../../assets/brand6.webp"
import brand7 from "../../assets/brand7.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BrandCarousel = () => {
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
                    slidesToShow: 2,
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

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

    return (
        <div className="container mx-auto px-2 md:px-0  overflow-hidden">
            <div className='flex justify-between items-center py-5'>
                <p ><span className='text-md md:text-4xl font-semibold'>Shop From</span> <span className='text-[#C14196]  font-medium'> Brand</span></p>
                <Link to={"/brand"}>
                    <p className='flex items-center gap-2 text-md md:text-xl cursor-pointer border-b border-black hover:border-transparent transition-all duration-700 hover:text-[#C14196] '>

                        <span>View All</span>
                        <FaArrowRightLong />
                    </p>
                </Link>
            </div>
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="px-2"
                    >
                        <div className="bg-white border rounded-md p-2 shadow-md">
                            <img src={brand} alt={`brand-${index}`} className="h-20 mx-auto" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BrandCarousel;
