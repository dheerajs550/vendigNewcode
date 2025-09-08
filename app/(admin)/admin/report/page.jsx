import ButtomBtn from '@/components/bottombutton/page';
import ButtonCom from '@/components/button/page';
import HeadingTextCom from '@/components/heading/page';
import React from 'react'

function Report() {
       const pageData = [       {pageData:"Manager Inventory",                               
                                pageLink:"/admin/manageinventoey"},
                                {pageData:"Generate Report" ,
                                pageLink: "/admin/generatereport",},
                                {pageData:"admin Expire Report",
                                pageLink: "/admin/report/admin-expirer-eport",},
                                {pageData:"Generate Product Report",
                                pageLink: "/admin/report/generate-product-report",},];
                 
       const HeadingText =   {  HeadingText1: "Welcome Owner Name!",};

       const bottomBtnRoot = {  Cancel: "/admin/popup/cancelprocess",
                                Back: "/admin/otp",
                                Continue: "/admin/manageinventoey"};

  return (
     <>  
        {/* Your inner content goes here */}
       <div className="    text-center" style={{   width:"100%"}}>
        {/* Title */}       
         <HeadingTextCom data={HeadingText}/>
        {/* Language Buttons */}
        <ButtonCom data={pageData}/>
        {/* Bottom Buttons */}
        <ButtomBtn data={bottomBtnRoot}/>
      </div>
    </>
  )
}

export default Report