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
        <div className='md:flex xl:mx-32 mx-10 md:absolute top-1/3 '>
            <div className="vid xl:w-1/2 md:w-1/2">
                    <video className='rounded-3xl w-full'  autoPlay={true} loop src="/in-car-bed.mov"></video>
            </div>
            <div className="txt xl:w-1/2 md:w-1/2 mx-10 xl:mt-4 my-8 md:my-0">
                <div className="head xl:flex  justify-between">
                    <div className='lg:text-3xl text-black mt-1 font-medium text-xl  lg:font-extrabold'>
                        In-Car-bed
                    </div>
                    <div>
                        <button className='bg-red-600 text-white px-6 py-2 rounded-xl mr-4'>View PDF</button>
                        <Link href='/' className='bg-red-600 text-white px-6 py-2 rounded-xl'>Other Embodiments</Link>
                    </div>
                </div>

                <div className='2xl:mt-4 xl:mt-1 mt-2 md:leading-none  lg:leading-normal text-gray-700  xl:font-medium'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero amet tempore nobis cumque necessitatibus voluptatibus possimus laboriosam officiis cupiditate atque blanditiis alias laudantium natus eveniet deserunt fuga provident est neque voluptatem ipsum modi. Nostrum, nobis! Velit itaque nostrum tempore natus assumenda, officiis eligendi dolore ipsum architecto quia ad voluptatum provident est harum hic, sequi incidunt ut vel blanditiis sunt praesentium dolorum? Facilis, voluptatem saepe officia id ut 
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Bedsystem