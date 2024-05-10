"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import SearchLocationBar from "./SearchLocationBar";
const PopularNeighborhoods = [
  {
    label:'Brickell',
    link:'#'
  }, 
  {
    label:'Miami Beach',
    link:'#'
  }, 
  {
    label:'Coconut Grove',
    link:'#'
  }, 
  {
    label:'Aventura',
    link:'#'
  },
]

function Hero() {
  return (
    <div className="flex flex-col py-5">
      <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
        <div className="justify-start flex-col md:flex-row gap-10 xl:gap-20 rounded-md shadow-md bg-primary p-5 xl:p-10 min-h-96 flex items-center">
        <div className="overflow-hidden shrink-0 w-72 lg:w-96">
                <Image
                  alt="Building Advisor"
                  width={400}
                  height={600}
                  className="w-full rounded-md"
                  src="/images/building-advisor-2.png"
                />
              </div>
          <div className="max-w-3xl flex-1 lg:space-y-5 space-y-3">
            <h1  className="text-3xl lg:text-4xl xl:text-5xl text-white text-left font-semibold">
            Let’s find your perfect building
            </h1>
            <p className="text-xl text-left text-white ">
            Hi, I’m Jill. Welcome to my Condo Portfolio.  I’m a condo building advisor and would love to help you find your next home or investment property.
            </p>
            <div className="max-w-3xl ">
              <SearchLocationBar context="ecom-home" />
            </div>
            <div className="lg:space-y-4 space-y-2 lg:pt-4">
              <h4 className="font-montserrat text-sm text-white/50 uppercase font-medium">Popular Neighborhoods</h4>
              <div className="flex flex-wrap gap-2">
                {PopularNeighborhoods.map((item, index)=>(
                <Link href={item.link} key={index} className="rounded-md whitespace-nowrap flex-1 bg-primary-4 text-left px-5 py-3 font-montserrat text-white font-medium">{item.label}</Link>
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
