import React from 'react'
import Header from "@/components/ui/HeaderP5";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/HeroP6";
import InfoBoxRowHome from "@/components/ui/InfoBoxRowHome";
import SearchRow from "@/components/ui/SearchRow";
import ProductCard from "@/components/ui/BuildingCard"; 
import MiniSearchRow from "@/components/ui/MiniSearchRow"; 
import NearByCities from "@/components/ui/NearByCities";
const resultInfoBoxesEcom = [
    {
      title: "every condo Building in the market",
      descrip: "Access 150,000+ buildings in the U.S.",
    },
    {
      title: "building level Real Estate alerts",
      descrip: "Find out when new units are for sale or rent",
    },
    {
      title: "condo Specific Resources",
      descrip: "Resources about new condo laws, HOA’s, financing & more",
    },
  ];
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
function P6() {
  return (
    <>
       <div className="flex flex-col gap-1 pb-5">
       <Header />
        <Hero />
        <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
          <div className="flex flex-col pt-5 gap-5">
            <h2 className="uppercase font-semibold text-black/80 text-center text-xl font-montserrat">
              Benefits of <span className="text-primary">working with us</span>
            </h2>
            <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
              <InfoBoxRowHome boxData={resultInfoBoxesEcom} />
              <div className="rounded-md bg-white shadow-md p-5 xl:p-10 space-y-5 flex flex-col justify-between">
                <h3 className="text-xl uppercase text-primary font-semibold">
                  Always a call or Txt Away
                </h3>
                <div className="flex flex-wrap gap-3 justify-between items-center">
                  <div className="space-y-0.5">
                    <p className="text-lg leading-none font-bold text-black/85 uppercase ">Call or Text</p>
                    <p className="leading-none text-xl text-black/85">(800) 555-2441</p>
                  </div>
                  <button className="border border-black/20 hover:bg-black/10 text-center font-montserrat ease-in-out duration-200 rounded-md py-1.5 px-3 uppercase font-semibold text-black/50 hover:text-black">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  )
}

export default P6
