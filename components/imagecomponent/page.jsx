import Image from 'next/image'
import React from 'react'

function ImageComponent({data, hightData, withData}) {
 
  return (
     <div className="w-full flex justify-center items-center">
                <Image
                  src={`/image/${data || "rfid.png"}`}
                  alt="Scan RFID"
                  width={hightData}
                  height={withData}
                  className="object-contain"
                />
    </div>
  )
}

export default ImageComponent