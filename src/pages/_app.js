import '@/styles/globals.css'
import { useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(false)
  return (
  
  <div className=''>
    
    <div className='flex flex-col min-h-screen'>

      <div className='flex-grow'>
      <Navbar language={language} setLanguage={setLanguage}/>
      <Component language={language} setLanguage={setLanguage} {...pageProps} />
      </div>
      <Footer language={language} setLanguage={setLanguage}/>
    </div>
 
 
  </div>
  )
}
