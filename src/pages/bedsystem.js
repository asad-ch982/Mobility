import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const Bedsystem = ({language,setLanguage}) => {
  return (
    <div>
              <Head>
        <title> {language?"车内床系统":" In-Car-Bed System"} </title>
        <meta property="og:title" content="Vehicle Bed System" key="title" />
      </Head>
    <div className='bg-white '>
        <div className='   flex flex-col-reverse  my-10  top-1/3 '>
            <div className="vid  w-5/6  mx-auto">
                    <video className='rounded-3xl w-full ' controls  autoPlay={false} loop src="/in-car-bed.mov"></video>
                    <div className='sm:flex-row flex justify-between my-4 flex-col'>
                     <a href={"/1.pdf"} target="_blank" download="In-Car-Bed.pdf">  <button className='bg-red-600 w-fit text-white px-6 py-2 rounded-xl mr-4 '>View PDF</button>
                     </a>    <Link href='/icbembodiments' className='bg-red-600 w-fit hidden text-white px-6 py-2 mt-4 sm:mt-0 rounded-xl'>Other Embodiments</Link>
                    </div>
            </div>
            <div className="txt w-5/6  mx-auto xl:mt-4 my-8 md:my-0">
                <div className="head   justify-between">
                    <div className='lg:text-3xl text-black mt-1 font-medium text-xl  lg:font-extrabold'>
                    {language?"车内床系统":" In-Car-Bed System"} 
                    </div>
                  
                </div>

                <div className='2xl:mt-4 xl:mt-1 mt-2 md:leading-none  lg:leading-normal text-gray-700  xl:font-medium my-10'>
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