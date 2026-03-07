import React from "react";

const Counter = () => {
  return (
    <div className="bg-[#FFFFFF] md:pt-22.5 md:pb-30 p-5">
        <div className=" container md:flex items-center justify-between">
      <div className=" bg-[#F4F4F4] py-7.5 md:py-0 px-5 md:px-13 md:pt-9 md:pb-12.75 mb-8 md:mb-0 rounded-[20px] ">
        <div>
        <div className=" md:flex items-center gap-x-11 md:mb-6.5">
          <h3 className=" font-tertiary font-bold text-[100px] md:text-[167px] text-[#FF494A]">25</h3>
          <h4 className=" font-primary font-bold text-[26px] md:text-[48px] text-[#141414]">Years Of <span className=" md:block">experience</span></h4>
        </div>
        <p className=" font-secondary font-normal text-[16px] text-[#141414] md:w-129.5">
          Business consulting consultants provide expert advice and guida the a
          businesses to help theme their performance efficiency
        </p>
      </div>
      </div>

      <div>
        <div className=" md:flex items-center gap-x-5 mb-7.5">
            <div className=" py-8 px-16.5 bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-[#FF494A] mb-7.5 md:mb-0 ">
                <h4 className=" text-center font-tertiary font-bold text-[48px] text-[#141414]">20<span className=" font-primary font-bold text-[48px]">K+</span></h4>
                <p className=" font-secondary font-normal text-[16px] text-[#5D6570] text-center">Our Project Complete</p>
            </div>
            <div className=" py-8 px-16.5 bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-[#FF494A] ">
                <h4 className=" text-center font-tertiary font-bold text-[48px] text-[#141414]">10<span className=" font-primary font-bold text-[48px]">K+</span></h4>
                <p className=" font-secondary font-normal text-[16px] text-[#5D6570] text-center">Our Natural Products</p>
            </div>
        </div>

        <div className=" md:flex items-center gap-x-5">
            <div className=" py-8 px-16.5 bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-[#FF494A]  mb-7.5 md:mb-0 ">
                <h4 className=" text-center font-tertiary font-bold text-[48px] text-[#141414]">200<span className=" font-primary font-bold text-[48px]">K+</span></h4>
                <p className=" font-secondary font-normal text-[16px] text-[#5D6570] text-center">Clients Reviews</p>
            </div>
            <div className=" py-8 px-16.5 bg-[#F4F4F4] rounded-[20px] border-r-2 border-b-2 border-[#FF494A] ">
                <h4 className=" text-center font-tertiary font-bold text-[48px] text-[#141414]">1000<span className=" font-primary font-bold text-[48px]">K+</span></h4>
                <p className=" font-secondary font-normal text-[16px] text-[#5D6570] text-center">our Satisfied Clientd</p>
            </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Counter;
