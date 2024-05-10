import React from 'react'
const programlead =[
    {
        label:'Total Leads',
        value:'542'
    },
    {
        label:'Total Lead Amount',
        value:'$210M'
    },
    {
        label:'Projected Commissions',
        value:'$120K'
    },
]
function ProgramLeads() {
  return (
    <>
      <section className="relative bg-white rounded-md p-5">
      <h2 className="sr-only"> Projected Brokerage Revenue</h2>
      <div className='flex gap-5 justify-between flex-wrap items-center'>
        <div className="flex flex-col">
            <div className="space-y-2 flex-1 max-w-xs">
              <p className="xl:text-lg text-black/30 font-semibold text-left uppercase">
              Projected Brokerage Revenue
              </p>
              <h3 className="text-2xl xl:text-4xl text-primary font-light capitalize">
              program leads*
              </h3>
              <p className='text-sm text-black/50 leading-snug'>*Includes leads from agent and broker websites, but does not include direct phone calls and email inquiries</p>
            </div>
            
          </div>
          <div className='flex justify-between flex-wrap gap-5 flex-1 max-w-4xl'>
            {programlead.map((item, index)=>(
                <div key={index} className='space-y-5'>
                    <p className="xl:text-xl font-semibold text-black/80 leading-none">{item.label}</p>
                    <p className="text-3xl xl:text-5xl font-bold text-primary leading-none">{item.value}</p>
                </div>
            ))}
          </div>
        </div> 
      </section>
    </>
  )
}

export default ProgramLeads
