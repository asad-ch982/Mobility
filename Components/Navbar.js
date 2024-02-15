// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-gray-400 z-10 relative'>
//         <header className="blurred-navbar text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
//       <img src="/Logo.svg" alt="" />
     
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <Link href='/' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Home</Link>
//       <Link href='/bedsystem' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">In-Car-Bed</Link>
//       <Link href='/trunk' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Retractable Trunk</Link>
//       <Link href='/embodiment' className="cursor-pointer mr-4 md:mr-16 hover:text-gray-900 text-black font-medium">Other Embodiments</Link>
//       <Link href='/contact' className="cursor-pointer mr-4 md:mr-16 lg:mr-8 hover:text-gray-900 text-black font-medium">Contact</Link>
//     </nav>
//     <button className="bg-gray-500  hidden lg:hidden  rounded-full xl:inline-flex items-center border-0 p-2  text-base mt-4 md:mt-0">
      
//     <img src="/Language.svg" alt="" />
//     </button>
//   </div>
// </header>

//     </div>
//   )
// }

// export default Navbar

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";

function NavBar({language,setLanguage}) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-400 relative   top-0 left-0 right-0 z-10">
        <div className='blurred-navbar '>
        <div className="justify-between   mx-12 lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-0 md:py-0 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold "><img src="/Logo.svg" alt="" /></h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // <Image src="/close.svg" width={30} height={30} alt="logo" />

                    <IoCloseCircleSharp />
                  ) : (
                    // <Image
                    //   src="/hamburger-menu.svg"
                    //   color='red'
                    //   width={30}
                    //   height={30}
                    //   alt="logo"
                    //   className="focus:border-none active:border-none text-black"
                    // />
                    <GiHamburgerMenu  className="focus:border-none   border-black active:border-none"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center mt-4 md:flex ">
                <li className="pb-6 font-medium text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-900  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 font-medium text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/bedsystem" onClick={() => setNavbar(!navbar)}>
                  {language?"车内床系统":" In-Car-Bed System"} 
                  </Link>
                 
                </li>
                <li className="pb-6 font-medium text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/trunk" onClick={() => setNavbar(!navbar)}>
                  {language?"可收缩后备箱":" Retractable Trunk"} 
                  </Link>
                
                </li>
               
                <li className="pb-6 font-medium text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 font-medium text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-900  md:hover:text-gray-600 md:hover:bg-transparent">
                  <div className='cursor-pointer' onClick={() => setLanguage(!language)}>
                    {language?"Eng":"中文"}
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;