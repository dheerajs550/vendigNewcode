"use client";
import { useEffect, useState } from "react";
import { getInventoryOverview } from "@/services/ownerService";
import ButtomBtn from '@/components/bottombutton/page';
import DispensIngcard from '@/components/dispensingcard/page';
import HeadingTextCom from '@/components/heading/page';
import React from 'react'
// .........
  //  const pageData = [ {GenericName:"acbjkfvbsf",
  //                               BrandName:"Cipla",
  //                               MfgBy:"Cipla",
  //                               MarketedBy:"Cipla",
  //                               Day:"Tuesday",
  //                               Date:"27/08/2025",
  //                               Time:"14:38",
  //                               TotalInventory:"85",
  //                               TotalCapacity:"100",
  //                               BalanceRefill:"15",          
  //                            },{GenericName:"acbjkfvbsf",
  //                               BrandName:"Cipla",
  //                               MfgBy:"Cipla",
  //                               MarketedBy:"Cipla",
  //                               Day:"Tuesday",
  //                               Date:"27/08/2025",
  //                               Time:"14:38",
  //                               TotalInventory:"85",
  //                               TotalCapacity:"100",
  //                               BalanceRefill:"15",          
  //                            },];
                 
        const HeadingText =   {  HeadingText1: "Welcome Owner Name!",};

        const bottomBtnRoot = {  Cancel: "/admin/popup/cancelprocess",
                                Back: "/admin/report",
                                Continue: "/admin/popup/manageinventoey"};

// ..........
function ManageInventoey() {
       
            // ..............
            const [inventory, setInventory] = useState([]);
             useEffect(() => {
               const fetchData = async () => {
                 const res = await getInventoryOverview();
                 setInventory(res);
               };
               fetchData();
             }, []);
            console.log(inventory,"....")    
const pageData = inventory.items
  return (
     <>  
        {/* Your inner content goes here */}
       <div className="text-center" style={{   width:"100%"}}>
        {/* Title */}       
         <HeadingTextCom data={HeadingText}/>
        {/* Language Card */}
       <div className='flex flex-wrap justify-center gap-5 mt-4'>
       { pageData && <DispensIngcard data={pageData}/>}
       </div>
        {/* Bottom Buttons */}
        <ButtomBtn data={bottomBtnRoot}/>
      </div>
    </>
  )
}

export default ManageInventoey