import React from 'react'
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const BackButton = () => {
  return (
    <button className="bg-black text-white px-6 py-2 rounded-xl text-xs flex flex-row items-center gap-3">
          <ArrowLeft size={22} />
          <p className='lg:text-base'>Back to home</p>
    </button>
  )
}

export default BackButton
