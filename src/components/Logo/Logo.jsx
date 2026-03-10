import React from 'react'
import linear from '../../assets/linear.svg'
import farmer from '../../assets/farmer.svg'
import notion from '../../assets/notion.svg'
import slack from '../../assets/slack.svg'
import medium from '../../assets/medium.svg'
import upwork from '../../assets/upwork.svg'
import amazon from '../../assets/amazon.svg'
import asana from '../../assets/asana.svg'

const Logo = () => {
  return (
    <div className=' container py-30'>
        <div className=' flex items-center'>
          <div className='border-2 border-[#D9DDE0]'>
            <img src={linear} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={farmer} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={notion} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={slack} alt="#linear" />
            </div>       
        </div>

        <div className=' flex items-center'>
          <div className='border-2 border-[#D9DDE0]'>
            <img src={medium} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={upwork} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={amazon} alt="#linear" />
            </div>       
          <div className='border-2 border-[#D9DDE0]'>
            <img src={asana} alt="#linear" />
            </div>       
        </div>
    </div>
  )
}

export default Logo