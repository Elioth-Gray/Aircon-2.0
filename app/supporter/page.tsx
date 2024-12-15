import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import Image from 'next/image'
import SupporterCard from '../components/supporter/SupporterCard'

const SupporterPage = () => {
  return (
    <>

      <div className='mx-10 mt-5 lg:mx-28'>
        <BackButton/>
        <div className='mt-8 relative overflow-hidden lg:py-12 flex flex-row justify-center items-center py-5 bg-[#0A3981] rounded-xl font-winter'>
            <Image src="/supporter1.svg" width={90} height={90} alt='supporter' className='absolute top-2 left-1 lg:hidden'></Image>
            <Image src="/supporter1.svg" width={300} height={300} alt='supporter' className='hidden top-2 left-20 lg:absolute lg:block'></Image>
            <h1 className='uppercase text-2xl w-full text-white z-10 lg:hidden text-center'>Supporter</h1>
            <h1 className='uppercase w-full hidden lg:block  text-white z-10 text-center text-4xl'>Support Your Team</h1>
            <Image src="/supporter2.svg" width={300} height={90} alt='supporter' className='absolute top-2 left-60 lg:hidden'></Image>
            <Image src="/supporter2.svg" width={300} height={90} alt='supporter' className='absolute top-2 right-20 lg:absolute lg:block'></Image>
        </div>
        <div className='w-full mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3'>
        <SupporterCard school1="SMA 1 Ngawi" school2="SMA 5 Ngawi" gender="Boys" date="12-02-2023" location="Universitas Airlangga"></SupporterCard>
        <SupporterCard school1="SMA 1 Ngawi" school2="SMA 5 Ngawi" gender="Boys" date="12-02-2023" location="Universitas Airlangga"></SupporterCard>
        <SupporterCard school1="SMA 1 Ngawi" school2="SMA 5 Ngawi" gender="Boys" date="12-02-2023" location="Universitas Airlangga"></SupporterCard>
        <SupporterCard school1="SMA 1 Ngawi" school2="SMA 5 Ngawi" gender="Boys" date="12-02-2023" location="Universitas Airlangga"></SupporterCard>
        </div>
      </div>
    </>
  
  )
}
export default SupporterPage
