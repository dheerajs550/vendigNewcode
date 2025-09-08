
"use client";
import { useState } from "react";
import { fingerprintAuth } from "@/services/ownerService";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Admin() {


// export default function FingerprintPage() {
//   const [ownerId, setOwnerId] = useState(null);

//   const handleAuth = async () => {
//     const res = await fingerprintAuth("OWNER_FP_001");
//     setOwnerId(res.ownerId);
//     localStorage.setItem("ownerId", res.ownerId);
//     // redirect to RFID page
//   };

//   return <button onClick={handleAuth}>Scan Fingerprint</button>;
// }

// { fingerprintId: "OWNER_FP_001"}

const [ownerId, setOwnerId] = useState(null);

  const handleAuth = async () => {
    const res = await fingerprintAuth("OWNER_FP_001");
    setOwnerId(res.ownerId);
    console.log( res.ownerId,"..id")
    localStorage.setItem("ownerId", res.ownerId);
    // redirect to RFID page
  };

  return (
     <>
 <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
    {/* <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4"> */}
      
      {/* Title */}
      {/* <h1 className="text-3xl font-bold text-blue-700 mb-6">Home</h1> */}

      {/* Entire card is now a link */}
      <Link href="admin/scancard" onClick={handleAuth} className="w-full max-w-md">
        <div className=" backdrop-blur-md rounded-xl  sm:p-10 w-full text-center transition hover:scale-105 hover:shadow-xl cursor-pointer">

          {/* Welcome Text */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            Welcome
          </h2>

          {/* Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/image/Body.png"
              alt="Scan RFID"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Instruction */}
          <p className="text-gray-800 text-base sm:text-lg">
            Please scan your Fingerprint card
          </p>
        </div>
      </Link>
    </div>





    </>
  )
}

export default Admin