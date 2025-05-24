import { Select } from 'antd'
import React from 'react'
import ProductCard from '../../component/ProductCard/ProductCard'
import { products } from '../../constants/product'

const CategoryProduct = () => {
  return (
    <div className='container mx-auto bg-[#FEFEFE]'>
      {/* Filter products */}
      <div className='bg-white shadow-md border border-gray-300 rounded-md my-5 flex items-center gap-5 justify-between p-4'>
        <p className='w-[500px]'>Filter Options :</p>
        <div className='w-[100%]'>
          <Select defaultValue={"select Brand"} className='w-[100%]'>
            <Select.Option>All</Select.Option>
            <Select.Option>APBL</Select.Option>
            <Select.Option>Abib</Select.Option>
            <Select.Option>Acwell</Select.Option>
            <Select.Option>Atomy</Select.Option>
          </Select>
        </div>
        <div className='w-[100%]'>
          <Select defaultValue={"select Category"}  className='w-[100%]'>
            <Select.Option>All</Select.Option>
            <Select.Option>APBL</Select.Option>
            <Select.Option>Abib</Select.Option>
            <Select.Option>Acwell</Select.Option>
            <Select.Option>Atomy</Select.Option>
          </Select>
        </div>
        <div  className='w-[100%]'>
          <Select defaultValue={"select Screen type"}  className='w-[100%]'>
            <Select.Option>All</Select.Option>
            <Select.Option>APBL</Select.Option>
            <Select.Option>Abib</Select.Option>
            <Select.Option>Acwell</Select.Option>
            <Select.Option>Atomy</Select.Option>
          </Select>
        </div>
        <div  className='w-[100%]'>
          <Select defaultValue={"select Screen Concern"}  className='w-[100%]'>
            <Select.Option>All</Select.Option>
            <Select.Option>APBL</Select.Option>
            <Select.Option>Abib</Select.Option>
            <Select.Option>Acwell</Select.Option>
            <Select.Option>Atomy</Select.Option>
          </Select>
        </div>
      </div>

      {/* Products */}
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-8'>
                {
                    products?.map(product => <ProductCard product={product} />)
                }
            </div>
    </div>
  )
}

export default CategoryProduct