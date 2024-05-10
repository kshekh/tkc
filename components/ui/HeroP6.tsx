"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import SearchLocationBar from "./SearchLocationBar";

const PopularNeighborhoods = [
  {
    label: "Brickell",
    link: "#",
  },
  {
    label: "Miami Beach",
    link: "#",
  },
  {
    label: "Coconut Grove",
    link: "#",
  },
  {
    label: "Aventura",
    link: "#",
  },
];

function Hero() {
  return (
    <div className="flex flex-col py-5">
      <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
        <div className="rounded-md shadow-md bg-primary p-5 xl:p-10  items-center relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src={"/images/heroP6.png"}
              alt="Hero"
              width={1300}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="justify-center items-center flex flex-col lg:gap-5 gap-3 relative z-10 min-h-72 lg:min-h-96">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-white text-center font-semibold">
              Let’s find your perfect condo
            </h1>

            <div className="max-w-3xl w-full mx-auto">
              <SearchLocationBar context="ecom-home" />
            </div>
            <div className="lg:space-y-4 space-y-2 lg:pt-4 max-w-3xl mx-auto w-full">
              <h4 className="font-montserrat text-sm text-[#ECADCB] uppercase font-medium">
                Popular Neighborhoods
              </h4>
              <div className="flex flex-wrap gap-2">
                {PopularNeighborhoods.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="rounded-md whitespace-nowrap flex-1 bg-primary-4 text-left px-5 py-3 font-montserrat text-white font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between rounded-md shadow-md bg-primary px-5 xl:px-10 flex flex-col lg:flex-row items-center pt-5 gap-5">
          <p className="text-white text-center lg:text-left text-xl lg:text-2xl xl:text-3xl max-w-2xl">
            Activate any building to receive branded marketing content delivered
            to your inbox for easy sharing
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-5">
            <div className="bg-white rounded-t-md p-5 pb-0">
              <h2 className="text-primary text-sm font-bold font-montserrat text-center ">
                NEW LISTING
              </h2>
              <p className="text-lg font-semibold text-black/80 text-center font-montserrat ">
                Brickell Tower
              </p>
              <p className="text-primary text-sm font-bold font-montserrat text-center uppercase whitespace-nowrap ">
                2bd 2ba $380,000
              </p>
              <Image
                src="/images/new-listing.png"
                alt="new listing"
                width={250}
                height={50}
                className="mt-2"
              />
            </div>

            <SocialMedia gap="" size="" width="" iconSize="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
