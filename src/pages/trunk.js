import Head from 'next/head'
import React from 'react'

const Trunk = () => {
  return (
    <div>
          <Head>
        <title>Retractable Trunk</title>
        <meta property="og:title" content="Retractable Trunk" key="title" />
      </Head>
    <div className='my-20  mx-10'>
        <div className="head flex justify-between my-8">
            <div className='text-black font-semibold text-3xl' >The Retractable Trunk</div>
            <div> <button className='bg-red-600 text-white px-6 py-2 rounded-xl'>View PDF</button></div>
        </div>

        <div className="embodimentMain">
                <div className=''>
                <div className='lg:flex my-8'>
            <div className="vid lg:w-1/3">
                    <video className='rounded-3xl w-full' muted autoPlay={true} loop src="/01.mov"></video>
            </div>
            <div className="txt lg:w-2/3 mx-10 mt-4 lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between">
                    <div className='text-3xl text-black font-extrabold '>
                        Embodiment 01
                    </div>
                 
                </div>

                <div className='mt-4 text-gray-700 font-medium lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal'>
                    <p>
                    Traditional vehicle trunks often go underutilized, leaving occupants cramped for legroom. The
retractable trunk presents a solution to this issue by either replacing the trunk entirely, reducing its
size, or merely increasing the vehicle’s storage capacity.
This pending patent not only tackles discomfort but also brings forth a multitude of benefits.With
the retractable trunk, the vehicle can paradoxically be compact in size, efficient, environmentally
friendly, cheap to build, and yet offer ample storage and spacious legroom.
                    </p>
                </div>
            </div>
        </div>
                </div>
                <div className='mt-4'>
                <div className='lg:flex my-8'>
            <div className="vid lg:w-1/3">
                    <video className='rounded-3xl w-full' muted autoPlay={true} loop src="/02.mov"></video>
            </div>
            <div className="txt lg:w-2/3 mx-10 mt-4 lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between">
                    <div className='text-3xl text-black font-extrabold'>
                    Embodiment 02
                    </div>
                 
                </div>

                <div className='mt-4 text-gray-700 font-medium lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal'>
                    <p>
                    Traditional vehicle trunks often go underutilized, leaving occupants cramped for legroom. The
retractable trunk presents a solution to this issue by either replacing the trunk entirely, reducing its
size, or merely increasing the vehicle’s storage capacity.
This pending patent not only tackles discomfort but also brings forth a multitude of benefits.With
the retractable trunk, the vehicle can paradoxically be compact in size, efficient, environmentally
friendly, cheap to build, and yet offer ample storage and spacious legroom.
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