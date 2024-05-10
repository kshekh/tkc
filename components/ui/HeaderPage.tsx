"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { BiPhoneCall, BiMenu, BiX } from "react-icons/bi";
const links = [
  { lable: "Buy", link: "/#" },
  { lable: "rent", link: "/#" },
  { lable: "buildings", link: "/#" },
];
const add = [
  { lable: "add to watchlist", link: "/#" },
  { lable: "add to favorites", link: "/#" },
  { lable: "Request Infomation", link: "/#" },
];
function HeaderPage() {
  const [favorite, setFavorite] = useState(false);
  const [headerdd, setHeaderdd] = useState(false);
  const favoriteHandle = () => {
    setFavorite(!favorite);
  };
  return (
    <>
      <header className="max-w-screen-wrap px-5  mx-auto w-full ">
        <div className="flex flex-col rounded-b-md shadow-md mb-4">
          <div className="bg-white flex justify-between items-center p-3 xs:p-5 xl:px-10">
            <div className="flex flex-col md:flex-row gap-2 xs:gap-5 xs:items-center">
              <div className="relative">
                <Link href="/#">
                  <Image
                    src="/images/keyes-company-logo.svg"
                    width={150}
                    height={100}
                    className="w-auto h-auto"
                    alt="keyes company logo"
                  />
                </Link>
              </div>
              <hr className=" border border-black/70 w-full md:w-auto md:h-16 border-r-0 block" />
              <div className="flex gap-2 xl:gap-5 items-center">
                <p className="uppercase font-montserrat text-black/65 whitespace-nowrap font-bold text-[0.5rem] xs:text-xs md:text-sm">
                  Jill
                  <br className="hidden md:block" /> Windsor
                </p>
                <p className="uppercase font-montserrat text-black/55 whitespace-nowrap font-bold text-[0.5rem] xs:text-xs md:text-sm">
                  condo
                  <br className="hidden md:block" /> ADVISOR
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-2 lg:gap-5 xl:gap-10 items-center">
              {links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="hidden text-dark hover:text-primary text-sm xl:text-base ease-in-out duration-200 font-montserrat uppercase font-semibold"
                  >
                    {item.lable}
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="md:hidden relative">
                <button
                  onClick={() => setHeaderdd(!headerdd)}
                  className="flex justify-center items-center"
                >
                  {headerdd ? (
                    <BiX className="text-primary" size={24} />
                  ) : (
                    <BiMenu className="text-primary" size={24} />
                  )}
                </button>
                <div className="hidden md:flex flex-col gap-5 items-center ">
                  {links.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item.link}
                        className="text-dark hover:text-primary ease-in-out duration-200 font-montserrat uppercase font-semibold"
                      >
                        {item.lable}
                      </Link>
                    );
                  })}
                </div>
                {headerdd && (
                  <div className="md:hidden flex flex-col gap-2 py-3 items-center w-60 bg-white rounded-md shadow-md absolute top-full right-0 border border-black/10">
                    {links.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href={item.link}
                          className="text-dark hover:text-primary ease-in-out duration-200 font-montserrat uppercase font-semibold"
                        >
                          {item.lable}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="font-bold tracking-tight text-primary uppercase leading-none hidden lg:block">
                  Call or Text
                </p>
                <p className="font-medium text-dark tracking-wide leading-none">
                  <Link
                    href="tel:9545554545"
                    className="ease-in-out duration-200 hover:text-primary xl:text-xl"
                  >
                    <BiPhoneCall className="lg:hidden text-primary" size={20} />{" "}
                    <span className="hidden lg:inline-block">
                      (954) 555-4545
                    </span>
                  </Link>
                </p>
              </div>
              <div className="flex items-center">
                <button className="border-primary border-2 hover:bg-primary hover:text-white ease-in-out duration-200 uppercase rounded-lg text-primary font-bold py-3 px-5 font-montserrat">Contact</button>
              </div>
              <div className="relative" onClick={favoriteHandle}>
                <Icon
                  name={favorite ? "heartFill" : "heart"}
                  color="var(--primary)"
                  size={20}
                  stroke="transparent"
                />
              </div>
              <div className="relative">
                <span className="relative flex">
                  <Icon
                    name="user"
                    color="var(--primary)"
                    size={20}
                    stroke="transparent"
                  />
                  <span className="flex absolute -top-2 -right-2 border-2 border-white rounded-xl text-[0.6rem] text-white leading-none bg-primary h-5 min-w-5 justify-center items-center font-montserrat font-bold text-center">
                    2
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderPage;
