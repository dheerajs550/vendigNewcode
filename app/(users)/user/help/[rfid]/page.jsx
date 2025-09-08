"use client";
import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from "react";
import { getUserByRFID, getUserBalance } from "@/services/userService";
// import { getPrescriptionDetails, collectPrescription } from "@/services/prescriptionService";
import { useParams } from "next/navigation";

function Help() {
   const params = useParams();
   const rfid = params.rfid
 const [user, setUser] = useState(null);
  // const [balance, setBalance] = useState(null);
console.log(rfid,",,,")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserByRFID(rfid);
        setUser(userData);

        // const bal = await getUserBalance("RFID1001");
        // setBalance(bal);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  console.log(user)
  // const handleCollect = async () => {
  //   try {
  //     const res = await collectPrescription("00000125", { collectedBy: "self" });
  //     console.log("Prescription collected:", res);
  //   } catch (err) {
  //     console.error("Error collecting prescription:", err);
  //   }
  // };



  // // ............
  // const pageData = [{pageData:"Check Balance",
  //                   pageLink:`/user/checkbalance/${user?.rfid}`},
  //                   {pageData:"Medicine Prescriptions",
  //                   pageLink: "/user/selectprescription"}];
  const pageData = user ? [
  { pageData: "Check Balance", pageLink: `/user/checkbalance/${user.rfid}` },
  { pageData: "Medicine Prescriptions", pageLink: `/user/ordermadicine/${user.rfid}` }
] : [];

  const HeadingText = { HeadingText1:`  Welecome ${user?.name}`,
                        HeadingText2:"How Can We Help Today!"};

  const bottomBtnRoot = { Cancel:"/user/popup/cancelprocess",
                          Back:"/user/language",
                          Continue:"/user/ordermadicine"};

  return (
       <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
           {/* Your inner content goes here */}
           <div className="    text-center" style={{   width:"100%"}}>
           {/* Title */}
           <HeadingTextCom data={HeadingText}/>
           {/* Language Buttons */}
           {user && <ButtonCom data={pageData} />}
           {/* <ButtonCom data={pageData}  /> */}
           {/* Bottom-Right: Two Continue Buttons */}
           <ButtomBtn data={bottomBtnRoot}/>
           </div>
       </div>
  )
}
export default Help;