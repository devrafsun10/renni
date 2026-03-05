import React, { useState } from 'react'
import banner from "../../assets/banner.svg";
import sideimg from "../../assets/siteimg.svg";
import massanger from "../../assets/massangericon.svg";
import logo from "../../assets/logo.svg";
import crossicon from "../../assets/crossicon.svg";
import cardbanner from "../../assets/cardbanner.svg";
import phn from "../../assets/phnicon.svg";
import msg from "../../assets/msgicon.svg";
import location from "../../assets/locationicon.svg";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Bannerresponsive = () => {
    const [show, setShow] = useState(false);
    
      const handleclick = () => {
        setShow(!show);
        console.log("ok cool");
      };
  return (
    <div className='md:hidden p-5 relative'>
        {/* cardPart */}
        <div className=" absolute top-152.5 right-3 cursor-pointer">
                <img onClick={handleclick} src={massanger} alt="#massanger" />
              </div>

              {show ? (
                      <div className="w-90 bg-[#F4F4F4] absolute top-0 right-0 z-25">
                        <div className=" flex items-center justify-between py-4 px-2 bg-[#EDEDED]">
                          <img src={logo} alt="logo" />
                          <img
                            className=" cursor-pointer z-4"
                            onClick={handleclick}
                            src={crossicon}
                            alt="crossicon"
                          />
                        </div>
              
                        <div className=" cardcontainer py-7.5">
                          <img src={cardbanner} alt="cardbanner" />
              
                          <div>
                            <h5 className=" font-secondary font-bold text-[16px] text-[#141414] mt-5 mb-3">
                              Freelancer delivering exceptional Webflow, and Next.js
                              solutions.
                            </h5>
                            <p className=" font-secondary font-normal text-[10px] text-[#5D6570]">
                              I am a skilled freelancer specializing in Webflow development,
                              Figma design, and Next.js projects. I deliver creative, dynamic,
                              and user-centric web solutions.
                            </p>
                          </div>
              
                          <div className="mt-5 mb-3">
                            <div className=" flex items-center gap-x-5 mb-5">
                              <div>
                                <img src={phn} alt="phone" />
                              </div>
                              <div>
                                <h6 className=" font-primary font-semibold text-[15px] text-[#FF494A]">
                                  Call Now
                                </h6>
                                <p
                                  className=" font-secondary font-normal text-[16px] text-[#141414]
                              "
                                >
                                  +92 (8800) - 98670
                                </p>
                              </div>
                            </div>
              
                            <div className=" flex items-center gap-x-5 mb-5">
                              <div>
                                <img src={msg} alt="msg" />
                              </div>
                              <div>
                                <h6 className=" font-primary font-semibold text-[15px] text-[#FF494A]">
                                  Mail Us
                                </h6>
                                <p
                                  className=" font-secondary font-normal text-[16px] text-[#141414]
                              "
                                >
                                  example@info.com
                                </p>
                              </div>
                            </div>
              
                            <div className=" flex items-center gap-x-5">
                              <div>
                                <img src={location} alt="location" />
                              </div>
                              <div>
                                <h6 className=" font-primary font-semibold text-[15px] text-[#FF494A]">
                                  My Address
                                </h6>
                                <p
                                  className=" font-secondary font-normal text-[16px] text-[#141414]
                              "
                                >
                                  66 Broklyant, New York 3269
                                </p>
                              </div>
                            </div>
                          </div>
              
                          <div>
                            <p className=" font-primary font-medium text-[16px] text-[#141414] mb-3.75">
                              find with me
                            </p>
              
                            <div className=" flex items-center gap-x-2">
                              <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                                <FaInstagram />
                              </div>
                              <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                                <FaLinkedinIn />
                              </div>
                              <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                                <FaTwitter />
                              </div>
                              <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                                <FaFacebookF />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
        {/* cardPartEnd */}
        <div>
            <img src={banner} alt="banner" />
            <img className=' absolute top-55 right-0' src={sideimg} alt="sideimg" />
        </div>

        <div>
            <div className='mt-7.5'>
                      <h4 className="font-primary font-bold text-[20px] text-[#141414]">
                        Hello i’m
                      </h4>
                      <h1 className=" font-primary font-bold text-[38px] text-[#141414]">
                        Brooklyn Simmons
                      </h1>
                      <button className=" flex items-center gap-x-1 bg-[#FF494A] text-[#FFFFFF] font-secondary font-medium text-[16px] py-5 px-6 rounded-full cursor-pointer">
                        View Portfolio
                        <HiOutlineArrowRight />
                      </button>
                    </div>
        </div>

        <div className='mt-7.5'>
                  <h6 className=" font-secondary font-normal text-[16px] text-[#141414] mb-5">
                    About Me
                  </h6>
                  <p className=" font-secondary font-normal text-[16px] text-[#5D6570] w-[296.25px] mb-10">
                    A personal <span className="text-[#FF494A]">portfolio</span> is a
                    collection of to your work, that is achievements, and a skills that{" "}
                    <span className="text-[#FF494A]">web design</span> highlights in
                    your
                  </p>
        
                  <div>
                    <p className=" font-secondary font-normal text-[#141414] mb-2.5">
                      Find me on
                    </p>
                    <div className=" flex items-center gap-x-2">
                      <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                        <FaInstagram />
                      </div>
                      <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                        <FaLinkedinIn />
                      </div>
                      <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                        <FaTwitter />
                      </div>
                      <div className="bg-[#E7E7E7] p-3.25 rounded-full cursor-pointer">
                        <FaFacebookF />
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Bannerresponsive