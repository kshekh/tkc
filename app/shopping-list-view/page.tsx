import React, { useState } from "react";
import HeaderShoppingCart from "@/components/ui/HeaderShoppingCart";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import ProductCard from "@/components/ui/BuildingCard";
const NearbyBuildings = [
  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    title: "Beach House 1",
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
const ListView: React.FC = () => {
  return (
    <>
      <HeaderShoppingCart />
      <div className="max-w-screen-wrap px-5 mx-auto">
        <div className="py-5 xl:px-10 mx-auto w-full">
          <div className="flex flex-col pt-5 gap-5">
            <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                Price
              </div>
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                Units
              </div>
              <div className="shadow-md ring-2 ring-primary rounded bg-white text-center flex gap-1 py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                <span className="flex justify-between w-full max-w-40 ">
                  <span>12 mo Sales</span>
                  <span className="flex flex-col gap-[2px]">
                    <button className="relative text-black/20 hover:text-primary">
                      <Icon name="tringle-up" size={10} color="currentColor" />
                    </button>
                    <button className="relative text-black/20 hover:text-primary">
                      {" "}
                      <Icon
                        name="tringle-down"
                        size={10}
                        color="currentColor"
                      />
                    </button>
                  </span>
                </span>
              </div>
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                A - Z
              </div>
            </div>
            <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListView;
