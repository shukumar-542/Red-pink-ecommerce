import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import prod1 from "../../assets/prod1.webp"
import prod2 from "../../assets/prod2.webp"
import prod3 from "../../assets/prod3.webp"
import prod4 from "../../assets/prod4.webp"
import prod5 from "../../assets/prod5.webp"
import Colors from '../../constants/Colors'
import { Link } from 'react-router-dom'
const products = [
    {
        id: 'KSB-P0022',
        name: 'Tiam Vita B3 Source 40ml',
        brand: 'Tiam',
        origin: 'KOREA',
        size: '40ml',
        category: 'Serum',
        status: 'In Stock',
        price: 1300,
        originalPrice: 1700,
        discount: '23%',
        image: prod1,
        description:
            'Skin discoloration, dark spots, and acne scars making you feel down? One great option is the Tiam Vita B3 Source, a strong Korean serum taking the skincare world by storm. Niacinamide (Vitamin B3) and Arbutin reveal a brighter, more radiant you.',
    },
    {
        id: 'KSB-P0023',
        name: 'Some By Mi AHA BHA PHA 30 Days Miracle Toner 150ml',
        brand: 'Some By Mi',
        origin: 'KOREA',
        size: '150ml',
        category: 'Toner',
        status: 'In Stock',
        price: 1450,
        originalPrice: 1800,
        discount: '19%',
        image: prod2,
        description:
            'A miracle toner for acne-prone skin, enriched with tea tree water and exfoliating acids to cleanse, soothe, and tighten pores in just 30 days.',
    },
    {
        id: 'KSB-P0023',
        name: 'Some By Mi AHA BHA PHA 30 Days Miracle Toner 150ml',
        brand: 'Some By Mi',
        origin: 'KOREA',
        size: '150ml',
        category: 'Toner',
        status: 'In Stock',
        price: 1450,
        originalPrice: 1800,
        discount: '19%',
        image: prod3,
        description:
            'A miracle toner for acne-prone skin, enriched with tea tree water and exfoliating acids to cleanse, soothe, and tighten pores in just 30 days.',
    },
    {
        id: 'KSB-P0023',
        name: 'Some By Mi AHA BHA PHA 30 Days Miracle Toner 150ml',
        brand: 'Some By Mi',
        origin: 'KOREA',
        size: '150ml',
        category: 'Toner',
        status: 'In Stock',
        price: 1450,
        originalPrice: 1800,
        discount: '19%',
        image: prod4,
        description:
            'A miracle toner for acne-prone skin, enriched with tea tree water and exfoliating acids to cleanse, soothe, and tighten pores in just 30 days.',
    },
    {
        id: 'KSB-P0024',
        name: 'COSRX Advanced Snail 96 Mucin Power Essence 100ml',
        brand: 'COSRX',
        origin: 'KOREA',
        size: '100ml',
        category: 'Essence',
        status: 'In Stock',
        price: 1600,
        originalPrice: 2000,
        discount: '20%',
        image: prod1,
        description:
            'Infused with 96% snail mucin, this essence repairs skin, improves elasticity, and provides intense hydration for a youthful glow.',
    },
    {
        id: 'KSB-P0025',
        name: 'Isntree Hyaluronic Acid Watery Sun Gel 50ml',
        brand: 'Isntree',
        origin: 'KOREA',
        size: '50ml',
        category: 'Sunblock',
        status: 'In Stock',
        price: 1250,
        originalPrice: 1500,
        discount: '17%',
        image: prod2,
        description:
            'This lightweight sun gel combines SPF protection with eight types of hyaluronic acid to lock in moisture and defend your skin all day long.',
    },
    {
        id: 'KSB-P0026',
        name: 'Beauty of Joseon Glow Serum 30ml',
        brand: 'Beauty of Joseon',
        origin: 'KOREA',
        size: '30ml',
        category: 'Serum',
        status: 'Out of Stock',
        price: 990,
        originalPrice: 1200,
        discount: '18%',
        image: prod3,
        description:
            'A cult-favorite serum formulated with propolis and niacinamide to calm, brighten, and nourish tired skin with a natural glow.',
    },
    {
        id: 'KSB-P0029',
        name: 'Beauty of Joseon Glow Serum 30ml',
        brand: 'Beauty of Joseon',
        origin: 'KOREA',
        size: '30ml',
        category: 'Serum',
        status: 'Out of Stock',
        price: 990,
        originalPrice: 1200,
        discount: '18%',
        image: prod5,
        description:
            'A cult-favorite serum formulated with propolis and niacinamide to calm, brighten, and nourish tired skin with a natural glow.',
    },
    {
        id: 'KSB-P0027',
        name: 'Beauty of Joseon Glow Serum 30ml',
        brand: 'Beauty of Joseon',
        origin: 'KOREA',
        size: '30ml',
        category: 'Serum',
        status: 'Out of Stock',
        price: 990,
        originalPrice: 1200,
        discount: '18%',
        image: prod4,
        description:
            'A cult-favorite serum formulated with propolis and niacinamide to calm, brighten, and nourish tired skin with a natural glow.',
    },
    {
        id: 'KSB-P0028',
        name: 'Beauty of Joseon Glow Serum 30ml',
        brand: 'Beauty of Joseon',
        origin: 'KOREA',
        size: '30ml',
        category: 'Serum',
        status: 'Out of Stock',
        price: 990,
        originalPrice: 1200,
        discount: '18%',
        image: prod5,
        description:
            'A cult-favorite serum formulated with propolis and niacinamide to calm, brighten, and nourish tired skin with a natural glow.',
    },
];


const PopularProduct = () => {
    return (
        <div className='mt-5 px-2 md:px-0'>
            <p className='customFont text-3xl text-center'>Koren Shop Bangladesh</p>
            <p className='text-2xl md:text-5xl font-bold text-center'>Popular Product</p>
            <div className='container mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                    {
                        products?.map(product => <ProductCard product={product} />)
                    }
                </div>
               
            </div>
        </div>
    )
}

export default PopularProduct