`useParams`
import React from 'react'
 import Image from 'next/image';
 import Link from 'next/link';
function User() {
  const UserRfidCode ="RFID123456"
  // const AdminRfidCode ="RFID123456"
  return (
    <>


 <div className="min-h-screen w-full bg-[url('/image/BackgroundImage.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center  sm:px-6 md:px-10 bg-[#ecf6f6]">  
    {/* <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4"> */}
      
      {/* Title */}
      {/* <h1 className="text-3xl font-bold text-blue-700 mb-6">Home</h1> */}

      {/* Entire card is now a link */}
      <Link href={`user/language/${UserRfidCode}`} className="w-full max-w-md">
        <div className=" backdrop-blur-md rounded-xl  sm:p-10 w-full text-center transition hover:scale-105 hover:shadow-xl cursor-pointer">

          {/* Welcome Text */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            Welcome
          </h2>

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
      </Link>
    </div>





    </>
  )
}

export default User