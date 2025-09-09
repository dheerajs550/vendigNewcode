"use client";
import React from 'react'
import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import { useEffect, useState } from "react";
import { getUserByRFID, getUserBalance } from "@/services/userService";
import { useParams } from 'next/navigation';
import { useI18n } from '@/app/i18n/I18nContext';

              

      
function OrderMedicine() {
  const { rfid } = useParams("rfid");  
  const {t}=useI18n();
   const bottomBtnRoot = {  Cancel:"/user/popup/cancelprocess",
                                Back:`/user/selectprescription/${rfid}`,
                                Continue:`/user/currentbalance/${rfid}`};

       const pageData = [{ pageData:`${t("Self")}`,
                           pageLink:"/user/relationship/seif"},
                           {pageData:`${t("Wife")}`, 
                           pageLink: "/user/relationship/wife",},
                           {pageData:`${t("Daughter")}`,
                           pageLink: "/user/relationship/daughter",},
                          {pageData:`${t("Son")}`,
                           pageLink: "/user/relationship/son",},
                          {pageData:`${t("Other")}`,
                           pageLink: "/user/relationship/other",}];
       const HeadingText = {  HeadingText1:`${t("SelectRelationshipOption")}`,};

  
  const [user, setUser] = useState(null);

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
    </>)}
export default OrderMedicine;