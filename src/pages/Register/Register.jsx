import { Form, Input } from "antd"
import img from "../../assets/login.png"


const Register = () => {
  return (
     <div className="flex justify-center items-center  h-[100vh]">
      <div className="bg-[#FCF0F4] min-w-[350px] p-4 border border-[#4F378B] rounded-md shadow-2xl">
        <div className="flex justify-center">
          <img src={img} className="h-14 w-14" alt="" />
        </div>
        <p className="text-2xl font-semibold py-2 text-center">Register</p>
        <Form>
           <Form.Item>
            <Input placeholder="Enter First Name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Enter Mobile Number" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Enter User Name" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="*********" />
          </Form.Item>
          <button className="bg-[#C14196] w-full text-white rounded-md py-2 cursor-pointer">Register</button>
        </Form>
        <div className="flex justify-between items-center py-4">
          <p className="text-[#4F378B] hover:text-[#C14196] cursor-pointer ">Forget Password?</p>
          <p className="text-[#4F378B] hover:text-[#C14196] cursor-pointer ">Create Account</p>
        </div>
      </div>
    </div>
  )
}

export default Register