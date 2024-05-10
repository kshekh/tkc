"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Icon from "@/components/ui/Icon";
const nav=[
  {
    lable:'Dashboard',
    link:'#',
    active:true
  },
  {
    lable:'Agents',
    link:'#',
    active:false
  },
  {
    lable:'Company',
    link:'#',
    active:false
  },
  {
    lable:'Users',
    link:'#',
    active:false
  },
  {
    lable:'Settings',
    link:'#',
    active:false
  },
]
function Header() {
  const [favorite, setFavorite] = useState(false);
  const favoriteHandle = () => {
    setFavorite(!favorite);
  };
  return (
    <>
      <div className='bg-white shadow-1 px-4 py-2 sm:py-0 flex-wrap flex justify-between items-center gap-5'>
        <div className='flex flex-col'>
          <h1 className='uppercase font-semibold text-primary text-sm xl:text-base text-left font-montserrat'>welcome back,</h1>
          <p className='font-semibold text-black/70 text-left text-xl xl:text-2xl font-montserrat'>Wendi Iglesias</p>
        </div>
        <div className='max-w-full overflow-auto'>
          <nav className='flex gap-1 xl:gap-7'>
            {nav.map((item, index)=>(
            <Link key={index} href={item.link} className={`hover:text-primary font-montserrat font-medium border-b hover:border-primary p-2 sm:py-4 xl:py-6 xl:text-xl ease-in-out duration-200 ${item.active ? 'border-primary text-primary' : 'border-transparent text-black/70'}`}>{item.lable}</Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-5">
            <div className="relative" onClick={favoriteHandle}>
              <Icon
                name={favorite ? "heartFill" : "heart"}
                color="var(--primary)"
                size={24}
                stroke="transparent"
              />
            </div>
            <div className="relative">
              <span className="relative flex">
                <Icon
                  name="user"
                  color="var(--primary)"
                  size={24}
                  stroke="transparent"
                />
                <span className="flex absolute -top-2 -right-2 border-2 border-white rounded-xl text-[0.6rem] text-white leading-none bg-primary h-5 min-w-5 justify-center items-center font-montserrat font-bold text-center">
                  2
                </span>
              </span>
            </div>
          </div>
      </div>
    </>
  )
}

export default Header
