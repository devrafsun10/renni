import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiArrowDownSLine } from "react-icons/ri";
import { FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div className=' bg-[#F4F4F4]'>
        <div className=' hidden container md:flex md:items-center md:justify-between py-2.5'>

            <div>
                <img src={logo} alt="#logo" />
            </div>

            <div>
                <ul className='flex items-center gap-x-7.5 font-primary font-bold text-[16px] text-[#141414]  '>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Services
                        <RiArrowDownSLine/>
                    </li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Blog
                        <RiArrowDownSLine/>
                    </li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Project
                        <RiArrowDownSLine/>
                    </li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>

            <div className=' flex items-center gap-x-2'>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                <FaInstagram />
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaLinkedinIn/>
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaTwitter/>
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaFacebookF/>
                </div>
                <div className='bg-[#FF494A] p-2 rounded-full cursor-pointer'>
                    <HiOutlineBars3BottomRight className='text-[#FFFFFF] font-bold text-2xl'/>
                </div>
            </div>
        </div>

        {/* mobilemenu */}

         <div className=' md:hidden container flex items-center justify-between py-2.5 p-5'>

            <div>
                <img src={logo} alt="#logo" />
            </div>

            


            {/* <div className=' flex items-center gap-x-2'>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                <FaInstagram />
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaLinkedinIn/>
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaTwitter/>
                </div>
                <div className='bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer'>
                    <FaFacebookF/>
                </div>
                <div className='bg-[#FF494A] p-2 rounded-full cursor-pointer'>
                    <HiOutlineBars3BottomRight className='text-[#FFFFFF] font-bold text-2xl'/>
                </div>
            </div> */}
            {
                show ? (
                    <div className='absolute top-15 left-0 p-5 w-full z-10 bg-[#F4F4F4]'>
                <ul className='font-primary font-bold text-[16px] text-[#141414] '>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Services
                        <RiArrowDownSLine/>
                    </li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Blog
                        <RiArrowDownSLine/>
                    </li>
                    <li className='flex items-center gap-x-0.75 cursor-pointer'>
                        Project
                        <RiArrowDownSLine/>
                    </li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
                ) :
           ""
            }
             {
            show ? 
            <div

                onClick={handleClick}
                 className='bg-[#FF494A] p-2 rounded-full cursor-pointer'>
                    <HiOutlineBars3BottomRight className='text-[#FFFFFF] font-bold text-2xl'/>
                    </div>
            :
            (
                <div

                onClick={handleClick}
                 className='bg-[#FF494A] p-2 rounded-full cursor-pointer'>
                    <HiOutlineBars3BottomRight className='text-[#FFFFFF] font-bold text-2xl'/>
                    </div>
            )
        }
           
        </div>
    </div>
  )
}

export default Navbar