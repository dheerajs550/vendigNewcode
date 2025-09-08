import React from 'react'

function HeadingTextCom({data}) {
  
  return (<>
            
           
     {data.HeadingText1 && (
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">     
             { data.HeadingText1}
            </h1>
      )}
      
      {data.HeadingText2 && (
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          {data.HeadingText2}
        </h1>
      )}
       {data.HeadingText3 && (<>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
          {data.HeadingText3}
        </h3>
         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          {data.HeadingText4}
           <span className="text-teal-600"> {data.HeadingText5}</span>
        </h3>
       </>

      )}
      {data.HeadingText6 && (<>
         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          {data.HeadingText6}
           <span className="text-teal-600"> {data.HeadingText7}</span>
        </h3>
       </>

      )}
            
  </>

  )
}

export default HeadingTextCom