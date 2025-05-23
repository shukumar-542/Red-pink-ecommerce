import { Card, Form, Input, Radio } from "antd"
import TextArea from "antd/es/input/TextArea"
import img from "../../assets/prod4.webp"
import { TbCurrencyTaka } from "react-icons/tb"
const CheckOut = () => {
    return (
        <div className="container mx-auto my-10 px-2 md:px-0 mb-10">
            <div className="grid grid-cols-1  md:grid-cols-12 gap-5 mb-10">
                <div className="col-span-12 md:col-span-8 border border-gray-300 rounded-md shadow-2xl p-5">
                    <p className="text-2xl font-bold pb-5">Delivery Details</p>
                    <Form layout="vertical">
                        <div className="md:flex items-center gap-5">
                            <Form.Item label="Name (নাম):" className="w-full">
                                <Input placeholder="Enter Name" />
                            </Form.Item>
                            <Form.Item label="Phone Number (মোবাইল নাম্বার):" className="w-full">
                                <Input placeholder="018*********" />
                            </Form.Item>
                        </div>
                        <div className="md:flex items-center gap-5">
                            <Form.Item label="Delivery Address (ঠিকানা):" className="w-full">
                                <TextArea rows={4} placeholder="Enter Name" />
                            </Form.Item>
                            <Form.Item label="Note (optional):" className="w-full">
                                <TextArea rows={4} placeholder="018*********" />
                            </Form.Item>
                        </div>
                        <Form.Item label="Your Shipping Location :" name="shipping">
                            <Radio.Group className="">
                                <Radio value="inside">Inside Dhaka - 80 TK</Radio>
                                <Radio value="outside">Outside Dhaka - 150 TK</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form>

                </div>
                <div className="col-span-12 md:col-span-4 border border-gray-300 rounded-md shadow-2xl p-5 space-y-1">
                    <p className="text-2xl font-bold pb-5 text-center">Cart Summary</p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Quantity</span> <span>1</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Product Price</span> <span className="flex items-center "><TbCurrencyTaka size={20} />1700</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Discount</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />400</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span>Subtotal Price</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1300</span></p>
                    <p className="bg-[#E1E3E7] py-1 px-4 rounded-xs flex justify-between items-center"><span>Delivery Charge</span> <span className="flex items-center w-[50px] "><TbCurrencyTaka size={20} />80</span></p>
                    <p className="py-1 px-4 rounded-xs flex justify-between items-center"><span className="w-full">Total</span> <span className="flex items-center w-[50px]"><TbCurrencyTaka size={20} />1380</span></p>
                    <button className="bg-[#4F378B] w-full mt-5 text-white py-2 rounded-sm cursor-pointer">অর্ডার করুন </button>
                </div>
            </div>

            <Card className="rounded-lg shadow-sm my-4 ">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                        {/* Replace with your image path */}
                        <img
                            src={img}
                            alt="Tiam Vita B3 Source 40ml"
                            className="w-16 h-16 object-contain"
                        />
                        <div>
                            <p className="font-medium">Tiam Vita B3 Source 40ml</p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 md:col-span-3 text-center">
                        <p className="text-lg font-semibold text-black">
                            ৳1300{" "}
                            <span className="line-through text-gray-500 text-sm">৳1700</span>
                        </p>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-2 text-center">
                        <p className="text-lg font-medium">1</p>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-1 nd:col-span-3 text-center md:text-right">
                        <p className="text-lg font-semibold">৳1300</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CheckOut