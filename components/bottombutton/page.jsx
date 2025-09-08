import Link from 'next/link'
import React from 'react'

function ButtomBtn({data, text}) {
  return (<>
 
    <div className="fixed bottom-4 left-4">
  <Link href={data.Cancel}>
    <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition w-full max-w-[120px]">
     { text?.Cancel?text?.Cancel:"Cancel"}
    </button>
  </Link>
</div>

{/* Bottom-Right: Two Continue Buttons */}
<div className="fixed bottom-4 right-4 flex gap-3">
  {/* First Continue Button (outline style) */}
  {data.Back && <Link href={data.Back}>
    <button className="bg-transparent border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2 rounded-md transition">
     {text?.Back?text?.Back:"Back"}
    </button>
  </Link>
}
  {/* Second Continue Button (solid style) */}
 { data.Continue && <Link href={data.Continue}>
    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition">
     {text?.Continue?text?.Continue:"Continue"}

    </button>
  </Link>}
</div>
 </>
  )
}

export default ButtomBtn