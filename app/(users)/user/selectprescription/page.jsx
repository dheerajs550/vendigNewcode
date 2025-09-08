import ButtomBtn from '@/components/bottombutton/page'
import CarouselComp from '@/components/carouselcomp/page';
import React from 'react'

function SelectPrescription() {
    const bottomBtnRoot = { Cancel:"/user/popup/cancelprocess",
                          Back:"/user/language",
                         };
      const imageData = "Bill1.png"; // Assuming you have a prescription image in your public folder                   
  return (
    <>
    <div className='flex justify-center items-center h-150' >
    <CarouselComp data={imageData}/>
    </div>
    <ButtomBtn data={bottomBtnRoot}/>
    </>
  )
}

export default SelectPrescription