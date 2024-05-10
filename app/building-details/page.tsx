"use client";
import React, { useState, useEffect, useRef } from "react";
import HeaderDetailPage from "@/components/ui/HeaderPage";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import UnitCard from "@/components/ui/UnitCard";

import SearchRow from "@/components/ui/SearchRow";
import ProductCard from "@/components/ui/BuildingCard";
import NearByCities from "@/components/ui/NearByCities";
import Footer from "@/components/ui/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
import { FaRegListAlt } from "react-icons/fa";
import { formatNumberWithCommas } from "@/components/utils/utils";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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

const buildingInfo = [
  {
    name: "views",
    value: "Ocean Views Miami Beach Views City Views",
  },
  {
    name: "Floors",
    value: 10,
  },
  {
    name: "neighborhood",
    value: "Mid-Beach",
  },
  {
    name: "developer",
    value: "Ugo Colombo / Valerio Morabito of Morabito Properties",
  },
  {
    name: "architect",
    value: "Mid-Beach",
  },
];

const BuildingAmenities = [
  "24-hour Security",
  "Concierge Services",
  "Elevator",
  "Gated Entry",
  "Hurricane Impact Windows",
  "Pet-Friendly",
  "State-of-Art Fitness Center",
  "Two Parking Spaces / Resdient",
  "Yoga Terrace",
  "Beautifully Appointed Lobby",
  "Direct Beach Access",
  "Hot Tub",
  "Outdoor Lounge",
  "Poolside Cabanas",
  "Heated Swimming Pool",
  "Valet Parking",
  "Biking / Jogging Path",
];

const BuildingReviewsBtn = [
  { label: "Write a review", url: "/#" },
  { label: "View all", url: "/#" },
];

const progressBar = [
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
];

const sortList = [
  "Most Popular",
  "Best Rating",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const floorplans = [
  {
    map: "home-plan.png",
    name: "BH3",
    bd: 2,
    ba: 2,
    area: 2250,
    terraces: "Private Terraces",
  },
  {
    map: "home-plan.png",
    name: "BH4",
    bd: 3,
    ba: 2,
    area: 2850,
    terraces: "Private Terraces",
  },
  {
    map: "home-plan.png",
    name: "BH5",
    bd: 2,
    ba: 2,
    area: 2250,
    terraces: "Private Terraces",
  },
  {
    map: "home-plan.png",
    name: "BH6",
    bd: 3,
    ba: 3,
    area: 3200,
    terraces: "Private Terraces",
  },
  {
    map: "home-plan.png",
    name: "BH7",
    bd: 3,
    ba: 3.5,
    area: 3288,
    terraces: "Private Terraces",
  },
  {
    map: "home-plan.png",
    name: "BH7",
    bd: 4,
    ba: 3,
    area: 3800,
    terraces: "Private Terraces",
  },
];

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

const buldibngSocila = [
  "Let me introduce you to a great building",
  "New Unit for Sale in the building",
  "5 Units for Sale Right now",
  "Just Sold In the building",
];

const CondoLiving = [
  {
    thumb: "living-1.png",
    title: "The Future of Condo Living",
    descrp: "Read everything you need to know about your new condo life.",
  },
  {
    thumb: "living-2.png",
    title: "Buying a Condo? ",
    descrp: "Here’s what you need to know before you start your search.",
  },
  {
    thumb: "living-3.png",
    title: "Understand HOA Insurance",
    descrp: "Everything you need to understand your HOA insurance",
  },
  {
    thumb: "living-4.png",
    title: "Benefits of Condo Living",
    descrp: "The benefits of condo living - from amenities to community",
  },
];

const NearbyBuildings = [
  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    describ: "3651 Collins Avenue Miami Beach, FL 33140",
    unit: 8,
    price: 4.8,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-2.png",
    alt: "Aston Martin Resid",
    title: "Aston Martin Resid Aston Martin Resid Aston Martin Resid",
    describ: "300 Biscayne Boulevard Way Miami, FL 33131",
    unit: 391,
    price: 15.5,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-3.png",
    alt: "Ocean House",
    title: "Ocean House",
    describ: "125 Ocean Drvie Miami Beach, FL 33139",
    unit: 28,
    price: 1.9,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-4.png",
    alt: "Oceanside Fisher Isl",
    title: "Oceanside Fisher Isl",
    describ: "7400-8061 Fisher Island Drive Miami Beach, FL 33109",
    unit: 134,
    price: 6.1,
    priceDigit: "M",
    button: false,
  },
];

function DetailsPg() {
  const slicedData = buildingInfo.slice(0, 5);
  const list1 = slicedData.slice(0, 2);
  const list2 = slicedData.slice(2, 5);
  const BuildingData = BuildingAmenities.slice(0, 17);
  const Buildinglist1 = BuildingData.slice(0, 8);
  const Buildinglist2 = BuildingData.slice(8, 16);
  const Buildinglist3 = BuildingData.slice(16, 17);
  const [showContent, setShowContent] = React.useState(false);
  const [tab, setTab] = React.useState(1);
  const [tabIntelligence, setTabIntelligence] = React.useState(1);
  const [years, setYears] = React.useState(2);
  const [listView, setListView] = React.useState(true);
  const [sortdd, setSortdd] = React.useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return (
        '<span class="!w-3 !h-1 !rounded-none ' +
        className +
        '"><span class="opacity-0 leading-none hidden">' +
        (index + 1) +
        "</span></span>"
      );
    },
  };

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

  return (
    <>
      <HeaderDetailPage />
      <section className="relative">
        <div className="relative before:absolute before:inset-x-0 before:bottom-0 before:h-40 before:bg-gradient-to-t before:from-[#f2f2f2] before:to-transparent">
          <Image className="w-full" src="/images/details-banner.png" width={1200} height={1200} />
        </div>
        <div className="max-w-screen-wrap px-5 mx-auto w-full relative z-10">
          <div className="flex flex-wrap justify-between -mt-16 gap-1">
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1">
                Total units
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <h5 className="font-semibold text-4xl text-center text-black/75">
                  8
                </h5>
              </div>
            </div>

            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1 ">
                for sale
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <h5 className="font-semibold text-4xl text-center text-black/75">
                  1
                </h5>
              </div>
            </div>
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1 ">
                for rent
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <button className="bg-primary text-white rounded font-medium font-montserrat flex mx-auto py-1 px-5 uppercase text-sm">
                  Inquire
                </button>
              </div>
            </div>
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1">
                starting from
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <h5 className="font-semibold text-4xl text-center text-black/75">
                  $8.4M
                </h5>
              </div>
            </div>
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1 ">
                bed / bath
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <h5 className="font-semibold text-4xl text-center text-black/75 whitespace-nowrap">
                  1/1.5 - 4/3.5
                </h5>
              </div>
            </div>
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1 ">
                Year built
              </p>
              <div className="flex flex-col justify-center items-center flex-1">
                <h5 className="font-semibold text-4xl text-center text-black/75">
                  2016
                </h5>
              </div>
            </div>
            <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center min-w-72 shadow-1">
              <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1 ">
                never miss a nEW listing or price reduction
              </p>
              <div className="flex flex-col justify-center items-center flex-1 relative w-full bg-[#D9D9D9]/30">
                <input
                  type="text"
                  className="bg-transparent w-full text-black/75 h-8 focus:outline-none px-3 pr-10 rounded"
                />
                <button className="flex items-center justify-center inset-y-0 absolute w-8 right-0">
                  <Icon
                    name="angle-right"
                    className="text-primary w-4 h-4"
                    size={18}
                    color="currentColor"
                    stroke="transparent"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Building Information */}
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-3">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-1">
          <div className="flex flex-col md:col-span-6 lg:col-span-7 xl:col-span-8 2xl:col-span-9 gap-1">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 xl:gap-10 2xl:gap-20 shadow-1 w-full rounded bg-white p-5 lg:p-10">
              <div className="space-y-4 lg:col-span-5 xl:col-span-4 flex flex-col ">
                <div className="space-y-4 xl:flex-1">
                  <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                    Building Information
                  </h2>
                  <p className="text-4xl font-bold text-black/70">
                    Beach House 8
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

              <div className="flex justify-between flex-wrap gap-2 lg:col-span-7 xl:col-span-8">
                <div className="space-y-5">
                  {list1.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                        {item.name}
                      </h5>

                      <p
                        className={`text-xl text-black/85  ${
                          item.name === "views"
                            ? "w-36 leading-loose"
                            : "w-auto leading-relaxed"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-5 max-w-full ">
                  {list2.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="text-primary font-montserrat text-sm uppercase font-semibold">
                        {item.name}
                      </h5>
                      <p
                        className={`text-xl text-black/85 max-w-full ${
                          item.name === "developer" ? "w-80" : "w-auto"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
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
                  Beach House 8 is an exclusive mid-rise condominium building
                  located on the beachfront in Miami Beach, FL at 3651 Collins
                  Avenue. Conveniently located, it is within walking distance to
                  South Beach. It is perfectly situated for quick access to all
                  of South Florida, perfectly combining oceanfront living with
                  the convenience of the city.
                </p>
                <p className="text-xl text-black/75  font-normal">
                  It is a luxurious 10-story building that houses only 8
                  condominiums, creating a unique and intimate community that is
                  truly a boutique collection of homes. Beach House 8 offers 7
                  four-bedroom condominiums covering an entire floor, each with
                  over 3000 square feet of living space, and a duplex penthouse
                  with 6000 square feet of outdoor living space on two levels.
                  This unique home includes elements such as a guest master
                  suite and a private landscaped plunge pool, perfect for both
                  elegant entertaining and secluded intimate living. Beach House
                  8 was built in 2015, with units benefiting from the pinnacle
                  of contemporary interior design, creating luxury homes that
                  feature open floor plans that are bathed in natural light,
                  floor-to-ceiling windows, generous terraces, gourmet kitchens
                  with Miele appliances, marble bathrooms, and a full home
                  automation system, including audio.
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
                    <label className="block text-xs text-black/50  ">
                      Email
                    </label>
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
                        brokerage company. Consent is not a requirement or
                        condition to receive real estate brokerage services
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
      </section>
      {/*  Building Amenities */}
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-1">
        <div className="shadow-1 w-full rounded bg-white p-5 xs:p-10 gap-5 flex flex-col lg:flex-row flex-wrap">
          <h4 className="text-primary text-3xl 2xl:text-5xl font-normal text-center lg:text-left w-auto lg:w-40 xl:w-80 max-w-full">
            Building <br className="hidden lg:block" /> Amenities
          </h4>
          <div className="flex flex-col xs:grid xs:grid-cols-2 md:grid-cols-3 gap-5 flex-1">
            <div className="space-y-2">
              {Buildinglist1.map((item, index) => (
                <p className="flex items-center gap-4" key={index}>
                  <Icon
                    name="checkmark"
                    size={15}
                    className="relative shrink-0"
                    color="#429A22"
                  />
                  <span className="text-black/75 text-lg font-normal leading-snug">
                    {item}
                  </span>
                </p>
              ))}
            </div>
            <div className="space-y-2">
              {Buildinglist2.map((item, index) => (
                <p className="flex items-center gap-4" key={index}>
                  <Icon
                    name="checkmark"
                    size={15}
                    className="relative shrink-0"
                    color="#429A22"
                  />
                  <span className="text-black/75 text-lg font-normal leading-snug">
                    {item}
                  </span>
                </p>
              ))}
            </div>
            <div className="space-y-2">
              {Buildinglist3.map((item, index) => (
                <p className="flex items-center gap-4" key={index}>
                  <Icon
                    name="checkmark"
                    size={15}
                    className="relative shrink-0"
                    color="#429A22"
                  />
                  <span className="text-black/75 text-lg font-normal leading-snug">
                    {item}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*  Building Reviews */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full ">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10">
          <div className="lg:gap-5 lg:grid lg:grid-cols-12 ">
            <div className="space-y-2 lg:space-y-5 flex flex-col lg:col-span-2 xl:col-span-3">
              <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 text-center lg:text-left ">
                Building <br className="hidden lg:block" /> Reviews
              </h4>

              <div className="gap-2 flex flex-wrap items-center justify-center lg:justify-start  ">
                {BuildingReviewsBtn.map((items, index) => (
                  <Link
                    key={index}
                    className="h-9 text-sm bg-white hover:bg-primary hover:text-white ease-in-out duration-200 shadow-2 border border-black/20 text-black/40 uppercase font-montserrat font-bold relative whitespace-nowrap z-10 rounded py-1 px-3 flex justify-center items-center"
                    href={items.url}
                  >
                    {items.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-10 xl:col-span-9 pt-5 lg:pt-0 max-w-screen">
              <Swiper
                navigation={true}
                pagination={pagination}
                modules={[Navigation, Pagination]}
                className="mySwiper !pb-5"
              >
                {progressBar.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="md:grid-cols-12 md:grid flex flex-col gap-10 lg:px-5 xl:px-12">
                      <div className="col-span-7">
                        <div className="max-w-md flex flex-col space-y-4">
                          <h4 className="text-primary font-montserrat text-lg font-semibold">
                            {item.label}
                          </h4>
                          <p className="text-black/90 text-lg font-normal leading-snug">
                            {item.description}
                          </p>
                          <p className="text-black/75 text-sm font-normal leading-snug">
                            {item.commentor}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col col-span-5 space-y-4">
                        {item.progresses.map((i, key) => (
                          <div
                            key={key}
                            className="flex flex-col lg:flex-row gap-1 w-full lg:items-center"
                          >
                            <Link
                              href="#"
                              className="text-primary font-montserrat text-sm font-semibold uppercase w-40"
                            >
                              {i.plabel}
                            </Link>
                            <div className="w-56 bg-black/10 rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: i.progress + "%" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*  Building Real Estate Activity */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full space-y-2">
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
      </section>
      {/*   Building Floorplans */}
      <section className="max-w-screen-wrap mx-auto px-5 pt-1">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 lg:flex lg:flex-row flex-wrap">
          <h4 className="text-primary text-3xl 2xl:text-5xl font-normal w-auto lg:w-40 xl:w-80 max-w-full text-center lg:text-left">
            Building <br className="hidden lg:block" /> Floorplans
          </h4>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 flex-1 p-5 lg:pt-0">
            {floorplans.map((item, i) => (
              <div className=" flex flex-col gap-4" key={i}>
                <div className="overflow-hidden justify-center flex">
                  <Image
                    src={`/images/${item.map}`}
                    width={319}
                    height={145}
                    className="object-cover w-full sm:w-auto h-auto"
                    alt=""
                  />{" "}
                </div>
                <div className="space-y-1">
                  <h4 className="text-center text-black/75 text-xl font-semibold uppercase">
                    {item.name}
                  </h4>
                  <p className="text-center text-lg font-medium text-black/55">
                    {item.bd}bd {item.ba}ba - {item.area} sqft
                  </p>
                  <p className="text-center text-lg font-medium text-black/55">
                    {item.terraces}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  Building Association & Management */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-full ">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-col lg:flex-row flex-wrap">
          <h4 className="text-primary text-3xl 2xl:text-5xl font-normal xl:max-w-md xl:w-full">
            Building Association <br className="hidden lg:block" />& Management
          </h4>

          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 xl:gap-4 flex-1">
            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                association fees
              </h5>
              <ul className="space-y-2 text-black/80">
                <li className="text-base font-medium">$3,500/mo</li>
                <li className="text-base font-medium">$2/sq.ft./mo</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                Building Association
              </h5>
              <ul className="space-y-4 text-black/80">
                <li className="text-base font-medium">
                  Beach House 8 - Association
                </li>
                <li className="text-base">
                  3651 Collins Avenue <br /> Miami Beach, FL 33140
                </li>

                <li className="text-base">
                  (800) 443 - 2343 <br /> info@hh8association.com
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                Management company
              </h5>
              <ul className="space-y-4 text-black/80">
                <li className="text-base font-medium">Property Manager, Inc</li>
                <li className="text-base">
                  3651 Collins Avenue <br /> Miami Beach, FL 33140
                </li>

                <li className="text-base">
                  (800) 443 - 2343 <br /> manager@mgmtcompany.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Building Intelligence */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-wrap">
          <div className="flex gap-5 flex-col lg:grid lg:grid-cols-12 flex-1">
            <div className="space-y-5 flex flex-col col-span-2 xl:col-span-3">
              <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 text-center lg:text-left">
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
      </section>
      {/* NEW LISTING */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full">
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
      </section>
      {/* Building social */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-ful  ">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-wrap">
          <div className="flex gap-5 flex-col lg:grid lg:grid-cols-12 flex-1">
            <div className="space-y-5 flex flex-col lg:col-span-2 xl:col-span-3">
              <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 ">
                Building
                <br className="hidden lg:block" /> social
              </h4>
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-10 gap-5 flex-1 lg:col-span-10 xl:col-span-9">
              {buldibngSocila.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className=" bg-black/5 px-5 py-6 rounded-sm h-[350px] flex items-end justify-center">
                    <p className="text-primary text-lg font-semibold text-center w-44">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Condo living */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-full ">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-wrap">
          <div className="flex gap-5 flex-col lg:grid lg:grid-cols-12 flex-1">
            <div className="space-y-5 flex flex-col lg:col-span-2 xl:col-span-3">
              <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 ">
                Condo
                <br className="hidden lg:block" /> living
              </h4>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 flex-1 lg:col-span-10 xl:col-span-9">
              {CondoLiving.map((item, index) => (
                <div className="flex flex-col gap-1" key={index}>
                  <Image
                    src={`/images/${item.thumb}`}
                    width={258}
                    height={155}
                    className="mr-2 mb-4"
                    alt=""
                  />
                  <h4 className="text-lg font-semibold text-black/65">
                    {item.title}
                  </h4>
                  <p className=" text-base text-black/55">{item.descrp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Nearby Building */}
      <section className="pt-1 ">
        <SearchRow sectionTitle="Nearby buildings">
          <div className="grid grid-cols-4 gap-5">
            {NearbyBuildings.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`/images/${item.image}`}
                  alt={item.alt}
                  title={item.title}
                  describ={item.describ}
                  unit={item.unit}
                  price={item.price}
                  priceDigit={item.priceDigit}
                  button={item.button}
                />
              );
            })}
          </div>
        </SearchRow>
      </section>
      {/* Nearby Cities */}
      <section className="pt-1 pb-5">
        <NearByCities sectionTitle="Nearby cities" />
      </section>
      <Footer />
    </>
  );
}

export default DetailsPg;
