import React from 'react'
import Image from 'next/image'
function TrustedBy() {
  return (
    <div className='hidden sm:flex mt-32 mb-10 flex-col items-center md:flex-row max-w-[900px] w-[80%] m-auto justify-around'>
        <p className="text-[#554469] md:mr-[-10px] text-xl font-normal leading-normal">Trusted by</p>
        <Image src="assets/cordelia.svg" width={230} height={50} alt="forbes" className='my-5'/>
        <Image src="assets/welive.svg" width={230} height={50} alt="forbes" className='mb-10 md:m-0'/>
        <Image src="assets/skill.svg" width={230} height={50} alt="forbes"/>
    </div>
  )
}

export default TrustedBy
