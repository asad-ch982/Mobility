import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
      {/* <div className='w-full mx-20 absolute items-center  flex justify-between'>
        <div className='text-black font-semibold text-3xl'>In-Car-Bed</div>
        <div className='text-black font-semibold text-3xl'>Retractable Trunk</div>
       </div> */}
<div>
<Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
      </Head>
    <div className='flex my-10'>
      <div className='sm:block hidden w-1/5 sm:flex justify-between'>
        <div className='w-1/5 h-1/2 opacity-45 -mt-20 -ml-10 border-4 border-t-4 border-b-4 border-l-4 border-r-4  absolute rounded-3xl border-red-600'>
       
        </div>
        <div className='border-r-4 w-1 border-red-600 opacity-45 top-0 bottom-0 absolute left-1/4'></div>
      </div>
      <div className='sm:w-3/5'>
        <div className='relative top-16'>
        <div className=' flex justify-between'>
       <div>
      <Link href='bedsystem'> <div className='text-black  ml-10 lg:font-medium lg:text-xl xl:font-semibold xl:text-2xl px-2 lg:px-4 xl:px-6 py-1 bg-gray-200 rounded-full hover:text-red-500 cursor-pointer transition-all duration-300 hover:shadow-md hover-scale'> In-Car-Bed </div></Link> 
      <div className='2xl:h-56 h-16 xl:h-48 sm:h-20  lg:h-32 md:h-20 sm  border-l-2 opacity-45 border-gray-700 w-0 absolute sm:left-1/4 -rotate-45 left-24'>

      </div>
      </div>
      <div>
      <Link href='trunk'> <div className='text-black xl:font-semibold xl:text-2xl lg:font-medium lg:text-xl px-2 lg:px-4 xl:px-4 py-1 bg-gray-200 rounded-full hover:text-red-500 cursor-pointer transition-all duration-300 hover:shadow-md hover-scale'>Retractable Trunk</div></Link> 
      <div className='2xl:h-52 h-10 xl:h-48  sm:h-20 lg:h-32 md:h-10 sm:right-20 opacity-45 border-l-2 border-gray-700 w-0 absolute md:right-20  lg:right-36 right-16 rotate-45'>

      </div>
      </div>
        </div>
        </div>
        <img src="vehicle.PNG" alt="" className='mt-16 md:mt-10' />
  
      </div>
      <div className='w-1/5 sm:block hidden'>
      <div className='w-1/6 h-1/2 opacity-45 bottom-10 overflow-x-hidden right-0   border-4 border-t-4 border-b-4 border-l-4 border-r-0  absolute rounded-l-3xl border-red-600'>

</div>

      </div>
    </div>
    </div>
</>
  )
}
