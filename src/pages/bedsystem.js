import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

const Bedsystem = () => {
  return (
    <div>
              <Head>
        <title>Vehicle Bed System</title>
        <meta property="og:title" content="Vehicle Bed System" key="title" />
      </Head>
    <div className='bg-white '>
        <div className='md:flex xl:mx-10 2xl:mx-32 mx-10 md:absolute top-1/3 '>
            <div className="vid xl:w-1/2 md:w-1/2">
                    <video className='rounded-3xl w-full' controls  autoPlay={true} loop src="/in-car-bed.mov"></video>
            </div>
            <div className="txt xl:w-1/2 md:w-1/2 mx-10 xl:mt-4 my-8 md:my-0">
                <div className="head   justify-between">
                    <div className='lg:text-3xl text-black mt-1 font-medium text-xl  lg:font-extrabold'>
                        In-Car-bed System
                    </div>
                    <div className='sm:flex-row flex justify-between my-4 flex-col'>
                        <button className='bg-red-600 w-fit text-white px-6 py-2 rounded-xl mr-4 '>View PDF</button>
                        <Link href='/icbembodiments' className='bg-red-600 w-fit text-white px-6 py-2 mt-4 sm:mt-0 rounded-xl'>Other Embodiments</Link>
                    </div>
                </div>

                <div className='2xl:mt-4 xl:mt-1 mt-2 md:leading-none  lg:leading-normal text-gray-700  xl:font-medium'>
                    <p>
                    Travelers often encounter significant challenges when trying to find suitable accommodation during their
ournoysone or the prmar ditcultostne scarciyo ava ane ontions especiaiiy in peakavol
seasons or popular tourist destinations. As a result, travelers may face limited choices or find them selves
settling for oss desirable accommocabons Addisonolly. the nich cost crodoing con be a major burden on their travel budgets, eating into funds meant for other experiences or activities. The combination of limited avaliability and soaring prices can lead to added stress and uncertainty, making it crucial for travelers to plan ahead and explore alternative lodging aptions to mitigate these challenges.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Bedsystem