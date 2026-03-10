import React from "react";
import expimg from "../../assets/experienceimg.svg";

const Exprience = () => {
  return (
    <div className="pt-18.75 pb-30">
      <div className=" container flex  gap-x-13.75">
        <div>
          <img src={expimg} alt="#img" />
        </div>

        <div>
          <h4 className=" font-primary font-bold text-[32px] text-[#141414] leading-10.5 mb-8">Experiences </h4>

          <div>
            <h6 className=" font-secondary font-medium text-[16px] text-[#FF494A] leading-7">experience</h6>
            <h4 className=" font-primary font-bold text-[24px] text-[#141414]">Fatima Asrafy</h4>
            <p className=" font-primary font-medium text-[18px] text-[#141414] leading-6.75 mb-4">UI/UX Designer</p>
            <p className="font-secondary font-normal text-[16px] text-[#5D6570] leading-7.5 w-111">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum desi dolore eu fugiat nulla pariatu Duis aute irure
            </p>
          </div>

          <div className="mt-12.5">
            <h6 className=" font-secondary font-medium text-[16px] text-[#FF494A] leading-7">experience</h6>
            <h4 className=" font-primary font-bold text-[24px] text-[#141414]">Fatima Asrafy</h4>
            <p className=" font-primary font-medium text-[18px] text-[#141414] leading-6.75 mb-4">UI/UX Designer</p>
            <p className="font-secondary font-normal text-[16px] text-[#5D6570] leading-7.5 w-111">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum desi dolore eu fugiat nulla pariatu Duis aute irure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
