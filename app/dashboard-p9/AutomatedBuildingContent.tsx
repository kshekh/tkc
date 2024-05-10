import React from 'react'
const abc =[
    {
        label:'Active Buildings',
        value:'430'
    },
    {
        label:'Content Upgrade Revenue',
        value:'$16.7k/mo'
    },
    {
        label:'Content Provided',
        value:'10,340'
    },
]
function AutomatedBuildingContent() {
  return (
    <>
      <section className="relative bg-white rounded-md p-5">
      <h2 className="sr-only">automated building content</h2>
        <div className='flex gap-5 flex-wrap justify-between items-center'>
        <div className="flex flex-col w-full sm:w-auto">
            <div className="space-y-2 flex-1">
              <p className="xl:text-lg text-black/30 font-semibold text-left uppercase">
              building content UPGRADES
              </p>
              <h3 className="text-2xl xl:text-4xl text-primary font-light capitalize">
              automated
                <br />
                building content
              </h3>
            </div>
            
          </div>
          <div className='flex justify-between flex-wrap gap-5 flex-1 max-w-4xl'>
            {abc.map((item, index)=>(
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

export default AutomatedBuildingContent
