import React from 'react'
 
const city =  [
    'Miami', 'Miami Beach', 'Aventura', 'Sunny Isles Beach'
]
function NearByCities({sectionTitle}:any) {
  return (
    <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
    <div className="flex flex-col pt-5 gap-5">
      <div className="flex justify-between gap-2">
        <h2 className="uppercase font-semibold text-black/80 text-center text-xl font-montserrat">
          {sectionTitle}
        </h2>
       
      </div> 
      <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
      {city.map((item, index)=>{return(
        <div key={index} className='shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl'>{item}</div>
      )})}      
    </div>
    </div>
  </div>
  )
}

export default NearByCities
