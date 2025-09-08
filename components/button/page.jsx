import Link from 'next/link'
import React from 'react'

  function ButtonCom({data}) {
  return (
    <>
       <div className=" items-center mb-10" style={{ background:"#ecf6f6"}}>
       {data.map((label, index) => (
       <Link key={index} className='block my-4' href={label.pageLink ||"/"}>
       <button className="bg-transparent border border-teal-600 text-teal-600 hover:text-white   bg-teal-600  font-medium px-6 py-2 rounded-md w-full max-w-xs hover:bg-teal-700 transition">
       {label.pageData}
       </button> 
       </Link>     
  ))}
       </div> 
    </>
  )
}
export default ButtonCom;
