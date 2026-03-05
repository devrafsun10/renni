import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import webblack from "../../assets/webblack.svg";
import webred from "../../assets/webred.png";
import banner from "../../assets/banner.svg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import sideimg from "../../assets/siteimg.svg";
import massanger from "../../assets/massangericon.svg";
import logo from "../../assets/logo.svg";
import crossicon from "../../assets/crossicon.svg";
import cardbanner from "../../assets/cardbanner.svg";
import phn from "../../assets/phnicon.svg";
import msg from "../../assets/msgicon.svg";
import location from "../../assets/locationicon.svg";

const Banner = () => {
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow(!show);
    console.log("ok cool");
  };

  return (
    <div className="bg-[#FFFFFF] pt-0 pb-27.25 relative">
      <div className=" container flex items-center justify-between ">
        {/* left part */}
        <div>
          <h4 className="font-primary font-bold text-[28px] text-[#141414]">
            Hello i’m
          </h4>
          <h1 className=" font-primary font-bold text-[90px] text-[#141414] leading-[103.5px]">
            Brooklyn Simmons
          </h1>
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

      <div className=" absolute top-[282.39px] right-0">
        <img src={sideimg} alt="#sideimg" />
      </div>

      <div className=" absolute top-[678.02px] right-5 cursor-pointer">
        <img onClick={handleclick} src={massanger} alt="#massanger" />
      </div>

      {/* card */}

      {show ? (
        <div className="w-100 bg-[#F4F4F4] absolute top-0 right-0">
          <div className=" flex items-center justify-between py-5.5 px-2 bg-[#EDEDED]">
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
              <h5 className=" font-secondary font-bold text-[20px] text-[#141414] mt-7.5 mb-4">
                Freelancer delivering exceptional Webflow, and Next.js
                solutions.
              </h5>
              <p className=" font-secondary font-normal text-[16px] text-[#5D6570]">
                I am a skilled freelancer specializing in Webflow development,
                Figma design, and Next.js projects. I deliver creative, dynamic,
                and user-centric web solutions.
              </p>
            </div>

            <div className="mt-9.75 mb-5.5">
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
    </div>
  );
};

export default Banner;
