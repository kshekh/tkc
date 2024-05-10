import React from "react";
import Icon from "./Icon";
import Link from 'next/link'
const iconMenu =[
  {label:'home', link:'/#'}, {label:'user-nav', link:'/#'}, {label:'bulb', link:'/#'}, {label:'qa', link:'/#'}, {label:'building', link:'/#'}
]
function LeftSidebar() {
  return (
    <>
      <aside className="group bg-primary fixed left-0 inset-y-0 w-10 md:w-14 text-white flex flex-col">
        <div className="flex h-auto w-10 md:w-14 flex-1 flex-col bg-primary">
          <div className="flex max-h-screen flex-1 flex-col ">
            <div className="flex w-10 flex-shrink-0 items-center justify-center py-6 md:w-14  ">
              <div className="text-white">
                <Icon name="brand-icon" size={40} color="currentColor" />
              </div>
            </div>
            <nav className="on-hover-scroll max-h-full flex-1 space-y-1 overflow-y-auto overflow-x-hidden">
              {iconMenu.map((item, index)=>(
              <Link href={item.link} key={index} className="py-5 flex justify-center ease-in-out duration-200 hover:bg-black/10 ">
                <Icon name={item.label} size={22} color="currentColor" className="flex justify-center items-center" />
              </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
            <button className="py-5 flex justify-center ease-in-out duration-200 hover:bg-black/10">
                <Icon name="logout" size={25} color="currentColor" className="flex justify-center items-center" />
              </button>
            </div>
          </div>
        </div>
        
      </aside>
    </>
  );
}

export default LeftSidebar;
