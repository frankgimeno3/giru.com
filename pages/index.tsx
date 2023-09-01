import Image from 'next/image'
import { Inter } from 'next/font/google'
import QuienesSomos from "../components/quiensomos/QuienesSomos"
import Navbar from '../components/home/Navbar'
import Landing from '../components/home/Landing'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Landing/>
      <div className='mx-24 px-24'>
        <QuienesSomos/>
      </div>
    </div>
  )
}
