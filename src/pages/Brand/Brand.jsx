import brand1 from "../../assets/brand1.webp"
import brand2 from "../../assets/brand2.webp"
import brand3 from "../../assets/brand3.webp"
import brand4 from "../../assets/brand4.webp"
import brand5 from "../../assets/brand5.webp"
import brand6 from "../../assets/brand6.webp"
import brand7 from "../../assets/brand7.webp"

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7,brand1, brand2, brand3, brand4, brand5, brand6, brand7];
    return (
        <div className='container mx-auto my-5 '>
            <div className="flex flex-wrap gap-4 justify-center">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className=""
                    >
                        <div className="bg-white  rounded-md p-2  shadow-md min-w-[200px] flex justify-center">
                            <img src={brand} alt={`brand-${index}`} className="h-32  w-32 " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brand