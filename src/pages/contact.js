import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Head>
        <title>Contact us</title>
        <meta property="og:title" content="Contact us" key="title" />
      </Head>
            <div className="main md:mx-20 mx-10 my-36 sm:flex justify-between">
                <div className='dvleft'>
                <div className='bg-red-600 w-fit px-2 py-1 font-bold text-white text-2xl'>
            Get in Touch
                     </div>
                     <div className='my-6'>
                     <div className='text-red-600 text-xl font-medium'>
                        Email :
                     </div>
                     <div className='text-black'>
                     info@mobility-comfort.com
                     </div>
                     </div>

                     <div className='my-6'>
                     <div className='text-red-600 text-xl font-medium'>
                        Address :
                     </div>
                     <div className='text-black'>
                     Bachir Hennawi, Strandvallen 20a, 30257, Halmstad, Sweden
                     </div>
                     </div>

                    

                     <div className='flex my-4'>
                        <div className='flex'><img className='mr-4' src="/Whatsapp.svg" alt="" /></div>
                        <div className='text-black font-medium text-xl md:font-bold md:text-3xl mt-3'>0046 729 123 287</div>
                     </div>
                </div>

                <div className='dvright sm:w-1/3'>
                    <div className='mb-8'>
                <div className='bg-red-600 w-fit px-2 py-1 font-bold text-white text-2xl'>
            Links
                     </div>
                     <div className='flex flex-col mx-1'>
                     <Link href='/' className="cursor-pointer mt-4  hover:text-gray-900 text-black font-medium">Home</Link>
      <Link href='/bedsystem' className="cursor-pointer mt-4 hover:text-gray-900 text-black font-medium">In-Car-Bed</Link>
      <Link href='/trunk' className="cursor-pointer mt-4 hover:text-gray-900 text-black font-medium">Retractable Trunk</Link>
                     </div>
                     </div>

                     {/* <div>
                     <div className='bg-red-600 w-fit px-2 py-1 font-bold text-white text-2xl'>
           About
                     </div>
                     {/* <div className='sm:w-2/3  mt-4 text-black text-md'>
                        <p className=''>Mobility Comfort & More</p>
                     </div> */}
                     {/* </div> */} 
                </div>
            </div>

    </div>
  )
}

export default Contact