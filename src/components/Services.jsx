import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'

const ServiceCard = ({color, title, icon, subtitle}) => (
  <div className='px-5 flex flex-row justify-start w-full items-center white-glassmorphism cursor-pointer p-3 m-2 hover:shadow-xl mr-10'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
    {icon}

    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className='mt-2 text-white text-sm md:w-9/12 items'>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center bg-[#301934] '>
      <div className='flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2'> Services that we 
              <br/>
              continue to improve
          </h1>

        </div>

      </div>
      <div className='flex-1  flex flex-col justify-start items-center'> 
        <ServiceCard
          color = "bg-[#2952E3]"
          title = "Security Guaranteed"
          icon = {<BsShieldFillCheck fontSize={21} className='text-white'/>}
          subtitle="We are proud of our service"
        />
        <ServiceCard
          color = "bg-[#8945F8]"
          title = "Good exchange rate"
          icon = {<BiSearchAlt fontSize={21} className='text-white'/>}
          subtitle="We are proud of our service"
        />
        <ServiceCard
          color = "bg-[#F84550]"
          title = "Fast transactions"
          icon = {<RiHeart2Fill fontSize={21} className='text-white'/>}
          subtitle="We are proud of our service"
        />
      </div>
    </div>
  )
}

export default Services