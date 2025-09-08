"use client";
import React from 'react'
import ButtomBtn from '@/components/bottombutton/page'
import ButtonCom from '@/components/button/page'
import HeadingTextCom from '@/components/heading/page'
import { useEffect, useState } from "react";
import { getUserByRFID, getUserBalance } from "@/services/userService";
import { useParams } from 'next/navigation';

       const pageData = [{ pageData:"Seif",
                           pageLink:"/user/relationship/seif"},
                           {pageData:"Wife" ,
                           pageLink: "/user/relationship/wife",},
                           {pageData:"Daughter",
                           pageLink: "/user/relationship/daughter",},
                           {pageData:"Son",
                           pageLink: "/user/relationship/son",},
                           {pageData:"Other",
                           pageLink: "/user/relationship/other",}];
              
       const HeadingText = {  HeadingText1:"Select Relationship Option:",};

       const bottomBtnRoot = {  Cancel:"/user/popup/cancelprocess",
                                Back:"/user/help",
                                Continue:"/user/currentbalance"};

function OrderMedicine() {
  const { rfid } = useParams("rfid");  
  
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