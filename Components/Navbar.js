import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-400 z-10 relative'>
        <header className="blurred-navbar text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <img src="/Logo.svg" alt="" />
     
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Home</Link>
      <Link href='/bedsystem' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">In-Car-Bed</Link>
      <Link href='/trunk' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Retractable Trunk</Link>
      <Link href='/embodiment' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Other Embodiments</Link>
      <Link href='/contact' className="cursor-pointer mr-4 md:mr-16 lg:mr-8 hover:text-gray-900 text-black font-medium">Contact</Link>
    </nav>
    <button className="bg-gray-500  hidden lg:hidden  rounded-full xl:inline-flex items-center border-0 p-2  text-base mt-4 md:mt-0">
      
    <img src="/Language.svg" alt="" />
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar