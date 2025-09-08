import ButtomBtn from '@/components/bottombutton/page'
import Link from 'next/link'
import React from 'react'
function CurrentBalance() {
    const bottomBtnRoot = {  Cancel:"/user/popup/cancelprocess",
                             Back:"/user/ordermadicine",
                             Continue:"/user/popup/confirmtransaction"}
  return (
          <>  
                      {/* Your inner content goes here */}
             <div className="text-center" style={{   width:"100%"}}>
                     {/* Language Buttons */}
                     <div className="bg-[#ecf6f6] p-4 sm:p-6 md:p-8 rounded-lg max-w-md w-full mx-auto space-y-4">
                     {/* Current Balance */}
                     <div className="flex justify-between items-center">
                     <span className="text-gray-900 text-lg sm:text-xl font-medium">Current Balance:</span>
                     <span className="text-[#00796B] font-bold text-lg sm:text-xl">Rs. 15,000</span>
                     </div>           
                     {/* Billing Amount */}
                     <div className="flex justify-between items-center">
                     <span className="text-gray-900 text-lg sm:text-xl font-medium">Billing Amount:</span>
                     <span className="text-[#00796B] font-bold text-lg sm:text-xl">Rs. 5,000</span>
                     </div>
                     </div>
                     {/* Bottom Buttons */}
                     <ButtomBtn data={bottomBtnRoot}/>
             </div>
          </>
        )}
export default CurrentBalance