import ButtomBtn from '@/components/bottombutton/page'
import DateRangePicker from '@/components/datepicker/page';
import HeadingTextCom from '@/components/heading/page'
import ImageComponent from '@/components/imagecomponent/page';
import React from 'react'

function GenerateReport() {
          const HeadingText = { HeadingText1:"Seles Report"};
          const bottomBtnRoot = {  Cancel: "/admin/popup/cancelprocess",
                                Back: "/admin/otp",
                                Continue: "/admin/manageinventoey"};
          const imageData = "Bill1.png"; // Assuming you have a report image in your public folder                      
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen py-6'>
        <HeadingTextCom data={HeadingText}/>
        <DateRangePicker />
        <div className='w-100'>
        {/* <ImageComponent data={imageData} hightData={450} withData={450}/> */}
        </div>
        <ButtomBtn data={bottomBtnRoot}/>
      </div>
    </>
  )
}

export default GenerateReport