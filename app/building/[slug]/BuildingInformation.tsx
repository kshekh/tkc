"use client";
import { getDataBuilding } from "@/components/lib/helpers";
import React, { useState, useEffect, useRef } from "react";
import HeaderDetailPage from "@/components/ui/HeaderPage";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import UnitCard from "@/components/ui/UnitCard";

import SocialMedia from "@/components/ui/SocialMedia";
import { FaRegListAlt } from "react-icons/fa";
import { formatNumberWithCommas } from "@/components/utils/utils";
import { list1, list2 } from "./fakedata.js";

export default function BuildingInformation(params: { bldg: any }) {
  const { bldg } = params;
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  if (!bldg?.listing_title) return null;

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-1">
      <div className="flex flex-col md:col-span-6 lg:col-span-7 xl:col-span-8 2xl:col-span-9 gap-1">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 xl:gap-10 2xl:gap-20 shadow-1 w-full rounded bg-white p-5 lg:p-10">
          <div className="space-y-4 lg:col-span-5 xl:col-span-4 flex flex-col ">
            <div className="space-y-4 xl:flex-1">
              <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                Building Information
              </h2>
              <p className="text-4xl font-bold text-black/70">
                {bldg?.listing_title}
              </p>
            </div>
            <div className="relative overflow-hidden max-w-full ">
              <Image
                src={"/images/map.png"}
                alt="map"
                width={200}
                height={60}
                className="w-80 max-w-full h-auto"
              />
              <button className="absolute inset-0 p-5 uppercase flex items-center justify-start text-left leading-snug text-white drop-shadow-md font-semibold">
                view
                <br />
                on map
              </button>
            </div>
          </div>

          <div className="flex justify-start flex-wrap gap-2 lg:col-span-7 xl:col-span-8">
            <div className="space-y-5 w-1/2">
              <div className="space-y-2">
                <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  VIEWS
                </h5>
                {bldg.extended_details?.view_types.map(
                  (item: string, index: number) => (
                    <p
                      key={index}
                      className={`text-xl text-black/85  ${"w-36 leading-loose"}`}
                    >
                      {item}
                    </p>
                  )
                )}
              </div>

              <div className="space-y-2">
                <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  FLOORS
                </h5>
                <p className={`text-xl text-black/85  w-auto leading-relaxed`}>
                  {bldg?.location?.total_floors_in_building}
                </p>
              </div>
            </div>
            <div className="space-y-5 max-w-full ">
              <div className="space-y-2">
                <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  NEIGHBORHOOD
                </h5>
                <p className={`text-xl text-black/85 max-w-80 w-auto  `}>
                  {bldg.location?.neighborhood_name}
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  DEVELOPER
                </h5>
                <p className={`text-xl text-black/85 max-w-80 w-auto  `}>
                  {bldg.builder?.name}
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  ARCHITECT
                </h5>
                <p className={`text-xl text-black/85 max-w-80 w-auto  `}>
                  {bldg?.extended_details?.architect}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-between shadow-1 w-full rounded bg-white p-5 lg:p-10">
          <div
            className={`space-y-5 relative overflow-hidden ${
              showContent ? "h-auto pb-12" : "h-96 pb-0"
            }`}
          >
            <h4 className="text-primary text-3xl 2xl:text-5xl font-normal  ">
              Building Description
            </h4>
            <p className="text-xl text-black/75 font-normal">
              {bldg?.location?.building_description}
            </p>

            <div
              className={`absolute inset-x-0 bottom-0 pb-1.5 flex justify-center before:absolute before:inset-x-0 before:bottom-0 before:h-40 before:bg-gradient-to-t before:from-[#fff] before:to-transparent ${
                showContent && "before:hidden"
              }`}
            >
              <button
                onClick={toggleContent}
                className="w-36 h-10 bg-white hover:bg-primary hover:text-white ease-in-out duration-200 shadow-2 border border-black/20 text-black/40 uppercase font-montserrat font-bold relative z-10 rounded py-1 px-3"
              >
                {showContent ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-3 ">
        <div className="flex flex-col xs:flex-row w-full rounded-t bg-primary p-5 gap-4 items-center">
          <div className="overflow-hidden w-36 shrink-0">
            <Image
              alt="Building Advisor"
              width={200}
              height={300}
              className="w-full rounded-md"
              src="/images/building-advisor.png"
            />
          </div>

          <div className="relative space-y-2 flex-1">
            <p className="text-white text-sm uppercase">Building advisor</p>
            <h5 className="text-white font-semibold text-2xl leading-none">
              Jill <br /> Windsor
            </h5>
            <hr className="opacity-50" />
            <p className="text-xl font-medium pb-1 text-white">
              (954) 555-4545
            </p>
            <SocialMedia
              size={"lg:w-6 lg:h-6"}
              width={"lg:min-w-xs"}
              gap={"gap-0.5"}
              iconSize={"lg:w-4 lg:h-4"}
            />
          </div>
        </div>

        <div className="flex w-full bg-white rounded-b py-6 pt-3 px-6 flex-1">
          <div className="w-full space-y-4">
            <p className="border-2 border-primary text-black/75 font-montserrat rounded-md font-semibold p-5 w-full min-h-32">
              I have a quick question about Beach House 8
            </p>

            <form
              action="#"
              method="POST"
              className="font-montserrat font-semibold space-y-4"
            >
              <div className="space-y-1 w-full ">
                <label className="block text-xs text-black/50  ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full h-10 rounded-sm border-black/30 focus:border-primary focus:outline-none border px-3"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs text-black/50  ">
                  Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full h-10 rounded-sm border-black/30 focus:border-primary focus:outline-none border px-3"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs text-black/50  ">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full h-10 rounded border border-black/30 focus:border-primary focus:outline-none px-3"
                />
              </div>

              <div className="mb-3">
                <label className="flex justify-between gap-2 items-start">
                  <input
                    className="w-4 h-4 accent-primary bg-blue-500 rounded shrink-0 "
                    type="checkbox"
                  />
                  <span className="text-xs text-black/50">
                    By clicking above you agree to be contacted by me or my
                    brokerage company. Consent is not a requirement or condition
                    to receive real estate brokerage services
                  </span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-primary mx-auto w-full text-white text-2xl px-8 py-4 rounded-md hover:bg-primary-2 ease-in-out duration-300"
                >
                  Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
