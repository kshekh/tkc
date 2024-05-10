import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import InfoBoxRow from "@/components/ui/InfoBoxRow";
import SearchRow from "@/components/ui/SearchRow";
import MiniSearchRow from "@/components/ui/MiniSearchRow";
import ProductCard from "@/components/ui/BuildingCard";
import NearByCities from "@/components/ui/NearByCities";
const FavoriteBuildings = [
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

const MonthsalesByUnit = [
  {
    image: "thumb-5.png",
    alt: "Brickell Heights East",
    title: "Brickell Heights East",
    describ: "45 SW 9th Street Miami Beach, FL 33130",
    unit: 358,
    price: 589,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-6.png",
    alt: "Brickell Flatiron",
    title: "Brickell Flatiron",
    describ: "1000 Brickell Place    Miami, FL 33133",
    unit: 527,
    price: 850,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-7.png",
    alt: "Mirador South",
    title: "Mirador South",
    describ: "1000 West Avenue    Miami Beach, FL 33139",
    unit: 463,
    price: 370,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-8.png",
    alt: "Grandview Palace",
    title: "Grandview Palace",
    describ: "7601 E. Treasure Drive    North Bay Village, FL 33141",
    unit: 535,
    price: 392,
    priceDigit: "K",
    button: false,
  },
];

const MonthsalesByAmount = [
  {
    image: "thumb-9.png",
    alt: "Oceana Bal Harbour",
    title: "Oceana Bal Harbour",
    describ: "10201 /10203 Collins Avenue    Bal Harbour, FL 33154",
    unit: 240,
    price: 2.4,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-10.png",
    alt: "Armani Residences",
    title: "Armani Residences",
    describ: "18975 Collins Avenue    Sunny Isles Beach, FL 33160",
    unit: 308,
    price: 2.5,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-11.png",
    alt: "Jade Signature",
    title: "Jade Signature",
    describ: "16901 Collins Avenue    Sunny Islaes Beach, FL 33160",
    unit: 192,
    price: 2.4,
    priceDigit: "M",
    button: false,
  },
  {
    image: "thumb-12.png",
    alt: "Apogee",
    title: "Apogee",
    describ: "800 South Pointe Drive    Miami Beach, FL 33139",
    unit: 67,
    price: 8.5,
    priceDigit: "M",
    button: false,
  },
];

const memberofUnit = [
  {
    image: "thumb-13.png",
    alt: "One Fifty One At B",
    title: "One Fifty One At B",
    describ: "14951 Royal Oaks Lane    North Miami, FL 33181",
    unit: 373,
    price: 369,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-14.png",
    alt: "Mystic Pointe 500",
    title: "Mystic Pointe 500",
    describ: "3530 Mystic Point Drive    Aventura, FL 33180",
    unit: 383,
    price: 490,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-15.png",
    alt: "The Grand",
    title: "The Grand",
    describ: "1717 North Bayshore Drive    Miami, FL 33132",
    unit: 810,
    price: 411,
    priceDigit: "K",
    button: false,
  },
  {
    image: "thumb-16.png",
    alt: "Panarama Tower",
    title: "Panarama Tower",
    describ: "1100 Brickell Bay Drive    Miami, FL 33131",
    unit: 821,
    price: 1.2,
    priceDigit: "M",
    button: false,
  },
];

// import { resultInfoBoxesEcom } from "@/components/lib/placeholderData";
interface IResultInfoBox {
  title: string;
  descrip: string;
}

const resultInfoBoxesEcom = [
  {
    title: "every condo Building in the market",
    descrip: "Access 150,000+ buildings in the U.S.",
  },
  {
    title: "branded Websites, alerts & social content ",
    descrip: "Effortless condo content marketing - done for you",
  },
  {
    title: "high-quality condo articles & Resources",
    descrip: "Resources about new condo laws, HOA's, financing and more",
  },
  {
    title: "prominent lead capture tools",
    descrip: "Call, text or email inquiries routed to your CRM",
  },
];
function StoreHomePg() {
  return (
    <>
      <div className="flex flex-col gap-1 pb-5">
        <Header />
        <Hero />

        <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
          <div className="flex flex-col pt-5 gap-5">
            <h2 className="uppercase font-semibold text-black/80 text-center text-xl font-montserrat">
              Benefits of{" "}
              <span className="text-primary">beComing a building advisor</span>
            </h2>
            <InfoBoxRow boxData={resultInfoBoxesEcom} />
          </div>
        </div>
        <div className="">
          <SearchRow sectionTitle="MY favorite buildings">
            <div className="grid grid-cols-4 gap-5">
              {FavoriteBuildings.map((item, index) => {
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
        </div>
        <NearByCities sectionTitle="Nearby cities" />
        <MiniSearchRow
          sectionTitle="12 MONTH SALES ACTIVITY BY UNITS"
          searchTypeId={6}
        />
        <MiniSearchRow
          sectionTitle="12 MONTH SALES ACTIVITY BY AMOUNT"
          searchTypeId={7}
        />
        <MiniSearchRow sectionTitle="NUMBER OF UNITS" searchTypeId={3} />
      </div>
      <Footer />
    </>
  );
}

export default StoreHomePg;
