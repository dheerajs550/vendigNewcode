import React from 'react'
import Link from 'next/link'

function SinglBtn({data,btnname}) {
 
  return (
    <>
      {  <Link  href={data}>
    <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2 rounded-md transition">
     { btnname}
    </button>
  </Link>
}
    </>
  )
}

export default SinglBtn