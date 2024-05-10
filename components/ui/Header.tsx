"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
const topTab = [
  { lable: "LIST", link: "/#", selected: false },
  { lable: "GRID", link: "/#", selected: false },
  { lable: "MAP", link: "/#", selected: false },
];
function Header() {
  const [favorite, setFavorite] = useState(false);
  const favoriteHandle = () => {
    setFavorite(!favorite);
  };
  return (
    <header className="max-w-screen-wrap px-5 mx-auto w-full ">
      <div className="flex flex-col rounded-b-md shadow-md">
        <div className="bg-white flex justify-between items-center p-5 xl:px-10">
          <div className="flex gap-10  items-center">
            <div className="relative">
              <Link href="/#">
                <Image
                  src="/images/keyes-company-logo.svg"
                  width={150}
                  height={100}
                  alt=""
                />
              </Link>
            </div>
            

            <p className="uppercase font-montserrat text-black/50 font-bold text-sm">
              BUILDING
              <br />
              ADVISOR
            </p>
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
                  name="cart"
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
        <div className="bg-gray-100 rounded-b-md px-5 py-3 xl:px-10 flex-col md:flex-row gap-2 flex justify-between">
          <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center flex-1  lg:flex-none">
            <div className="gap-2 flex items-center">
              <Icon
                name="location"
                className="text-black/55 w-5 h-5 xl:w-auto xl:h-auto"
                size={24}
                color="currentColor"
                stroke="transparent"
              />
              <p className="text-black/80 text-xl xl:text-2xl ">
                <b className="font-bold">2557</b> buildings available in, Miami,
                FL
              </p>
            </div>
            <div className="border-2 border-black/20 rounded-md py-1 px-3 font-montserrat">
              <p className="text-sm text-black/80 font-medium">
                Don’t see your building?
              </p>
              <Link
                href="/#"
                className="font-bold text-sm text-black/80 hover:text-primary ease-in-out duration-200 underline"
              >
                Add Now
              </Link>
            </div>
          </div>
          <div className="gap-2 flex items-center xl:min-w-96 flex-1 lg:flex-none ">
            {topTab.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="border-2 border-black/20 hover:bg-black/10 text-center font-montserrat ease-in-out duration-200 rounded-md py-2 px-3 uppercase flex-1 font-bold text-black/50 hover:text-black"
                >
                  {item.lable}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
