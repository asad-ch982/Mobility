import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Icbembodiments = () => {
  return (
    <div>
    <Head>
<title>Vehicle Bed System</title>
<meta property="og:title" content="Vehicle Bed System" key="title" />
</Head>
<div className='bg-white  my-10'>
<div className='flex flex-col-reverse      '>
 
  <div className="txt w-5/6  mx-auto xl:mt-4 my-8 md:my-0">
      <div className="head xl:flex  justify-between">
          <div className='lg:text-3xl text-black mt-1 font-medium text-xl  lg:font-extrabold'>
              In-Car-bed System
          </div>
         
      </div>

      <div className='2xl:mt-4 xl:mt-1 mt-2 md:leading-none  lg:leading-normal text-gray-700  xl:font-medium '>
          <div>
            <div className='border-l-4 border-red-500 pl-2'>The car bed system solves these issues by allowing the user to transform vehicle seats into a comfortable flat bed.</div>
            <div className='border-l-4 border-red-500 pl-2 mt-2'>The main advantage of the proposed vehicle bed system lies in the fact that the vehicle seats can be reclined all the way backward, and the bed extends considerably from the steering wheel to the end of the trunk. Another notable advantage is its complete flatness, setting it apart from other comparable products. Moreover, this concept is applicable to both compact and large vehicles</div>
     
            <div className='border-l-4 border-red-500 pl-2 mt-2'>The vehicle bed system offers other numerous advantages for travelers. It provides convenience and cost-effectiveness as it allows them to convert their vehicle into a cozy sleeping space, eliminating the need for expensive hotel stays. The system also offers flexibility in travel plans, enabling spontaneous adventures and exploration.</div>
          </div>
      </div>
  </div>
 
</div>
<div className='w-5/6 mx-auto  text-gray-700 '>
  <div className='border-l-4 border-red-500 pl-2 mt-2'>Also drivers can have comfortable rest during long drives: For extended road trips, the car bed system ensures a comfortable place to rest, reducing fatigue and promoting safer driving experience.</div>
  <div className='border-l-4 border-red-500 pl-2 mt-2'>Additionally, taking a nap during long working hours can boost productivity, improve focus, and recharge energy levels, leading to better overall performance and well-being in the workplace.
</div>
  <div className='border-l-4 border-red-500 pl-2 mt-2'>This will promote tourism by increasing its accessibility to a broader audience and offer tourists a multitude of affordable location options both in peak and off-peak seasons.
</div>
  <div className='border-l-4 border-red-500 pl-2 mt-2'>Lastly, the implementation of the idea is rather easy and cost effective if it is integrated in the design process.
</div>
  </div>

</div>
 <div className="vid my-10 md:mx-0">
          <video className='rounded-3xl w-5/6  mx-auto' controls  autoPlay={true} loop src="/in-car-bed-2.mov"></video>
  </div>
</div>
  )
}

export default Icbembodiments