import ButtomBtn from '@/components/bottombutton/page'
import HeadingTextCom from '@/components/heading/page'
import React from 'react'

function GenerateBill() {
      const HeadingText={
  HeadingText1:"Collect Your medicine !"}
   const bottomBtnRoot={Cancel:"/user/popup",
                        Continue:"/user/printbill",
                        btntext:"View Bill"
                        }
    const bottomBtnText = {Cancel: "Cancel",
                           Continue: "View Bill"
                          }
  return (
 
  
    <>
    <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
       <div className="    text-center" style={{   width:"100%"}}>

       <HeadingTextCom data={HeadingText}/>
          {/* Bottom Buttons */}
      <ButtomBtn data={bottomBtnRoot} text={bottomBtnText}/>
       </div>
</div>
    </>
  )
}

export default GenerateBill