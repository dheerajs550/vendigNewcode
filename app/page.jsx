import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
      {/* <Link href="user/language" className="w-full max-w-md"> */}
       <div className="w-full max-w-md">
          <p className="text-amber-300">We currently do not have RFID cards available for scanning. Therefore, we have added "User" and "Admin" buttons here for demonstration purposes only. These buttons and page will be removed in the production version.</p>
          <div className=" backdrop-blur-md rounded-xl  sm:p-10 w-full text-center transition hover:scale-105 hover:shadow-xl cursor-pointer">
          {/* Welcome Text */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Welcome</h2>
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
           <p className="text-gray-800 text-base sm:text-lg">Please scan your RFID card </p>
           <div className=" flex justify-between">
             <Link href={"/user"}><button  className="w-25 mt-6  bg-teal-700 text-white font-semibold py-2 rounded-md hover:bg-teal-800 transition">  USER</button></Link>
             <Link href={"/admin"}><button  className="mt-6 w-25 bg-teal-700 text-white font-semibold py-2 rounded-md hover:bg-teal-800 transition">  ADMIN</button></Link>
           </div>
         </div>
         </div>
      {/* </Link> */}
   </>);}
