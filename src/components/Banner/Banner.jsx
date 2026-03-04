import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import webblack from "../../assets/webblack.svg";
import webred from "../../assets/webred.png";
import banner from "../../assets/banner.svg";
import { FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#FFFFFF] pt-0 pb-27.25">
      <div className=" container flex items-center justify-between ">
        {/* left part */}
        <div>
          <h4 className="font-primary font-bold text-[28px] text-[#141414]">Hello i’m</h4>
          <h1 className=" font-primary font-bold text-[90px] text-[#141414] leading-[103.5px]">Brooklyn Simmons</h1>
          <button className=" flex items-center gap-x-1.5 bg-[#FF494A] text-[#FFFFFF] font-secondary font-medium text-[16px] py-5.5 px-7 rounded-full cursor-pointer">
            View Portfolio
            <HiOutlineArrowRight />
          </button>
        </div>
                {/* center part */}
        <div className="relative">
      <div className="absolute -bottom-14 -right-65.5 z-0 max-w-270">
        <img className="max-w-270" src={webblack} alt="webblack" />
      </div>

      <div className="absolute -bottom-15 left-4 z-20 max-w-225">
        <img className="max-w-full" src={webred} alt="webred" />
      </div>

      <div className="relative z-10 w-150">
        <img className="" src={banner} alt="banner" />
      </div>
    </div>
          {/* right part */}
        <div>
          <h6 className=" font-secondary font-normal text-[16px] text-[#141414] mb-5">About Me</h6>
          <p className=" font-secondary font-normal text-[16px] text-[#5D6570] w-[296.25px] mb-10">
            A personal <span className="text-[#FF494A]">portfolio</span> is a collection of to your work, that is
            achievements, and a skills that <span className="text-[#FF494A]">web design</span> highlights in your
          </p>

          <div>
            <p className=" font-secondary font-normal text-[#141414] mb-2.5">Find me on</p>
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
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
