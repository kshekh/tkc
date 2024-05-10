"use client";
import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "@/components/ui/LeftSidebar";
import HeaderDashboard from "@/components/ui/HeaderDashboard";
import DashboarSidebar from "@/components/ui/DashboarSidebar";
import Icon from "@/components/ui/Icon";
import { FaRegListAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const filterTab = [
  { lable: "All", selected: true },
  { lable: "Active", selected: false },
  { lable: "Inactive", selected: false },
  { lable: "Content", selected: true },
  { lable: "Building Profile", selected: false },
];
const list1 = filterTab.slice(0, 3);
const list2 = filterTab.slice(3, 5);

const dashFilterTab = [
  { lable: "All", selected: true },
  { lable: "Social", selected: false },
  { lable: "Alerts", selected: false },
  { lable: "Articles", selected: false },
  { lable: "Inquiries", selected: false },
];

const sortList = [
  "Most Popular",
  "Best Rating",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];
function Dashboard() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortddOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setSortdd(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", sortddOutside);

    return () => {
      document.removeEventListener("mousedown", sortddOutside);
    };
  }, []);
  const [listView, setListView] = React.useState(true);
  const [sortdd, setSortdd] = React.useState(false);
  return (
    <>
      <LeftSidebar />
      <div className="flex flex-col pl-12 sm:pl-16 p-2 ">
        <HeaderDashboard />
        <main className="bg-white/40 flex-1  ">
          <div className="flex flex-wrap justify-between gap-2 p-1 sm:p-4 xl:p-8">
            <div className="flex flex-wrap justify-between gap-2 w-full">
              <div className="gap-2 flex items-center xl:min-w-72 flex-1 lg:flex-none ">
                {list1.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`whitespace-nowrap border-2 hover:border-black/20 hover:bg-white text-center font-montserrat ease-in-out duration-200 rounded-md py-2 px-3 uppercase flex-1 font-bold hover:text-black/90 ${
                        item.selected
                          ? "text-black/90 bg-white border-black/20"
                          : "text-black/40 bg-transparent border-transparent"
                      }`}
                    >
                      {item.lable}
                    </button>
                  );
                })}
              </div>
              <div className="gap-2 flex items-center xl:min-w-72 flex-1 lg:flex-none ">
                {list2.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`whitespace-nowrap border-2 hover:border-black/20 hover:bg-white text-center font-montserrat ease-in-out duration-200 rounded-md py-2 px-3 uppercase flex-1 font-bold hover:text-black/90 ${
                        item.selected
                          ? "text-black/90 bg-white border-black/20"
                          : "text-black/40 bg-transparent border-transparent"
                      }`}
                    >
                      {item.lable}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-5 w-full pt-3">
              <div className="md:col-span-4 lg:col-span-3 xl:col-span-2   flex flex-col">
                <DashboarSidebar />
              </div>
              <div className="md:col-span-8 lg:col-span-9 xl:col-span-10   flex flex-col">
                <div className="bg-primary flex flex-wrap xl:flex-nowrap justify-between items-center gap-2 rounded-t-md p-5 relative z-10">
                  <h3 className="text-2xl text-white whitespace-nowrap">Beach House 8</h3>
                  <div className="flex justify-between gap-5 xl:gap-10 w-full">
                    <div className="max-w-[calc(100%-110px)] overflow-auto on-hover-scroll flex-1 flex justify-center">
                      <div className="gap-1 sm:gap-2 flex items-center xl:min-w-72 flex-1 lg:flex-none min-w-[400px]">
                        {dashFilterTab.map((item, index) => (
                          <button
                            key={index}
                            className={`whitespace-nowrap  hover:bg-white text-center font-montserrat ease-in-out duration-200 rounded-md py-1 px-3 xl:min-w-24 block font-semibold hover:text-primary ${
                              item.selected
                                ? "text-primary bg-white  "
                                : "text-white bg-transparent "
                            }`}
                          >
                            {item.lable}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 inset-y-0 items-center">
                      <div className="relative " ref={dropdownRef}>
                        <button
                          onClick={() => setSortdd(!sortdd)}
                          className="flex gap-2 items-center font-montserrat text-white font-semibold"
                        >
                          Sort{" "}
                          <Icon
                            name={`angle-${sortdd ? "up" : "down"}`}
                            size={15}
                            color="currentColor"
                          />
                        </button>
                        {sortdd && (
                          <div className="w-44 shadow-2 flex flex-col gap-1 bg-white rounded-md border border-black/10 p-3 absolute top-full right-0">
                            {sortList.map((item, i) => (
                              <button
                                key={i}
                                className="text-left text-sm font-montserrat text-black font-semibold py-1"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setListView(!listView)}
                        title={listView ? "Set Grid View" : "Set List View"}
                        className="p-0.5 text-white"
                      >
                        {listView ? (
                          <Icon name="grid" size={16} color="currentColor" />
                        ) : (
                          <FaRegListAlt size={16} color="currentColor" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex-1 rounded-b-md p-2 pb-0 sm:p-5 sm:pb-0 2xl:p-10 2xl:pb-0 border border-black/10">
                  <div className="flex flex-col gap-10 md:gap-20 relative before:absolute before:inset-y-0 before:left-5 before:w-[2px] before:bg-black/10">
                    {/* Product 1 */}
                    <div className="flex flex-col">
                      <div className="flex gap-2 sm:gap-5 xl:gap-10">
                        <div className="w-10 h-10 ring-4 ring-white relative z-10 shrink-0 bg-primary text-white rounded-full flex justify-center items-center">
                          <Icon
                            name="user-fill"
                            color="currentColor"
                            size={20}
                          />
                        </div>
                        <div className="flex gap-5 flex-col xl:flex-row xl:justify-between w-full">
                          <div className="flex">
                            <div className="max-w-md">
                              <h2 className=" font-inter text-black/90 font-semibold">
                                Eduardo Benz
                              </h2>
                              <p className="text-black/50 text-xl font-inter">
                                <b>New Inquiry</b> 2d ago
                              </p>
                              <p className="text-lg font-inter text-black/90 pt-3">
                                Hi, I’m interested in Beach House 8 Unit 32.
                                What’s the earliest we can schedule a tour?
                              </p>
                            </div>
                          </div>

                          <div className="border border-primary rounded-md flex flex-col max-w-2xl w-full">
                            <div className="bg-primary rounded-md py-2 px-4">
                              <h4 className="text-white/50 uppercase font-bold font-montserrat">
                                Buyer Inquiry
                              </h4>
                            </div>
                            <div className="flex flex-wrap justify-between 2xl:grid 2xl:grid-cols-2 p-5">
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    name
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    Eduardo Benz
                                  </p>
                                </div>
                                <Link
                                  href="#"
                                  className="underline text-sm text-black/60 font-medium"
                                >
                                  View Inquiry
                                </Link>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Tel
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    (305) 344-3434
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Email
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat truncate max-w-48 xl:max-w-full">
                                    ebenz@gmail.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-10 pt-10">
                        <div className="flex gap-2 sm:gap-5 w-full">
                          <div className="w-10 h-10  ring-4 ring-white relative z-10 shrink-0 bg-gray-200 text-black/60 rounded-full flex justify-center items-center">
                            <Icon
                              name="forward-arrow"
                              color="currentColor"
                              size={20}
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <h2 className=" font-inter text-black/70 mt-2 ">
                              <b className="text-black/90 font-semibold">
                                New Social Post
                              </b>{" "}
                              generated for{" "}
                              <b className="text-black/90 font-semibold">
                                Beachhouse 8
                              </b>{" "}
                              2d ago
                            </h2>
                            <div className="pt-5 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                              <div className="bg-primary rounded-md">
                                <div className="flex flex-col">
                                  <div className="rounded-t-md py-10">
                                    <p className="text-white text-center text-xl">
                                      Take a social tour of
                                    </p>
                                    <p className="text-4xl font-semibold text-white text-center">
                                      Beach House 8
                                    </p>
                                    <p className="text-white text-center text-xl">
                                      Take a social tour of
                                    </p>
                                  </div>
                                </div>
                                <div className="overflow-hidden">
                                  <Image
                                    src="/images/social-post-1.png"
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div className="p-5 flex flex-wrap gap-3">
                                  <div className="overflow-hidden w-24 shrink-0 -mt-10">
                                    <Image
                                      alt="Building Advisor"
                                      width={200}
                                      height={300}
                                      className="w-full rounded-md"
                                      src="/images/building-advisor.png"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <Image
                                      src="/images/keyes-company-logo-white.svg"
                                      alt="Keys Company Logo"
                                      width={50}
                                      height={50}
                                      className="w-auto h-10 pb-1"
                                    />

                                    <h5 className="text-white font-medium leading-none">
                                      Jill Windsor
                                    </h5>

                                    <p className="font-medium pb-1 text-sm text-white">
                                      (305) 233 - 4345
                                    </p>
                                    <button className="bg-black/10 rounded p-1 px-2 text-sm text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                      <Icon
                                        name="go-down"
                                        color="currentColor"
                                        size={10}
                                      />
                                      DM me for details
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-primary rounded-md">
                                <div className="flex flex-col">
                                  <div className="rounded-t-md py-5">
                                    <p className="text-4xl font-semibold text-white text-center">
                                      Beach House 8
                                    </p>
                                    <p className="text-white text-center text-xl">
                                      Take a social tour of
                                    </p>
                                  </div>
                                  <div className="overflow-hidden">
                                    <Image
                                      src="/images/social-post-2.png"
                                      width={300}
                                      height={300}
                                      alt=""
                                      className="w-full h-auto"
                                    />
                                  </div>
                                  <div className="p-5 py-3 flex gap-4 items-center flex-wrap">
                                    <div className="overflow-hidden w-16 shrink-0 -mt-16">
                                      <Image
                                        alt="Building Advisor"
                                        width={100}
                                        height={150}
                                        className="w-full rounded-md"
                                        src="/images/building-advisor.png"
                                      />
                                    </div>
                                    <div className="flex flex-wrap 2xl:flex-col gap-2 items-center 2xl:items-start">
                                      <div className="space-y-1">
                                        <h5 className="text-white font-medium text-sm leading-none">
                                          Jill Windsor
                                        </h5>

                                        <p className="  text-white text-xs">
                                          (305) 233 - 4345
                                        </p>
                                      </div>
                                      <div className="gap-1 flex flex-wrap">
                                        <Image
                                          src="/images/keyes-company-logo-white.svg"
                                          alt="Keys Company Logo"
                                          width={50}
                                          height={50}
                                          className="w-auto h-8 pb-1"
                                        />
                                        <button className="bg-black/10 rounded text-sm p-1 px-2 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                          <Icon
                                            name="go-down"
                                            color="currentColor"
                                            size={10}
                                          />
                                          DM me for details
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-primary rounded-md">
                                <div className="flex flex-col">
                                  <div className="rounded-t-md flex justify-between items-center p-5">
                                    <p className="text-2xl font-semibold text-white text-left">
                                      FOR
                                      <br />
                                      SALE
                                    </p>
                                    <p className="text-white text-right text-xl">
                                      Beach House 8
                                    </p>
                                  </div>
                                  <div className="overflow-hidden">
                                    <Image
                                      src="/images/social-post-3.png"
                                      width={300}
                                      height={300}
                                      alt=""
                                      className="w-full h-auto"
                                    />
                                  </div>
                                  <div className="p-5 py-3 flex gap-4 items-center flex-wrap">
                                    <div className="overflow-hidden w-16 shrink-0 -mt-16">
                                      <Image
                                        alt="Building Advisor"
                                        width={100}
                                        height={150}
                                        className="w-full rounded-md"
                                        src="/images/building-advisor.png"
                                      />
                                    </div>
                                    <div className="flex gap-2 items-center flex-wrap 2xl:flex-col 2xl:items-start">
                                      <div className="space-y-1">
                                        <h5 className="text-white font-medium text-sm leading-none">
                                          Jill Windsor
                                        </h5>

                                        <p className="  text-white text-xs">
                                          (305) 233 - 4345
                                        </p>
                                      </div>
                                      <div className="gap-1 flex flex-wrap">
                                        <Image
                                          src="/images/keyes-company-logo-white.svg"
                                          alt="Keys Company Logo"
                                          width={50}
                                          height={50}
                                          className="w-auto h-8 pb-1"
                                        />
                                        <button className="bg-black/10 rounded text-sm p-1 px-2 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                          <Icon
                                            name="go-down"
                                            color="currentColor"
                                            size={10}
                                          />
                                          DM me for details
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-3 pt-5">
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Download
                              </button>
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Customize
                              </button>
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Product 2 */}
                    <div className="flex flex-col">
                      <div className="flex gap-2 sm:gap-5 xl:gap-10">
                        <div className="w-10 h-10 ring-4 ring-white relative z-10 shrink-0 bg-primary text-white rounded-full flex justify-center items-center">
                          <Icon
                            name="user-fill"
                            color="currentColor"
                            size={20}
                          />
                        </div>
                        <div className="flex flex-wrap xl:flex-nowrap w-full gap-5">
                          <div className="flex">
                            <div className="max-w-md">
                              <h2 className=" font-inter text-black/90 font-semibold">
                                Tina Sennerman
                              </h2>
                              <p className="text-black/50 text-xl font-inter">
                                <b>New Signup for Activity Alert </b> 4d ago
                              </p>
                              <p className="text-lg font-inter text-black/90 pt-3">
                                Please send me alerts of building real estate
                                activity
                              </p>
                            </div>
                          </div>

                          <div className="border border-primary rounded-md flex flex-col max-w-2xl w-full">
                            <div className="bg-primary rounded-md py-2 px-4">
                              <h4 className="text-white/50 uppercase font-bold font-montserrat">
                                NEw alert signup
                              </h4>
                            </div>
                            <div className="flex flex-wrap justify-between 2xl:grid 2xl:grid-cols-2 p-5">
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    name
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    Tina Sennerman
                                  </p>
                                </div>
                                <Link
                                  href="#"
                                  className="underline text-sm text-black/60 font-medium"
                                >
                                  View Inquiry
                                </Link>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Tel
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    (954) 323-2600
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Email
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat truncate max-w-48 xl:max-w-full">
                                    tina.sennerman@yahoo.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-10 pt-10">
                        <div className="flex gap-2 sm:gap-5 w-full">
                          <div className="w-10 h-10  ring-4 ring-white relative z-10 shrink-0 bg-gray-200 text-black/60 rounded-full flex justify-center items-center">
                            <Icon
                              name="alert-bell"
                              color="currentColor"
                              size={20}
                            />
                          </div>
                          <div className="flex flex-col flex-1">
                            <h2 className=" font-inter text-black/70 mt-2 ">
                              <b className="text-black/90 font-semibold">
                                New Activity Alert
                              </b>{" "}
                              generated for{" "}
                              <b className="text-black/90 font-semibold">
                                Beachhouse 8
                              </b>{" "}
                              2d ago
                            </h2>
                            <div className="pt-5 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                              <div className="bg-white rounded-md flex flex-col overflow-hidden border border-black/10">
                                <div className="flex flex-col flex-1 gap-1 justify-center items-center">
                                  <Image
                                    src={"/images/keyes-company-logo.svg"}
                                    width={100}
                                    height={100}
                                    alt=""
                                  />
                                  <p className="text-sm font-montserrat text-primary uppercase font-bold pt-5">
                                    JUST SOLD
                                  </p>
                                  <p className="text-xl text-black/70 text-center font-medium">
                                    Beach House 8
                                  </p>
                                  <p className="text-lg text-black/70 text-center font-medium">
                                    Unit 32 - 2bd 2ba
                                  </p>
                                  <p className="text-lg text-primary text-center font-medium">
                                    $1.8M
                                  </p>
                                </div>
                                <div className="overflow-hidden bg-primary rounded-b-md flex-1">
                                  <Image
                                    src="/images/social-post-1.png"
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full h-auto"
                                  />
                                </div>
                              </div>
                              <div className="bg-primary rounded-md">
                                <div className="flex flex-col">
                                  <div className="rounded-t-md p-3 2xl:p-7 flex justify-between">
                                    <p className="text-3xl font-semibold text-white text-left">
                                      JUST
                                      <br />
                                      SOLD
                                    </p>
                                    <div className="space-y-1">
                                      <p className="text-white text-xl">
                                        Unit 32
                                      </p>
                                      <p className="text-white text-3xl font-semibold">
                                        $1.8M
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bg-black/20 py-3 text-center text-white text-xl">
                                    Beach House 8
                                  </div>
                                </div>
                                <div className="overflow-hidden">
                                  <Image
                                    src="/images/social-post-1.png"
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div className="p-5 flex flex-wrap gap-5">
                                  <div className="overflow-hidden w-24 shrink-0 -mt-10">
                                    <Image
                                      alt="Building Advisor"
                                      width={200}
                                      height={300}
                                      className="w-full rounded-md"
                                      src="/images/building-advisor.png"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <Image
                                      src="/images/keyes-company-logo-white.svg"
                                      alt="Keys Company Logo"
                                      width={50}
                                      height={50}
                                      className="w-auto h-10 pb-1"
                                    />

                                    <h5 className="text-white font-medium text-lg leading-none">
                                      Jill Windsor
                                    </h5>

                                    <p className="font-medium pb-1 text-white">
                                      (305) 233 - 4345
                                    </p>
                                    <button className="bg-black/10 rounded p-1 px-3 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                      <Icon
                                        name="go-down"
                                        color="currentColor"
                                        size={10}
                                      />
                                      DM me for details
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-5">
                                <div className="bg-primary rounded-md flex-1">
                                  <div className="flex flex-col">
                                    <div className="rounded-t-md px-5 py-2 flex justify-between">
                                      <p className="text-3xl font-semibold text-white text-left">
                                        JUST
                                        <br />
                                        SOLD
                                      </p>
                                      <div className="space-y-1">
                                        <p className="text-white text-xl">
                                          Unit 32
                                        </p>
                                        <p className="text-white text-3xl font-semibold">
                                          $1.8M
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bg-black/20 py-1 text-center text-white text-xl">
                                      Beach House 8
                                    </div>
                                    <div className="overflow-hidden">
                                      <Image
                                        src="/images/social-post-4.png"
                                        width={300}
                                        height={300}
                                        alt=""
                                        className="w-full h-auto"
                                      />
                                    </div>
                                    <div className="p-5 py-3 flex gap-4 items-center flex-wrap">
                                      <div className="overflow-hidden w-16 shrink-0 -mt-10">
                                        <Image
                                          alt="Building Advisor"
                                          width={100}
                                          height={150}
                                          className="w-full rounded-md"
                                          src="/images/building-advisor.png"
                                        />
                                      </div>
                                      <div className="flex gap-2 flex-wrap items-center 2xl:flex 2xl:flex-col 2xl:items-start">
                                        <div className="space-y-1">
                                          <h5 className="text-white font-medium text-sm leading-none">
                                            Jill Windsor
                                          </h5>

                                          <p className="  text-white text-xs">
                                            (305) 233 - 4345
                                          </p>
                                        </div>
                                        <div className="space-y-1">
                                          <Image
                                            src="/images/keyes-company-logo-white.svg"
                                            alt="Keys Company Logo"
                                            width={50}
                                            height={50}
                                            className="w-auto h-8 pb-1"
                                          />
                                          <button className="bg-black/10 rounded text-sm p-1 px-2 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                            <Icon
                                              name="go-down"
                                              color="currentColor"
                                              size={10}
                                            />
                                            DM me for details
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white flex-1 border border-black/10 rounded-md space-y-3 p-4 2xl:p-8">
                                  <p className="text-xl text-black/70 text-left font-medium">
                                    Unit 32 was just sold in Beach House 8 for
                                    $1.8M{" "}
                                  </p>

                                  <p className="text-xl   text-black/70 text-left font-medium">
                                    Contact me for new listings and price drops.
                                  </p>

                                  <p className="text-xl  text-black/70 text-left font-medium">
                                    #condosales #beachhouse8 #keyes #condos
                                    #miami
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-3 pt-5">
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Download
                              </button>
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between gap-10 pt-10">
                        <div className="flex gap-2 sm:gap-5 w-full">
                          <div className="w-10 h-10  ring-4 ring-white relative z-10 shrink-0 bg-gray-200 text-black/60 rounded-full flex justify-center items-center">
                            <Icon name="notes" color="currentColor" size={20} />
                          </div>
                          <div className="flex flex-col flex-1">
                            <h2 className=" font-inter text-black/70 mt-2 ">
                              <b className="text-black/90 font-semibold">
                                New Article
                              </b>{" "}
                              generated for{" "}
                              <b className="text-black/90 font-semibold">
                                Beach House 8
                              </b>{" "}
                              2d ago
                            </h2>
                            <div className="pt-5 flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
                              <div className="bg-white rounded-md flex flex-col overflow-hidden border border-black/10">
                                <div className="overflow-hidden rounded-t-md  ">
                                  <Image
                                    src="/images/social-post-5.png"
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div className="flex flex-col flex-1 gap-1 p-4 2xl:p-8 ">
                                  <p className="text-sm font-montserrat text-primary uppercase font-bold ">
                                    branded article
                                  </p>
                                  <p className="text-2xl text-black/70 text-left font-medium">
                                    Understanding HOA Insurance
                                  </p>
                                  <p className="text-xl text-black/70 text-left font-medium">
                                    Everything you need to know about HOA
                                    insurance
                                  </p>
                                  <div className="flex gap-3 pt-5">
                                    <Image
                                      src={"/images/jill-avatar.png"}
                                      width={50}
                                      height={50}
                                      alt=""
                                      className="shrink-0"
                                    />
                                    <div className="">
                                      <p className="text-black/50 text-left font-medium">
                                        by
                                      </p>
                                      <p className="text-black/50 text-left font-medium">
                                        Jill Windsor
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-primary rounded-md">
                                <div className="flex flex-col">
                                  <div className="rounded-t-md p-5  ">
                                    <p className="uppercase text-white text-center">
                                      Condo Living
                                    </p>
                                    <p className="text-2xl font-semibold text-white text-center">
                                      Understanding HOA Insurance
                                    </p>
                                  </div>
                                </div>
                                <div className="bg-white rounded-md flex flex-col overflow-hidden border border-black/10 mx-2 2xl:w-9/12 2xl:mx-auto">
                                  <div className="overflow-hidden rounded-t-md flex-1">
                                    <Image
                                      src="/images/social-post-5.png"
                                      width={300}
                                      height={300}
                                      alt=""
                                      className="w-full h-auto"
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1 gap-1 p-4 ">
                                    <p className="text-sm font-montserrat text-primary uppercase font-bold ">
                                      branded article
                                    </p>
                                    <p className="text-xl text-black/70 text-left font-medium">
                                      Understanding HOA Insurance
                                    </p>
                                    <p className="text-black/70 text-left font-medium text-sm">
                                      Everything you need to know about HOA
                                      insurance
                                    </p>
                                    <div className="flex gap-3 items-center">
                                      <Image
                                        src={"/images/jill-avatar.png"}
                                        width={32}
                                        height={32}
                                        alt=""
                                        className="shrink-0 h-auto"
                                      />
                                      <div className="">
                                        <p className="text-black/50 text-left font-medium text-sm">
                                          by
                                        </p>
                                        <p className="text-black/50 text-left font-medium text-sm">
                                          Jill Windsor
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-5 justify-between mx-2 2xl:w-9/12 2xl:mx-auto pb-2">
                                  <Image
                                    src="/images/keyes-company-logo-white.svg"
                                    alt="Keys Company Logo"
                                    width={50}
                                    height={50}
                                    className="w-auto h-8 pb-1"
                                  />
                                  <button className="bg-black/10 rounded text-sm p-1 px-2 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                    <Icon
                                      name="go-down"
                                      color="currentColor"
                                      size={10}
                                    />
                                    DM me for details
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-5">
                                <div className="bg-primary rounded-md flex-1">
                                  <div className="flex flex-col py-5 space-y-2 2xl:space-y-5">
                                    <div className="rounded-t-md px-5 py-2  ">
                                      <p className="uppercase text-white text-center">
                                        Condo Living
                                      </p>
                                      <p className="text-2xl font-semibold text-white text-center">
                                        Understanding HOA Insurance
                                      </p>
                                    </div>

                                    <div className="bg-white rounded-md grid grid-cols-5 overflow-hidden border border-black/10 mx-2 2xl:w-9/12 2xl:mx-auto">
                                      <div className="overflow-hidden rounded-l-md flex-1 col-span-2">
                                        <Image
                                          src="/images/social-post-5.png"
                                          width={300}
                                          height={300}
                                          alt=""
                                          className="h-full w-auto"
                                        />
                                      </div>
                                      <div className="flex flex-col flex-1 gap-1 p-2 col-span-3">
                                        <p className="text-xs font-montserrat text-primary uppercase font-bold ">
                                          branded article
                                        </p>
                                        <p className="text-xs leading-snug text-black/70 text-left font-medium">
                                          Understanding HOA Insurance
                                        </p>
                                        <p className="text-black/70 text-left font-medium text-xs">
                                          Everything you need to know about HOA
                                          insurance
                                        </p>
                                        <div className="flex gap-3 items-center">
                                          <Image
                                            src={"/images/jill-avatar.png"}
                                            width={24}
                                            height={24}
                                            alt=""
                                            className="shrink-0 h-auto"
                                          />
                                          <div className="">
                                            <p className="text-black/50 text-xs text-left font-medium ">
                                              by
                                            </p>
                                            <p className="text-black/50 text-xs text-left font-medium">
                                              Jill Windsor
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pt-5 justify-between mx-2 2xl:w-9/12 2xl:mx-auto pb-2">
                                      <Image
                                        src="/images/keyes-company-logo-white.svg"
                                        alt="Keys Company Logo"
                                        width={50}
                                        height={50}
                                        className="w-auto h-8 pb-1"
                                      />
                                      <button className="bg-black/10 rounded text-sm p-1 px-2 text-white inline-flex items-center gap-1 ease-in-out duration-200 hover:bg-black/20">
                                        <Icon
                                          name="go-down"
                                          color="currentColor"
                                          size={10}
                                        />
                                        DM me for details
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white flex-1 border border-black/10 rounded-md  p-4 2xl:p-8 flex flex-col gap-10">
                                  <p className="text-xl text-black/70 text-center font-medium">
                                    How to use this Article to increase sales
                                  </p>

                                  <p className="text-xl text-black/70 text-left font-medium">
                                    Share your custom branded Article by posting
                                    to your social accounts
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-3 pt-5">
                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                View
                              </button>

                              <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Product 3 */}
                    <div className="flex flex-col">
                      <div className="flex gap-2 sm:gap-5 xl:gap-10">
                        <div className="w-10 h-10 ring-4 ring-white relative z-10 shrink-0 bg-primary text-white rounded-full flex justify-center items-center">
                          <Icon
                            name="user-fill"
                            color="currentColor"
                            size={20}
                          />
                        </div>
                        <div className="flex flex-wrap xl:flex-nowrap xl:justify-between w-full gap-5">
                          <div className="flex">
                            <div className="max-w-md">
                              <h2 className=" font-inter text-black/90 font-semibold">
                                George Martinez
                              </h2>
                              <p className="text-black/50 text-xl font-inter">
                                <b>New Inquiry</b> 4d ago
                              </p>
                              <p className="text-lg font-inter text-black/90 pt-3">
                                How much are the monthly condo dues and when can
                                I tour unit 18?
                              </p>
                            </div>
                          </div>

                          <div className="border border-primary rounded-md flex flex-col sm:max-w-2xl w-full max-w-60">
                            <div className="bg-primary rounded-md py-2 px-4">
                              <h4 className="text-white/50 uppercase font-bold font-montserrat">
                                building inquiry
                              </h4>
                            </div>
                            <div className="flex flex-wrap justify-between 2xl:grid 2xl:grid-cols-2 p-5">
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    name
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    George Martinez
                                  </p>
                                </div>
                                <Link
                                  href="#"
                                  className="underline text-sm text-black/60 font-medium"
                                >
                                  View Inquiry
                                </Link>
                              </div>
                              <div className="flex flex-col gap-3">
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Tel
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat">
                                    (954) 981-1770
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-black/60 uppercase leading-none font-montserrat font-semibold">
                                    Email
                                  </p>
                                  <p className="text-black/70 2xl:text-lg font-bold leading-none font-montserrat truncate max-w-48 xl:max-w-full">
                                    george78@gmail.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Load More Button */}
                    <div className="pb-10 flex justify-center items-center">
                      <button className="w-40 sm:w-60 bg-black/20 text-center py-4 px-5 rounded-md text-xl font-semibold ease-in-out duration-200 hover:bg-black/40">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
