import ButtomBtn from '@/components/bottombutton/page'
import Image from 'next/image'
import React from 'react'

function PrintBill() {
  const bottomBtnRoot=
   {Cancel:"/user/popup",
    Continue:"/user/popup",
    btntext:"Print Bill"
   }
  const bottomBtnText = {Cancel: "Cancel",
                         Continue: "Print Bill"}
  return (
 
  
    <>
    <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
       <div className="    text-center" style={{   width:"100%"}}>
       <div className="flex justify-center mb-4">
                   <Image
                     src="/image/bill.png"
                     alt="Scan RFID"
                     width={300}
                     height={300}
                     className="object-contain"
                   />
                 </div>
          {/* Bottom Buttons */}
      <ButtomBtn data={bottomBtnRoot} text={bottomBtnText}/>
       </div>
</div>
    </>
)}

export default PrintBill