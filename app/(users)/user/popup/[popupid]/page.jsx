
import React from 'react';
import ConfirmPopup from '@/components/popup/page';

const PopUp = async (props)=> {
  const popupIdData = await props.params.popupid;

  console.log(popupIdData === "cancelprocess");
  // Define the heading text and URL data based on the popupid
  // You can modify this logic based on your requirements
   const HeadingText1={
  HeadingText1:" Are you sure want to cancel the process?  ",
 }
   const HeadingText2={
  HeadingText1:" Do you want to confirm this transaction?  ",
 } 
  const HeadingText3={
  HeadingText1:" transation cancelled due to insufficient balance.",
 }
  const urlData1={
  no:"/user/language",
  yes:"/",
  notxt:"NO",
  yestxt:"YES"
}
  const urlData2={
  
  no:"/user/currentbalance",
  yes:"/user/popup/transation",
  notxt:"NO",
  yestxt:"YES"
} 
 const urlData3={
  no:"/",
  yes:"/user/help",
  yestxt:"OK"
}


  return (
    <>
  
    {popupIdData==="cancelprocess"&&( <ConfirmPopup data={HeadingText1} urlData={urlData1}/>)}
    {popupIdData==="confirmtransaction"&&( <ConfirmPopup data={HeadingText2} urlData={urlData2}/>)}
    {popupIdData === "transation" && ( <ConfirmPopup data={HeadingText3} urlData={urlData3}/>)}
    </>
  );
}
export default PopUp
;
