import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import Image from 'next/image'
import SupporterCard from '../components/supporter/SupporterCard'

const SupporterPage = () => {
  return (
    <>

      <div className='mx-10 mt-5'>
        <BackButton/>
        <div className='mt-8 relative overflow-hidden'>
            <Image src="/supporter1.svg" width={90} height={90} alt='supporter' className='absolute top-2 left-1'></Image>
            <h1 className='uppercase text-2xl w-full flex flex-row justify-center items-center py-5 bg-[#0A3981] rounded-xl font-bold text-white z-10'>Supporter</h1>
            <Image src="/supporter2.svg" width={90} height={90} alt='supporter' className='absolute top-2 left-60'></Image>
        </div>
        <div className='w-full mt-8'>
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
