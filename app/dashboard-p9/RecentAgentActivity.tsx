import React from 'react'
import Image from 'next/image'
import Icon from "@/components/ui/Icon";

const filterTab = [
    {
        label:'All Agents',
        action:'#',        
        active:true,      
    },
    {
        label:'Building Content Program',
        action:'#',        
        active:false,      
    },
    
]

const datatable = [
    {
        photo:'/images/avatar-1.png',
        name:'Lindsay Walton',
        office:'Aventura',
        email:'lindsay.walton@keyes.com',
        phone:'305-243-1800',
        Joined:'Jan 15, 2024',
        action:['Website', 'Feed', ]
    },  
    {
        photo:'/images/avatar-2.png',
        name:'Courtney Henry',
        office:'Aventura',
        email:'courtney.henry@keyes.com',
        phone:'788-323-5654',
        Joined:'Dec 23, 2023',
        action:['Website', 'Feed', ]
    },
    {
        photo:'/images/avatar-3.png',
        name:'Tom Cook',
        office:'Aventura',
        email:'tom.cook@keyes.com',
        phone:'305-788-9980',
        Joined:'Nov 12, 2023',
        action:['Website', 'Feed', ]
    },
    {
        photo:'/images/avatar-4.png',
        name:'Whitney Francis',
        office:'Boca Raton',
        email:'whitney.francis@keyes.com',
        phone:'561-455-7000',
        Joined:'Jan 15, 2024',
        action:['Website', 'Feed', ]
    },
    {
        photo:'/images/avatar-5.png',
        name:'Virginia Krasner',
        office:'Boca Raton',
        email:'leonard.krasner@keyes.com',
        phone:'561-232-7878',
        Joined:'Oct 12, 2023',
        action:['Website', 'Feed', ]
    },
    {
        photo:'/images/avatar-6.png',
        name:'Timothy Jones',
        office:'Coral Gables',
        email:'timothy.jones@keyes.com',
        phone:'305-231-5067',
        Joined:'Oct 17, 2023',
        action:['Website', 'Feed', ]
    },
    {
        photo:'/images/avatar-7.png',
        name:'Timothy Jones',
        office:'Coral Gables',
        email:'timothy.jones@keyes.com',
        phone:'305-231-5067',
        Joined:'Oct 17, 2023',
        action:['Website', 'Feed',  ]
    },
    
]


function RecentAgentActivity() {
  return (
    <>
      <section className="relative bg-white rounded-md p-5">
      <h2 className="sr-only">Agent roster</h2>
      <div className='flex gap-5 flex-col justify-between items-center'>
        <div className="flex flex-col items-start w-full">
            <div className="space-y-2 flex-1 w-full xl:max-w-xs">
              <p className="xl:text-lg text-black/30 font-semibold text-left uppercase">
              Agent roster
              </p>
              <h3 className="text-2xl xl:text-4xl text-primary font-light capitalize">
              Recent Agent Activity
              </h3>
            </div>
            
          </div>
          <div className='flex justify-between flex-wrap gap-5 flex-1 max-w-4xl'>
          <div className="flex gap-2 flex-wrap justify-between">
                {filterTab.map((item, index)=>(
                <button key={index} className={`font-bold font-montserrat text-sm py-2 px-4 xl:px-10 rounded hover:text-black/70 hover:bg-gray-500/5 ease-in-out duration-200 ${item.active ? 'text-black/70 bg-gray-500/5' : 'text-black/50'}`}>{item.label}</button>
                ))}
          </div>
            <button className={`font-bold font-montserrat text-sm py-2 px-4 xl:px-10 rounded text-white bg-primary ease-in-out duration-200`}>Add Agent</button>
        </div>
      </div> 

{/* Data table */}
<div className='max-w-full overflow-auto on-hover-scroll'>
    <div className='min-w-[1100px] pt-5'>
        <table className='w-full divide-y divide-gray-200 font-inter'>
            <thead>
                <tr><th></th>
                    <th className='text-left font-inter py-2'>Name</th>
                    <th className='text-left font-inter py-2'><div className="flex justify-between w-full items-center pr-3">Office <button className='w-5 h-5 flex justify-center items-center rounded-md text-gray-700 bg-gray-200 ease-in-out duration-200'> <Icon
                            name={"chevron-down"}
                            color="currentColor"
                            size={10}
                            /></button></div></th>
                    <th className='text-left font-inter py-2'>Email</th>
                    <th className='text-left font-inter py-2'>Phone</th>
                    <th className='text-left font-inter py-2'>Joined</th>
                    <th></th>
                </tr>
            </thead>
                
            <tbody className='divide-y divide-gray-200 '>
                    {datatable.map((item, index)=>(
                        <tr key={index}>
                            <td className='py-2'>
                            <div className='shrink-0'>
                                <Image src={item.photo} width={32} height={32} alt='' />
                            </div>
                            </td>
                        <td className='py-2'>
                             
                            
                            <h3>{item.name}</h3>
                            
                            </td>
                            <td className='py-2 text-gray-400'>{item.office}</td>
                            <td className='py-2 text-gray-400'>{item.email}</td>
                            <td className='py-2 text-gray-400'>{item.phone}</td>
                            <td className='py-2 text-gray-400'>{item.Joined}</td>
                            <td className='py-2 text-gray-400' align="right"><div className='flex gap-2 items-center justify-end'>{item.action.map((item, index)=>(
                                <p key={index}>{item}</p>
                            ))} <button className='w-8 h-8 flex justify-center items-center rounded-full text-gray-400 hover:bg-gray-200 ease-in-out duration-200'> <Icon
                            name={"verticle-meetball"}
                            color="currentColor"
                            size={16}
                            /></button></div></td>
                            </tr>
                    ))}
                
            </tbody>
        </table>
    </div>
</div>
<div className='py-10 justify-center flex-1 flex'>
<button className={`font-bold font-montserrat text-sm py-2 px-10 rounded text-white bg-primary ease-in-out duration-200`}>View All</button>
</div>


      </section>
    </>
  )
}

export default RecentAgentActivity
