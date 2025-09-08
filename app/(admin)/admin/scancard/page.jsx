"use client";
import { rfidAuth, sendOtp } from "@/services/ownerService"; // 👈 sendOtp import karo
// import { rfidAuth, sendOtp } from "@/services/ownerService";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ScanCard() {
  const [ownerId, setOwnerId] = useState(null);

  // Get ownerId from localStorage only on the client
  useEffect(() => {
    const storedOwnerId = localStorage.getItem("ownerId");
    setOwnerId(storedOwnerId);
    console.log("Owner ID:", storedOwnerId);
  }, []);

  const handleRfid = async () => {
    const demoRfidId = "OWNER123RFID"; // demo ID set here
    if (!ownerId) {
      alert("Owner ID not found!");
      return;
    }

    try {
      const res = await rfidAuth(ownerId, demoRfidId);
      console.log("RFID auth result:", res);

          // 2. OTP send karo 👇
      await sendOtp(ownerId);
      
      // Redirect to OTP page after successful RFID auth
      window.location.href = "/admin/otp";
    } catch (error) {
      console.error("RFID authentication failed:", error);
      alert("RFID authentication failed!");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center sm:px-6 md:px-10 bg-[#ecf6f6]">
      <div
        onClick={handleRfid}
        className="w-full max-w-md backdrop-blur-md rounded-xl sm:p-10 w-full text-center transition hover:scale-105 hover:shadow-xl cursor-pointer"
      >
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/image/rfid.png"
            alt="Scan RFID"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Instruction */}
        <p className="text-gray-800 text-base sm:text-lg">
          Please scan your RFID card
        </p>
      </div>
    </div>
  );
}

export default ScanCard;
