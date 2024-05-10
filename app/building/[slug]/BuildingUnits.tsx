"use client";
import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import UnitCard from "@/components/ui/UnitCard";
import { FaRegListAlt } from "react-icons/fa";
import { formatNumberWithCommas } from "@/components/utils/utils";
const sortList = [
  "Most Popular",
  "Best Rating",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const forSales = [
  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    forSale: 1403,
    title: "Beach House 8",
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1778,
    bd: 2,
    ba: 2,
    price: 1625000,

    link: "/#",
  },
  {
    image: "thumb-2.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1211,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1808,
    bd: 3,
    ba: 2,
    price: 1795000,
    link: "/#",
  },
  {
    image: "thumb-3.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 2330,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 702,
    bd: 3,
    ba: 2,
    price: 2625000,
    link: "/#",
  },
  {
    image: "thumb-4.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1103,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 2550,
    bd: 3,
    ba: 3,
    price: 2925000,
    link: "/#",
  },

  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    forSale: 1403,
    title: "Beach House 8",
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1778,
    bd: 2,
    ba: 2,
    price: 1625000,

    link: "/#",
  },
  {
    image: "thumb-2.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1211,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1808,
    bd: 3,
    ba: 2,
    price: 1795000,
    link: "/#",
  },
  {
    image: "thumb-3.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 2330,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 702,
    bd: 3,
    ba: 2,
    price: 2625000,
    link: "/#",
  },
  {
    image: "thumb-4.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1103,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 2550,
    bd: 3,
    ba: 3,
    price: 2925000,
    link: "/#",
  },
];
const forRent = [
  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    forSale: 1403,
    title: "Beach House 8",
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1778,
    bd: 2,
    ba: 2,
    price: 1625000,

    link: "/#",
  },
  {
    image: "thumb-2.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1211,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1808,
    bd: 3,
    ba: 2,
    price: 1795000,
    link: "/#",
  },
  {
    image: "thumb-3.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 2330,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 702,
    bd: 3,
    ba: 2,
    price: 2625000,
    link: "/#",
  },
  {
    image: "thumb-4.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1103,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 2550,
    bd: 3,
    ba: 3,
    price: 2925000,
    link: "/#",
  },

  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    forSale: 1403,
    title: "Beach House 8",
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1778,
    bd: 2,
    ba: 2,
    price: 1625000,

    link: "/#",
  },
  {
    image: "thumb-2.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    forSale: 1211,
    address: "3651 Collins Avenue Miami Beach, FL 33140",
    area: 1808,
    bd: 3,
    ba: 2,
    price: 1795000,
    link: "/#",
  },
];

export default function BuildingUnits(params: { bldg: any }) {
  const { bldg } = params;
  const [tab, setTab] = React.useState(1);
  const [listView, setListView] = React.useState(true);
  const [sortdd, setSortdd] = React.useState(false);
  const [isClient, setIsClient] = useState(false);
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

  // console.log(bldg);
  // console.log(bldg?.media);
  return (
    <>
      <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 pb-5 gap-5 flex flex-col ">
        <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 text-center ">
          Building Real Estate Activity
        </h4>

        <div className="relative flex md:justify-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-1 justify-center font-montserrat">
            <button
              className={`text-lg font-medium p-2 inline-flex gap-2 border-b-2 ${
                tab == 1
                  ? "text-primary border-primary"
                  : "border-transparent text-black/75"
              }`}
              onClick={() => setTab(1)}
            >
              For Sale{" "}
              <span
                className={`px-3 py-1 leading-none rounded-full text-sm ${
                  tab == 1 ? "bg-primary text-white" : "bg-black/5"
                }`}
              >
                8
              </span>
            </button>
            <button
              className={`text-lg font-medium p-2 inline-flex gap-2 border-b-2 ${
                tab == 2
                  ? "text-primary border-primary"
                  : "border-transparent text-black/75"
              }`}
              onClick={() => setTab(2)}
            >
              For Rent{" "}
              <span
                className={`px-3 py-1 leading-none rounded-full text-sm ${
                  tab == 2 ? "bg-primary text-white" : "bg-black/5"
                }`}
              >
                6
              </span>
            </button>
            <button
              className={`text-lg font-medium p-2 inline-flex gap-2 border-b-2 ${
                tab == 3
                  ? "text-primary border-primary"
                  : "border-transparent text-black/75"
              }`}
              onClick={() => setTab(3)}
            >
              Recent Activity
            </button>
          </div>
          <div className="md:absolute md:right-0 flex gap-4 inset-y-0 items-center">
            <div className="relative " ref={dropdownRef}>
              <button
                onClick={() => setSortdd(!sortdd)}
                className="flex gap-2 items-center font-montserrat text-black/75 font-semibold"
              >
                Sort{" "}
                <Icon
                  name={`angle-${sortdd ? "up" : "down"}`}
                  size={15}
                  color="#9CA3AF"
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
              className="p-0.5"
            >
              {listView ? (
                <Icon name="grid" size={20} color="#9CA3AF" />
              ) : (
                <FaRegListAlt size={20} color="#9CA3AF" />
              )}
            </button>
          </div>
        </div>
      </div>

      {tab == 1 ? (
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-4">
            {forSales.map((item, index) => {
              return (
                <UnitCard
                  key={index}
                  image={`/images/${item.image}`}
                  alt={item.alt}
                  title={item.title}
                  address={item.address}
                  area={item.area}
                  bd={item.bd}
                  ba={item.ba}
                  price={item.price}
                  link={item.link}
                  forSale={item.forSale}
                />
              );
            })}
          </div>
          <div className="flex justify-center py-5">
            <button className="bg-white hover:bg-primary hover:text-white ease-in-out duration-200 rounded-full py-1 px-5 w-32 whitespace-nowrap font-semibold text-black/60 font-montserrat ">
              View More
            </button>
          </div>
        </div>
      ) : tab == 2 ? (
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-4">
            {forRent.map((item, index) => {
              return (
                <UnitCard
                  key={index}
                  image={`/images/${item.image}`}
                  alt={item.alt}
                  title={item.title}
                  address={item.address}
                  area={item.area}
                  bd={item.bd}
                  ba={item.ba}
                  price={item.price}
                  link={item.link}
                  forSale={item.forSale}
                />
              );
            })}
          </div>
          <div className="flex justify-center py-5">
            <button className="bg-white hover:bg-primary hover:text-white ease-in-out duration-200 rounded-full py-1 px-5 w-32 whitespace-nowrap font-semibold text-black/60 font-montserrat ">
              View More
            </button>
          </div>
        </div>
      ) : (
        <div className="h-80 shadow-1 w-full rounded bg-white p-10 flex justify-center items-center text-xl text-black/60">
          Recent Activity
        </div>
      )}
    </>
  );
}
