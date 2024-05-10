"use client";
import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import { formatNumberWithCommas } from "@/components/utils/utils";

const salesChart = [
  {
    title: "Avg List Price",
    chart: "chart.svg",
    value: 1289167,
  },
  {
    title: "Avg List Price / Sq Ft",
    chart: "chart.svg",
    value: 936,
  },
  {
    title: "Avg Days on Market",
    chart: "chart.svg",
    value: 51,
  },
  {
    title: "Avg Sale Price",
    chart: "chart.svg",
    value: 936000,
  },
  {
    title: "Avg Sale Price / Sq Ft",
    chart: "chart.svg",
    value: 866,
  },
];

export default function BuildingIntel(params: { bldg: any }) {
  const { bldg } = params;
  const [tab, setTab] = React.useState(1);
  const [tabIntelligence, setTabIntelligence] = React.useState(1);
  const [years, setYears] = React.useState(2);
  // console.log(bldg);
  // console.log(bldg?.media);
  return (
    <>
      <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-wrap">
        <div className="flex gap-5 flex-col lg:grid lg:grid-cols-12 flex-1">
          <div className="space-y-5 flex flex-col col-span-2 xl:col-span-3">
            <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 text-center ">
              Building <br className="hidden lg:block" /> Intelligence
            </h4>
            <div className="space-y-1 text-center xl:pt-10">
              <h5 className="text-5xl leading-none font-semibold text-primary">
                387
              </h5>
              <p className="text-xl leading-none text-black/80 font-medium">
                Total Condos
              </p>
            </div>

            <div className="bg-black/5 grid grid-cols-2 xl:grid-cols-2 gap-2 p-5 rounded">
              <div className="space-y-2 text-center">
                <h3 className="text-3xl leading-none font-semibold text-primary">
                  12
                </h3>
                <p className="text-xl leading-none text-black/80 font-medium">
                  For Sale
                </p>
                <p className="text-base leading-none text-black/60 ">
                  3% of building
                </p>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-3xl leading-none font-semibold text-primary">
                  9
                </h3>
                <p className="text-xl leading-none text-black/80 font-medium">
                  For Rent
                </p>
                <p className="text-base leading-none text-black/60 ">
                  2% of building
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-10 xl:col-span-9 space-y-10">
            <div className="flex justify-between flex-wrap gap-4">
              <div className="gap-2 flex lg:pl-10">
                <button
                  onClick={() => setTabIntelligence(1)}
                  className={`w-20 ${
                    tabIntelligence == 1
                      ? "bg-black/5 text-black/75"
                      : "text-black/60"
                  } rounded py-1 font-semibold font-montserrat`}
                >
                  Sales
                </button>
                <button
                  onClick={() => setTabIntelligence(2)}
                  className={`w-20 ${
                    tabIntelligence == 2
                      ? "bg-black/5 text-black/75"
                      : "text-black/60"
                  } rounded py-1 font-semibold font-montserrat`}
                >
                  Rentals
                </button>
              </div>
              <div className="gap-2 flex">
                <button
                  onClick={() => setYears(1)}
                  className={`w-20 ${
                    years == 1 ? "bg-black/5 text-black/75" : "text-black/60"
                  } rounded py-1 font-semibold font-montserrat`}
                >
                  1 year
                </button>
                <button
                  onClick={() => setYears(2)}
                  className={`w-20 ${
                    years == 2 ? "bg-black/5 text-black/75" : "text-black/60"
                  } rounded py-1 font-semibold font-montserrat`}
                >
                  3 years
                </button>
                <button
                  onClick={() => setYears(3)}
                  className={`w-20 ${
                    years == 3 ? "bg-black/5 text-black/75" : "text-black/60"
                  } rounded py-1 font-semibold font-montserrat`}
                >
                  5 years
                </button>
              </div>
            </div>
            <div className="flex flex-col xs:grid xs:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5 flex-1">
              {salesChart.map((item, i) => (
                <div key={i} className="space-y-1 text-center">
                  <h3 className="text-xl text-black/75 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-3xl uppercase text-primary font-medium truncate text-center">
                    {item.title !== "Avg Days on Market" && "$"}
                    {formatNumberWithCommas(item.value)}
                  </p>
                  <Image
                    src={`/images/${item.chart}`}
                    alt="chart"
                    width={200}
                    height={50}
                    className="mx-auto"
                  />
                </div>
              ))}
              <div className="space-y-1 text-center">
                <h3 className="text-xl text-black/75 font-medium">
                  12 Month Sales
                </h3>
                <p className="text-3xl uppercase text-primary font-medium truncate flex gap-2 items-center justify-center text-center">
                  <span>5</span>
                  <hr className="h-6 border border-black/10" />
                  <span>$10m</span>
                </p>
                <Image
                  src={`/images/chart.svg`}
                  alt="chart"
                  width={200}
                  height={50}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
