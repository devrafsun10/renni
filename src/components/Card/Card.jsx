import React from 'react'
import cardicon1 from "../../assets/cardicon1.svg";
import cardicon2 from "../../assets/cardicon2.svg";
import cardicon3 from "../../assets/cardicon3.svg";
import cardicon4 from "../../assets/cardicon4.svg";

const Card = () => {
  return (
    <div className=' md:py-22.5 py-7.5 px-5'>
        <div className=' container md:flex md:items-center md:justify-between'>
            <div className='py-10.25 md:w-73.5 bg-[#FFFFFF]  border-2 border-[#FFE2E2] rounded-[20px] text-center mb-7.5 md:mb-0 '>
                <div className=' flex items-center justify-center mb-7.5'>
                    <img src={cardicon1} alt="#cardicon" />
                </div>
                <h4 className=' font-primary font-bold text-[24px] text-[#141414] mb-2.25'>Web Design</h4>
                <p className=' font-secondary font-normal text-[16px] text-[#5D6570]'>120 Projects</p>
            </div>

            <div className='py-10.25 bg-[#FFFFFF] md:w-73.5 border-2 border-[#FFE2E2] rounded-[20px] text-center mb-7.5 md:mb-0'>
                <div className=' flex items-center justify-center mb-7.5'>
                    <img src={cardicon2} alt="#cardicon" />
                </div>
                <h4 className=' font-primary font-bold text-[24px] text-[#141414] mb-2.25'>Ui/Ux Design</h4>
                <p className=' font-secondary font-normal text-[16px] text-[#5D6570]'>120 Projects</p>
            </div>

            <div className='py-10.25 bg-[#FFFFFF] md:w-73.5 border-2 border-[#FFE2E2] rounded-[20px] text-center mb-7.5 md:mb-0'>
                <div className=' flex items-center justify-center mb-7.5'>
                    <img src={cardicon3} alt="#cardicon" />
                </div>
                <h4 className=' font-primary font-bold text-[24px] text-[#141414] mb-2.25'>Web Research</h4>
                <p className=' font-secondary font-normal text-[16px] text-[#5D6570]'>120 Projects</p>
            </div>

            <div className='py-10.25 bg-[#FFFFFF] md:w-73.5 border-2 border-[#FFE2E2] rounded-[20px] text-center mb-7.5 md:mb-0'>
                <div className=' flex items-center justify-center mb-7.5'>
                    <img src={cardicon4} alt="#cardicon" />
                </div>
                <h4 className=' font-primary font-bold text-[24px] text-[#141414] mb-2.25'>Marketing</h4>
                <p className=' font-secondary font-normal text-[16px] text-[#5D6570]'>120 Projects</p>
            </div>

        </div>
    </div>
  )
}

export default Card