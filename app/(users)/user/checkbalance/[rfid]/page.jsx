"use client";

import { useI18n } from '@/app/i18n/I18nContext';
import ButtomBtn from '@/components/bottombutton/page'
import { getUserBalance } from '@/services/userService';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function CheckBalance() {
const { rfid } = useParams("rfid");  
const {t}=useI18n();
  //  const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // const userData = await getUserByRFID("RFID1001");
          // setUser(userData);
  
          const bal = await getUserBalance(rfid);
          setBalance(bal);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
      fetchData();
    }, []);
  
    console.log(balance,rfid)
//  .........
  const bottomBtnRoot={
Cancel:"/user/popup/cancelprocess",
Back:`/user/help/${rfid}`,
}
  return (
<>  
  {/* Your inner content goes here */}
      <div className="    text-center" style={{   width:"100%"}}>
        {/* Title */}

        {/* Language Buttons */}
      <div className="bg-[#ecf6f6] p-4 sm:p-6 md:p-8 rounded-lg max-w-md w-full mx-auto space-y-4">
  {/* Current Balance */}
  <div className="flex justify-between items-center">
    <h1 className="text-gray-900 text-lg sm:text-xl font-medium">{t("YourAcoountBalanceIs")}:</h1>
    <h1 className="text-[#00796B] font-bold text-lg sm:text-xl">Rs. {balance?.balance}</h1>
  </div>

  {/* Billing Amount */}

</div>


        {/* Bottom Buttons */}
        <ButtomBtn data={bottomBtnRoot}/>
   

      </div>
    </>
  )
}

export default CheckBalance