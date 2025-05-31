import { TbCurrencyTaka } from 'react-icons/tb'
import React, { useState, useMemo } from 'react';
import { Table, Checkbox, Button, InputNumber, Space, Image, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'; // Ant Design icons
import img1 from "../../assets/prod1.WEBP"
import img2 from "../../assets/prod2.WEBP"
import { Link } from 'react-router-dom';
const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            key: 'product-1', // Required for Table component
            image: img1, // Placeholder image
            name: 'W.Skin Laboratory A.M Cream (Anti-Melasma) 50ml',
            originalPrice: 1700,
            currentPrice: 1500,
            quantity: 1,
            selected: true, 
        },
        {
            key: 'product-2',
            image: img2,
            name: 'Another Awesome Product 100ml',
            currentPrice: 800,
            quantity: 2,
            selected: false,
        },
    ]);

    const handleQuantityChange = (key, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.key === key ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleDeleteItem = (key) => {
        setCartItems(prevItems => prevItems.filter(item => item.key !== key));
        message.success('Item deleted successfully!');
    };

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setCartItems(prevItems =>
            prevItems.map(item => ({ ...item, selected: checked }))
        );
    };

    const handleIndividualSelect = (key, checked) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.key === key ? { ...item, selected: checked } : item
            )
        );
    };

    const handleDeleteSelected = () => {
        setCartItems(prevItems => prevItems.filter(item => !item.selected));
        message.success('Selected items deleted!');
    };

    const allItemsSelected = useMemo(
        () => cartItems.length > 0 && cartItems.every(item => item.selected),
        [cartItems]
    );

    const columns = [
        {
            title: (
                <Checkbox
                    onChange={handleSelectAll}
                    checked={allItemsSelected}
                    indeterminate={cartItems.some(item => item.selected) && !allItemsSelected}
                >
                    Select All
                </Checkbox>
            ),
            dataIndex: 'selected',
            key: 'selected',
            render: (selected, record) => (
                <Checkbox
                    checked={selected}
                    onChange={(e) => handleIndividualSelect(record.key, e.target.checked)}
                />
            ),
        },
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'product',
            render: (text, record) => (
                <div className="flex items-center space-x-4">
                    <Image src={record.image} alt={text} width={40} height={40} preview={false} className="rounded-md" />
                    <span className="font-semibold text-gray-800">{text}</span>
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'currentPrice',
            key: 'price',
            render: (price, record) => (
                <Space direction="vertical" size={0} className="items-start">
                    <span className="text-lg font-medium text-blue-600">৳ {price}</span>
                    {record.originalPrice && (
                        <span className="text-sm line-through text-gray-400">৳ {record.originalPrice}</span>
                    )}
                </Space>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity, record) => (
                <InputNumber
                    min={1}
                    value={quantity}
                    onChange={(value) => handleQuantityChange(record.key, value)}
                    className="w-24 md:w-32" // Responsive width for input
                />
            ),
        },
        {
            title: 'Subtotal',
            key: 'subtotal',
            render: (_, record) => {
                const subtotal = record.currentPrice * record.quantity;
                return <span className="text-lg font-bold text-green-700">৳ {subtotal}</span>;
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure to delete this item?"
                    onConfirm={() => handleDeleteItem(record.key)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="text" danger icon={<DeleteOutlined />} className="text-red-500 hover:text-red-700" />
                </Popconfirm>
            ),
        },
    ];




    return (
        <div className='container mx-auto'>
            <p className='text-2xl mt-5 text-[#4F378B] font-semibold border-b-2 border-[#4F378B] inline-block '>Cart</p>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mt-5'>
                <div className='col-span-12 md:col-span-8 border border-gray-300 rounded-md shadow-2xl'>
                    <div className="p-4 md:p-8 bg-gray-50">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-6 border-b pb-4">
                                <div className="flex items-center space-x-4">
                                  
                                </div>
                                <Button
                                    onClick={() => {
                                        // Confirm "Delete all"
                                        if (window.confirm("Are you sure you want to delete all items?")) {
                                            setCartItems([]);
                                            message.success('All items deleted!');
                                        }
                                    }}
                                    danger
                                    type="primary"
                                    className="hidden sm:inline-flex" // Hide on extra small, show on small and up
                                >
                                    Delete all
                                </Button>
                            </div>

                            <Table
                                columns={columns}
                                dataSource={cartItems}
                                pagination={false} // You might want pagination for long lists
                                className="cart-table-custom" // Custom class for Tailwind overrides
                                scroll={{ x: 'max-content' }} // Enables horizontal scrolling on small screens if content overflows
                            />
                        </div>
                    </div>
                </div>


                <div className="col-span-12 md:col-span-4 border border-gray-300 rounded-md shadow-2xl p-5 space-y-1">
                    <p className="text-2xl font-bold pb-5 text-center">Cart Summary</p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Quantity</span> <span>1</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Product Price</span> <span className="flex items-center "><TbCurrencyTaka size={20} />1700</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Discount</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />400</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Subtotal Price</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1300</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Delivery Charge</span> <span className="flex items-center w-[50px] "><TbCurrencyTaka size={20} />80</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span className="w-full">Total</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1380</span></p>
                    <Link to={"/checkout"}><button className="bg-[#4F378B] w-full mt-5 text-white py-2 rounded-sm cursor-pointer">Check Out</button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Cart