"use client"
import ButtomBtn from '@/components/bottombutton/page'
import CarouselComp from '@/components/carouselcomp/page';
import React from 'react'
import { useParams } from "next/navigation";

function SelectPrescription() {
   const params = useParams();
     const rfid = params.rfid
    const bottomBtnRoot = { Cancel:"/user/popup/cancelprocess",
                          Back:`/user/help/${rfid}`,
                         };
      const imageData = {img:"Bill1.png",
                        alt:"Prescription Image",
                        width:"300",
                        height:"400" ,
                        href:`/user/ordermadicine/${rfid}`,
                        } // Assuming you have a prescription image in your public folder                   
        
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