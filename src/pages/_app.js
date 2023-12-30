import '@/styles/globals.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

export default function App({ Component, pageProps }) {
  return (
  
  <div className=''>
    
    <div className='flex flex-col min-h-screen'>

      <div className='flex-grow'>
      <Navbar/>
      <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
 
 
  </div>
  )
}
