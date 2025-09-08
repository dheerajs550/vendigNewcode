import HeadingTextCom from '@/components/heading/page'
import Link from 'next/link'
import React from 'react'

function Dispatch() {
  const HeadingText={
  HeadingText1:"Please wait, the medicine",
  HeadingText2:"is being dispatched !"
}
  return (
    <>
    <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
       <div className="    text-center" style={{   width:"100%"}}>
       <HeadingTextCom data={HeadingText}/>
       <Link href={"/user/generatebill"}> link only for demo </Link>
       </div>
</div>
    </>
  )
}

export default Dispatch