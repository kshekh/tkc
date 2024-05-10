import React from "react";
import Header from "@/components/ui/HeaderP5";
import ProductCard from "@/components/ui/BuildingCard";
import Footer from "@/components/ui/Footer";
import Icon from "@/components/ui/Icon";
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
const filterby = [
  'For Sale','Price Range','Beds / Baths','Sort by',
]
function P5() {
  return (
    <>
      <div className="flex flex-col gap-1 pb-5">
        <Header />
      </div>
      <div className="max-w-screen-wrap px-5 mx-auto">
        <div className="flex flex-wrap items-center flex-col lg:flex-row justify-between gap-5 pb-10">
          <div className="flex flex-wrap  gap-2 flex-1 lg:flex-none">
            <div className="shadow-md flex-1 rounded bg-white text-center flex py-3 px-4 xl:px-8 uppercase justify-center items-center font-bold text-primary text-xl">
              Buildings
            </div>
            <div className="shadow-3 flex-1 rounded gap-2 bg-black/10 text-center flex py-3 px-4 xl:px-8 uppercase justify-center items-center font-bold text-black/60 text-xl">
              Units
              <span className="bg-white rounded-full py-1 px-3 text-black font-montserrat font-semibold leading-none inline-block">
                7,265
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 flex-1 lg:flex-none">
            {filterby.map((item, index)=>(
              <div key={index} className="shadow-md flex-1 lg:flex-none rounded bg-white text-center flex gap-1 py-3 px-4 xl:px-8 capitalize justify-center items-center font-bold text-primary text-xl">
              <span className="flex justify-between w-full gap-4 max-w-40 ">
                <span className="whitespace-nowrap">{item}</span>
                <span className="flex flex-col gap-[2px]">
                  <button className="relative text-black/20 hover:text-primary">
                    <Icon name="tringle-up" size={10} color="currentColor" />
                  </button>
                  <button className="relative text-black/20 hover:text-primary">
                    {" "}
                    <Icon name="tringle-down" size={10} color="currentColor" />
                  </button>
                </span>
              </span>
            </div>
            ))}
            
             
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
      <Footer />
    </>
  );
}

export default P5;
