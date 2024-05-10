"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

const topCities = [
  {
    label: "Miami, FL",
    link: "#",
  },
  {
    label: "Fort Lauderdale, FL",
    link: "#",
  },
  {
    label: "Aventura, FL",
    link: "#",
  },
  {
    label: "Sunny Isles, FL",
    link: "#",
  },
  {
    label: "Miami Beach, FL",
    link: "#",
  },
];

const topBuildings = [
  {
    label: "Ocean House",
    link: "#",
  },
  {
    label: "Aston Martin Residences",
    link: "#",
  },
  {
    label: "Apogee",
    link: "#",
  },
  {
    label: "Jade Signature",
    link: "#",
  },
  {
    label: "Brickell Flatiron",
    link: "#",
  },
];

const resources = [
  {
    label: "Add to Watchlist",
    link: "#",
  },
  {
    label: "View Condo Articles",
    link: "#",
  },
  {
    label: "Add to Favorites",
    link: "#",
  },
  {
    label: "Building Intelligence",
    link: "#",
  },
  {
    label: "Building Real Estate Activity",
    link: "#",
  },
];

function Footer() {
  return (
    <>
      <footer className="mt-5 mx-auto space-y-5 w-full ">
        <div className="bg-primary">
          <div className="max-w-screen-wrap mx-auto px-5">
            <div className="flex flex-col rounded-b-md pt-16">
              <div className="flex flex-col gap-4 2xl:grid 2xl:grid-cols-12 items-start mb-4 xl:mb-24 w-full">
                <div className="flex flex-col 2xl:col-span-2 ">
                  <div className="flex  gap-5 items-center w-full  ">
                    <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase shrink-0">
                      <Link href="/">
                        <Image
                          src="/images/keyes-company-logo-white.svg"
                          alt="Keys Company Logo"
                          width={150}
                          height={150}
                          className="w-auto h-auto"
                        />
                      </Link>
                    </div>

                    <hr className=" bg-white border border-white h-16 border-r-0 block" />
                    <div className="text-lg font-semibold font-montserrat text-white/60 uppercase">
                      Jill
                      <br />
                      Windsor
                    </div>
                  </div>
                </div>
                <div className="2xl:col-span-10 flex flex-col sm:grid lg:grid-cols-8 md:grid-cols-3  sm:grid-cols-3 gap-4 gap-y-10">
                  <div className="flex flex-col lg:col-span-2  ">
                    <div className="w-full flex xl:justify-center">
                      <div className="space-y-2">
                        <h6 className="uppercase text-lg font-semibold text-white">
                          top cities
                        </h6>

                        <ul className="space-y-3">
                          {topCities.map((item, index) => {
                            return (
                              <li key={index} className="truncate">
                                <Link
                                  href={item.link}
                                  className="text-white truncate text-lg leading-snug hover:opacity-80 ease-in-out duration-200"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:col-span-2 ">
                    <div className="w-full flex xl:justify-center">
                      <div className="space-y-2">
                        <h6 className="uppercase text-lg font-semibold text-white">
                          top buildings
                        </h6>
                        <ul className="space-y-3">
                          {topBuildings.map((item, index) => {
                            return (
                              <li key={index} className="truncate">
                                <Link
                                  href={item.link}
                                  className="text-white truncate text-lg leading-snug hover:opacity-80 ease-in-out duration-200"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:col-span-2 ">
                    <div className="w-full flex xl:justify-center">
                      <div className="space-y-2">
                        <h6 className="uppercase text-lg font-semibold text-white  ">
                          resources
                        </h6>

                        <ul className="space-y-3">
                          {resources.map((item, index) => {
                            return (
                              <li key={index} className="truncate">
                                <Link
                                  href={item.link}
                                  className="text-white truncate text-lg leading-snug hover:opacity-80 ease-in-out duration-200"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:col-span-2 justify-end xl:justify-start">
                    <div className="flex justify-end">
                      <div className="space-y-5">
                        <div className="flex grow items-center flex-wrap gap-2 w-full rounded-lg xl:flex-nowrap justify-between">
                          <div className="space-y-1">
                            <h6 className="uppercase text-lg font-semibold text-white  ">
                              Call or Text
                            </h6>
                            <h5 className="text-xl font-normal whitespace-nowrap leading-7 text-white tracking-wide">
                              (954) 555-4545
                            </h5>
                          </div>
                          <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase">
                            <button className="2xl:px-6 px-3 text-lg bg-white pt-3 pb-2 uppercase rounded-md hover:opacity-85 ease-in-out duration-200">
                              Contact
                            </button>
                          </div>
                        </div>

                        <hr className="w-full border-2 border-black/20" />


                        <SocialMedia gap="" size="" width="" iconSize="" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-2">
            <div className="max-w-screen-wrap mx-auto px-5">
              <div className="lg:flex justify-between items-center w-full py-4">
                <div className="text-primary-3 text-base font-normal uppercase font-montserrat">
                  &copy; Copyright <span> {new Date().getFullYear()} </span> all
                  rights reserved the{" "}
                  <Link
                    href="#"
                    className="uppercase text-primary-3 hover:text-white ease-in-out duration-200"
                  >
                    keyes company inc.
                  </Link>
                </div>

                <div className=" text-base font-normal ">
                  <ul className="space-x-6 flex font-montserrat">
                    <li>
                      <Link
                        href="#"
                        className="uppercase text-primary-3 hover:text-white ease-in-out duration-200"
                      >
                        terms & conditions
                      </Link>{" "}
                    </li>{" "}
                    <li>
                      <Link
                        href="#"
                        className="uppercase text-primary-3 hover:text-white ease-in-out duration-200"
                      >
                        privacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
