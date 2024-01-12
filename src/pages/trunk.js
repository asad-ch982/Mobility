import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Trunk = () => {
  return (
    <div>
          <Head>
        <title>Retractable Trunk</title>
        <meta property="og:title" content="Retractable Trunk" key="title" />
      </Head>
    <div className='my-20  mx-10'>
        <div className="head md:flex justify-between my-8">
            <div className='text-black font-semibold text-3xl' >The Retractable Trunk</div>
            <div>
                 <button className='bg-red-600 text-white px-6 py-2 rounded-xl mx-2'>View PDF</button>
                 <Link href='embodiment' className='bg-red-600 text-white px-6 py-2 rounded-xl'>Other Embodiments</Link>
            
            </div>
        </div>

        <div className="embodimentMain">
                <div className=''>
                <div className='lg:flex my-8'>
            <div className="vid lg:w-1/2">
                    <video className='rounded-3xl w-full'  autoPlay={true} loop src="/01.mov"></video>
            </div>
            <div className="txt lg:w-1/2 mx-10 mt-4 lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between">
                    <div className='text-3xl text-black font-extrabold '>
                        Embodiment 01
                    </div>
                 
                </div>

                <div className='mt-4 text-gray-700 font-medium lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal'>
                    <p>
                    This simple-to-implement pending patent replaces the traditional trunk partially or completely or serves as a supplementary storage solution.
                    <div className='flex mt-2 justify-between font-bold'>
                        <div>
                            1. Increased Legroom <br />
                            3. Reduced production costs <br />
                            5. Possibility to add a third-row seat to mid-size vehicles,  <br />
                            7. The foldable box is made of hard plastic and can be deployed in less then 3 seconds<br />

                        </div>
                        <div>
                        2. Increased cargo capacity: A small
Legroom
hatchback holds up to six large suitcases. <br />
                            4. Improved performance
and efficiency. <br />
                            6. The wheeled detachable box enables indoor loading and unloading. <br />
                        </div>
                    </div>
                    </p>
                </div>
            </div>
        </div>
                </div>
                <div className='mt-4'>
                <div className='lg:flex my-8'>
            <div className="vid lg:w-1/2">
                    <video className='rounded-3xl w-full'  autoPlay={true} loop src="/02.mov"></video>
            </div>
            <div className="txt lg:w-1/2 mx-10 mt-4 lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between">
                    <div className='text-3xl text-black font-extrabold'>
                    Embodiment 02
                    </div>
                 
                </div>

                <div className='mt-4 text-gray-700 font-medium lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal'>
                    <p>
                    This simple-to-implement pending patent replaces the traditional trunk partially or completely or serves as a supplementary storage solution.
                    <div className='flex mt-2 justify-between font-bold'>
                        <div>
                            1. Increased Legroom <br />
                            3. Reduced production costs <br />
                            5. Possibility to add a third-row seat to mid-size vehicles,  <br />
                            7. The foldable box is made of hard plastic and can be deployed in less then 3 seconds<br />

                        </div>
                        <div>
                        2. Increased cargo capacity: A small
Legroom
hatchback holds up to six large suitcases. <br />
                            4. Improved performance
and efficiency. <br />
                            6. The wheeled detachable box enables indoor loading and unloading. <br />
                        </div>
                    </div>
                    </p>
                </div>
            </div>
        </div>
                </div>
             
            
        </div>
    </div>
    </div>
  )
}

export default Trunk