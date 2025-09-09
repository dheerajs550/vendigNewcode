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
import { useI18n } from '@/app/i18n/I18nContext';

function Help() {
   const params = useParams();
   const rfid = params.rfid
 const [user, setUser] = useState(null);
   const { t } = useI18n();
console.log(rfid,",,,")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserByRFID(rfid);
        setUser(userData);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  console.log(user)
  
  const pageData = user ? [
  { pageData:`${t("checkBalance")} `, pageLink: `/user/checkbalance/${user.rfid}` },
  { pageData: `${t("medicinePrescriptions")}`, pageLink: `/user/selectprescription/${user.rfid}` }
] : [];

  const HeadingText = { HeadingText1:`  ${t("welcome")} ${user?.name}`,
                        HeadingText2:`${t("helpHeading2")}`};

  const bottomBtnRoot = { Cancel:"/user/popup/cancelprocess",
                          Back:`/user/language/${rfid}`,
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