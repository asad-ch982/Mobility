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
        <div className='flex xl:mx-10 2xl:mx-32  flex-col-reverse md:flex-row md:absolute  my-10 md:my-0 top-1/3 '>
            <div className="vid xl:w-1/2 md:w-1/2 mx-10">
                    <video className='rounded-3xl w-full ' controls  autoPlay={true} loop src="/in-car-bed.mov"></video>
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
                    Travelers often struggle to find suitable accommodation due to limited options, particularly during peak seasons.
This patent-pending product addresses the challenge by allowing vehicle seats to fully recline, transforming them into comfortable beds.
What sets the in-car bed system apart is its unique design, featuring a removable front seat top and a bed structure that effortlessly transforms the seat into a completely flat bed, extending seamlessly from the dashboard to the end of the trunk and from door to door crosswise making it suitable for both large and compact vehicles.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Bedsystem