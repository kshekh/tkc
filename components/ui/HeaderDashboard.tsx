"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
const dashboardNav =[
  { lable: "Dashboard", link: "/#", selected:true,  },  
  { lable: "Account", link: "/#",  selected:false, },  
  { lable: "Inquiries", link: "/#", selected:false, count:6  },  
  { lable: "Learn", link: "/#", selected:false,  },  
  { lable: "Support", link: "/#", selected:false,  },  
  { lable: "Add Building", link: "/#", selected:false,  },  
]

function Header() {
 
  
  return (
    <header className="p-4 lg:p-8 lg:pb-0 mx-auto w-full bg-white rounded-t-md space-y-2 sm:space-y-5 ">
      <h1 className="sm:text-lg text-black/30 font-medium uppercase">Dashboard</h1>
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="space-y-1 sm:space-y-3">
            <p className="lg:text-lg text-black/60 uppercase font-semibold font-montserrat text-center sm:text-left">Welcome back</p>
            <h3 className="text-3xl lg:text-5xl text-primary font-bold text-center sm:text-left">Jill Windsor</h3>
        </div>
        <div className="space-y-1">
            <p className="text-sm text-black/60 uppercase font-montserrat font-semibold text-center sm:text-right">YOUR condo ADVISOR WEBSITE </p>
            <p className="lg:text-lg text-black/70 font-montserrat font-semibold border-b border-black/10 pb-1 flex gap-2 items-center text-center sm:text-right"><span>condos.keyes.com/<span className="text-primary">agent/jill-windsor</span></span><Icon name="go-out" color="currentColor" className="text-black/50" size={15} /></p>
            <p className="text-xs lg:text-sm text-black/90 font-montserrat font-semibold text-center sm:text-right">Upgrade to a custom domain in <Link href="#" className="underline text-primary">your account</Link></p>
        </div>
      </div>
      <div className="overflow-auto on-hover-scroll max-w-full">
      <nav className="flex gap-3 lg:gap-10 justify-between lg:justify-start items-center font-montserrat text-sm sm:text-base lg:text-lg min-w-[500px] sm:min-w-[640px]">
        {dashboardNav.map((item, index)=>(
          <Link key={index} href={item.link} className={`font-medium py-3 lg:px-2 ease-in-out duration-200 hover:text-primary border-b ${item.selected ? 'border-primary text-primary' : 'border-transparent text-black/90'}`} >{item.lable} {item.count && <span className="bg-black/5 rounded-full py-1 px-3 text-sm text-black/70">{item.count}</span>}</Link>
        ))}  
        </nav>
        </div>
    
    </header>   
  ); 
}

export default Header;
