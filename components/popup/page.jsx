// ConfirmPopup.js (React component)
import React from 'react';
import HeadingTextCom from '../heading/page';
import SinglBtn from '../singalbtn/page';
import Image from 'next/image';

const ConfirmPopup = ({ data ,urlData}) => {
 
  return (
   <>
     {(<div className="bg-white rounded-xl shadow-md w-[95%] max-w-sm p-6 text-center">
        <div className="relative w-[50px] h-[50px] mx-auto mb-4 ">
            <Image src="/image/vector.png" alt="Random" fill className="object-cover" />
            </div>

    <HeadingTextCom data={data}/>
  
    <div className=' flex justify-between px-3'>

    <SinglBtn data={urlData.no} btnname={urlData.notxt}/>
     <SinglBtn data={urlData.yes} btnname={urlData.yestxt}/>
    </div>
      </div>)}
   </>
    
  );
};

export default ConfirmPopup;
