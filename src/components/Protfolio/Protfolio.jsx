import React from "react";
import Protfolioimg from "../../assets/protfolioimg.svg";

const Protfolio = () => {
  return (
    <div className=" pt-7.5 pb-22.5">
      <div className=" container flex justify-between items-center">
        <div>
          <div className=" py-8.5 px-9.5 bg-[#F4F4F4] rounded-[20px] border-[#FF494A] border-r-2 border-b-2 mb-5">
            <h2 className=" font-primary font-bold text-[24px] text-[#141414] leading-7.5">
              {" "}
              <span className="px-3.75">01.</span> A Portfolio of Creativity
            </h2>
            <p className=" font-secondary font-normal text-[16px] text-[#5D6570] leading-6.5 w-135.5 mt-5.5">
              Business consulting consultants provide expert advice and guida
              the a businesses to help theme their performance efficiency
            </p>
          </div>
          <div className=" py-8.5 px-9.5 bg-[#F4F4F4] rounded-[20px] border-[#FF494A] border-r-2 border-b-2 mb-5">
            <h2 className=" font-primary font-bold text-[24px] text-[#141414] leading-7.5">
              {" "}
              <span className="px-3.75">02.</span> My Portfolio of Innovation
            </h2>
            <p className=" font-secondary font-normal text-[16px] text-[#5D6570] leading-6.5 w-135.5 mt-5.5">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands, transform businesses
            </p>
          </div>
          <div className=" py-8.5 px-9.5 bg-[#F4F4F4] rounded-[20px] border-[#FF494A] border-r-2 border-b-2 mb-5">
            <h2 className=" font-primary font-bold text-[24px] text-[#141414] leading-7.5">
              {" "}
              <span className="px-3.75">03.</span> A Showcase of My Projects
            </h2>
            <p className=" font-secondary font-normal text-[16px] text-[#5D6570] leading-6.5 w-135.5 mt-5.5">
              In this portfolio, you’ll find a curated selection of projects
              that highlight my skills in [Main Areas, e.g., responsive web
              design
            </p>
          </div>
        </div>
        <div>
          <img src={Protfolioimg} alt="#protfolioimg" />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
