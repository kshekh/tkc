import React, { useState } from "react";
import HeaderShoppingCart from "@/components/ui/HeaderShoppingCart";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import ProductCard from "@/components/ui/BuildingCard";
import ImageZoomPopup from "./ImageZoomPopup";

const WebsiteIncludes = [
  "Prominent Agent Branding",
  "Lead Forms & Buyer’s Hotline",
  "Leads Routed To Your CRM",
  "Custom Messaging",
  "Building Alerts Sign-up",
  "Social Tools",
  "Custom Branded Catalog of 1000’s of Buildings with all Leads Routing to You",
];

const cartList = [
  {
    image: "thumb-1.png",
    alt: "Beach House 8",
    title: "Beach House 8",
    describ: "3651 Collins Avenue Miami Beach, FL 33140",
    unit: 8,
    price: 4.8,
    priceDigit: "M",
    button: false,
    upliner: "Building advisor",
    titleProject: "Beach House 8",
    address: "3651 Collins Avenue, Miami Beach, FL 33140",
    listPoints: [
      {
        name: "branding on 1000’s of buildings",
        ready: "As activity occurs",
        preview: true,
        buttonLink: "",
      },
      {
        name: "Real Estate ACTIVITY Alerts",
        ready: "As activity occurs",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Social Content",
        ready: "2X / week",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Condo Articles",
        ready: "1x / week",
        preview: false,
        buttonLink: "",
      },
    ],

    total: "free",
  },
  {
    image: "thumb-2.png",
    alt: "Aston Martin Residences",
    title: "Aston Martin Residences",
    describ: "300 Biscayne Boulevard Way Miami, FL 33131",
    unit: 391,
    price: 15.5,
    priceDigit: "M",
    button: false,
    upliner: "Building advisor",
    titleProject: "Aston Martin Residences",
    address: "300 Biscayne Boulevard Way, Miami FL 33131 ",
    listPoints: [
      {
        name: "branding on 1000’s of buildings",
        ready: "As activity occurs",
        preview: true,
        buttonLink: "",
      },
      {
        name: "Real Estate ACTIVITY Alerts",
        ready: "As activity occurs",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Social Content",
        ready: "2X / week",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Condo Articles",
        ready: "1x / week",
        preview: false,
        buttonLink: "",
      },
    ],

    total: "free",
  },
  {
    image: "thumb-3.png",
    alt: "Ocean House",
    title: "Ocean House",
    describ: "125 Ocean Drive Miami Beach, FL 33139",
    unit: 28,
    price: 1.9,
    priceDigit: "M",
    button: false,
    upliner: "Building advisor",
    titleProject: "Ocean House ",
    address: "125  Ocean Drive, Miami Beach, FL 33139",
    listPoints: [
      {
        name: "branding on 1000’s of buildings",
        ready: "As activity occurs",
        preview: true,
        buttonLink: "",
      },
      {
        name: "Real Estate ACTIVITY Alerts",
        ready: "As activity occurs",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Social Content",
        ready: "2X / week",
        preview: false,
        buttonLink: "",
      },
      {
        name: "Condo Articles",
        ready: "1x / week",
        preview: false,
        buttonLink: "",
      },
    ],

    total: "$39 / mo",
  },
];

function ShoppingCart() {
  return (
    <>
      <HeaderShoppingCart />
      <div className="max-w-screen-wrap px-5 mx-auto">
        <div className="py-5 xl:px-10 mx-auto w-full">
          <div className="flex justify-normal">
            <Link
              href="/"
              className="text-black/50 hover:text-primary ease-in-out duration-200 uppercase inline-flex gap-1 items-center font-semibold"
            >
              <span>BACK TO SEARCH RESULTS</span>
            </Link>
          </div>
          <div className="shadow-md rounded bg-white mt-2 p-5 xl:p-10">
            <h1 className="text-primary text-2xl md:text-3xl xl:text-5xl font-semibold">
              Shopping Cart
            </h1>
          </div>
          <div className="rounded bg-white mt-5 p-5 xl:p-10">
            <div className="space-y-3">
              <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                all KEYES BUILDING ADVISORS get
              </h2>
              <p className="font-semibold text-4xl text-left text-black/75">
                Branded Building Advisor Website
              </p>
            </div>
            <div className="flex gap-5 2xl:gap-10 flex-wrap justify-between pt-10">
              <div className="relative bg-black/5 rounded-md flex flex-col p-1 pb-1.5 overflow-hidden w-full md:max-w-64 lg:max-w-xs">
                <ImageZoomPopup
                  imageUrl="/images/building-advisor-full-preview.png"
                  alt="Image Alt Text"
                />
              </div>

              <div className="space-y-4 md:max-w-sm lg:max-w-lg xl:max-w-80 2xl:max-w-xs">
                <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  YOUR WEBSITE INCLUDES
                </h2>
                {WebsiteIncludes.map((item, index) => (
                  <p className="flex items-start gap-4" key={index}>
                    <Icon
                      name="checkmark"
                      size={15}
                      className="relative shrink-0 top-1"
                      color="#429A22"
                    />
                    <span className="text-black/75 text-lg font-normal leading-snug">
                      {item}
                    </span>
                  </p>
                ))}
              </div>

              <div className="space-y-4 xl:max-w-sm 2xl:max-w-lg pr-5 max-w-full">
                <h3 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  DOMAIN OPTIONS
                </h3>
                <div className="bg-[#FDF9E5] rounded-md p-2 px-3">
                  <p className="text-lg text-black/80 font-medium leading-snug">
                    Customize the URL for your Keyes Building Advisor Website
                    below, or add a custom domain for a completely branded and
                    private site for your clients and prospects (i.e.
                    www.JonSmithRealtor.com)
                  </p>
                </div>
                <h3 className="text-black/60 font-montserrat text-sm uppercase font-semibold pt-1.5">
                  customize the url for your Building Advisor website
                </h3>
                <div className="relative">
                  <div className="relative truncate bg-[#1F1F1F]/10 rounded border border-black/20 py-2 px-3 font-montserrat font-bold text-black/70">
                    condos.keyes.com/
                    <span className="text-primary">agent/yourname</span>
                  </div>
                  <div className="absolute inset-y-0 -right-10 flex justify-center items-center w-10">
                    <Icon
                      name="checkmark"
                      size={15}
                      className="relative shrink-0"
                      color="#429A22"
                    />
                  </div>
                </div>
                <h3 className="text-black/60 font-montserrat text-sm uppercase font-semibold pt-1.5">
                  add custom domain to your building Advisor website
                </h3>
                <div className="relative rounded border border-black/20 py-2 px-3 font-montserrat font-bold text-black/70">
                  <div className="flex gap-2 flex-wrap justify-between">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        id="add_custom_domain"
                        className="w-4 h-4 accent-primary bg-blue-500 rounded shrink-0 "
                      />
                      <label
                        htmlFor="add_custom_domain"
                        className="text-black/60 font-montserrat text-lg uppercase font-semibold"
                      >
                        add custom domain
                      </label>
                    </div>
                    <p className="font-montserrat text-black/60 font-semibold text-lg">
                      $19/mo
                    </p>
                  </div>

                  <p className="text-black/80 text-lg text-left pt-2 max-w-sm">
                    Custom domain setup is managed in your account after
                    activation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 pt-5">
            {cartList.map((product, index) => (
              <div className="flex flex-col md:grid md:grid-cols-12 gap-5" key={index}>
                <div className="md:col-span-5 lg:col-span-4 2xl:col-span-3  ">
                  <ProductCard
                    image={`/images/${product.image}`}
                    alt={product.alt}
                    title={product.title}
                    describ={product.describ}
                    unit={product.unit}
                    price={product.price}
                    priceDigit={product.priceDigit}
                    button={product.button}
                  />
                </div>
                <div className="md:col-span-7 lg:col-span-8 2xl:col-span-9 shadow-md rounded bg-white p-5 xl:p-10 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                        {product.upliner}
                      </h2>
                      <p className="font-semibold text-4xl text-left text-black/75">
                        {product.titleProject}
                      </p>
                      <div className="gap-2 flex items-center">
                        <Icon
                          name="location"
                          className="text-black/50 w-5 h-5 xl:w-auto xl:h-auto relative -top-0.5"
                          size={15}
                          color="currentColor"
                          stroke="transparent"
                        />
                        <p className="text-black/50 text-xl xl:text-xl font-medium">
                          {product.address}
                        </p>
                      </div>
                    </div>
                    <button className="flex gap-1 items-center text-black/50 hover:text-red-400">
                      <Icon
                        name="trash"
                        size={16}
                        className="h-auto relative -top-0.5"
                        color="currentColor"
                      />
                      <span className="hidden lg:inline-block">Remove building</span>
                    </button>
                  </div>
                  <div className="space-y-3 pt-5 flex-1">
                    <h3 className="uppercase text-sm xl:text-base font-montserrat font-semibold text-black/60">
                      includes the following{" "}
                      <span className="text-primary font-bold ">
                        branded & easily shareable
                      </span>{" "}
                      content delivered to your inbox:
                    </h3>

                    <div className="flex flex-col xs:grid xs:grid-cols-2 xl:grid-cols-4 gap-5">
                      {product.listPoints.map((item, i) => (
                        <div
                          key={i}
                          className="border-2 border-black/20 rounded p-3 xl:p-5 flex flex-col gap-5 xs:min-h-32 justify-between"
                        >
                          <h3 className="uppercase text-black/70 font-montserrat font-semibold">
                            {item.name}
                          </h3>
                          {item.preview ? (
                            <Link
                              href={item.buttonLink}
                              className="text-primary text-sm underline text-left uppercase font-montserrat font-semibold"
                            >
                              Preview
                            </Link>
                          ) : (
                            <p className="text-primary text-sm text-left uppercase font-montserrat font-semibold">
                              {item.ready}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <div className="space-y-1">
                      <p className="uppercase text-xs font-montserrat font-semibold text-primary leading-none">
                        total
                      </p>
                      <p className="uppercase text-xl font-semibold font-montserrat text-black/60 leading-none">
                        {product.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <div className="shadow-md rounded bg-white p-5 xl:p-10 flex flex-wrap justify-between gap-5">
              <div className="space-y-4 w-full sm:max-w-xs lg:max-w-sm">
                <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  product summary
                </h2>
                <table className="w-full">
                  <tr>
                    <td className="text-xl text-black/60 font-bold">
                      Building Advisor Website
                    </td>
                    <td className="text-lg text-black/60 text-right">FREE</td>
                  </tr>
                  <tr>
                    <td className="text-lg text-black/60 font-semibold">
                      Custom Domain Add-On
                    </td>
                    <td className="text-lg text-black/60 text-right">$19/mo</td>
                  </tr>
                  <tr>
                    <td className="h-2" colSpan={2}></td>
                  </tr>
                  <tr>
                    <td className="text-xl text-black/60 font-bold">
                      Beach House 8
                    </td>
                    <td className="text-right">
                      <Link href="" className="underline text-black/40 text-xs">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg text-black/60 font-semibold">
                      Building Advisor Program
                    </td>
                    <td className="text-lg text-black/60 text-right">FREE</td>
                  </tr>
                  <tr>
                    <td className="h-2" colSpan={2}></td>
                  </tr>
                  <tr>
                    <td className="text-xl text-black/60 font-bold">
                      Aston Martin Residences
                    </td>
                    <td className="text-right">
                      <Link href="" className="underline text-black/40 text-xs">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg text-black/60 font-semibold">
                      Building Advisor Program
                    </td>
                    <td className="text-lg text-black/60 text-right">FREE</td>
                  </tr>
                  <tr>
                    <td className="h-2" colSpan={2}></td>
                  </tr>
                  <tr>
                    <td className="text-xl text-black/60 font-bold">
                      Ocean House
                    </td>
                    <td className="text-right">
                      <Link href="" className="underline text-black/40 text-xs">
                        Remove
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg text-black/60 font-semibold">
                      Building Advisor Program
                    </td>
                    <td className="text-lg text-black/60 text-right">FREE</td>
                  </tr>
                  <tr>
                    <td className="h-3" colSpan={2}></td>
                  </tr>
                  <tfoot className="border-t border-black/10">
                    <tr>
                      <td className="pt-3 text-xl text-black/40 uppercase font-bold">
                        Total
                      </td>
                      <td className="pt-3 text-right font-semibold text-black/60 text-2xl">
                        $58 / mo
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="space-y-4 w-full sm:max-w-xs lg:max-w-sm">
                <h2 className="text-primary font-montserrat text-sm uppercase font-semibold">
                  product summary
                </h2>
                <div className="relative">
                  <form>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-sm text-black/60 font-bold">
                          Brokerage / Team Name
                        </label>
                        <input
                          type="text"
                          className="rounded border border-black/10 w-full py-2 px-3"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-black/60 font-bold">
                          Name
                        </label>
                        <input
                          type="text"
                          className="rounded border border-black/10 w-full py-2 px-3"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-black/60 font-bold">
                          Email
                        </label>
                        <input
                          type="text"
                          className="rounded border border-black/10 w-full py-2 px-3"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm text-black/60 font-bold">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="rounded border border-black/10 w-full py-2 px-3"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="space-y-4 w-full xl:max-w-sm flex flex-col justify-between">
                <div className="bg-[#FDF9E5] rounded-md p-2 px-3 space-y-3">
                  <p className="text-lg text-black/80 font-medium leading-snug">
                    The Building Advisor program provides our agents with an
                    automated content marketing system.
                  </p>
                  <p className="text-lg text-black/80 font-medium leading-snug">
                    The first 2 buildings are FREE and each additional building
                    is $39 /mo. All billing will be processed through your agent
                    billing portal.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    id="tnc"
                    className="w-4 h-4 accent-primary bg-blue-500 rounded shrink-0 relative top-1"
                  />
                  <p className="text-black/60 font-montserrat font-semibold">
                    <label htmlFor="tnc" className="">
                      By clicking the checkbox to the left, you are agreeing to
                      our
                    </label>{" "}
                    <Link href="/#" className="underline">
                      Terms of Service
                    </Link>
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary mx-auto w-full text-white text-3xl uppercase px-8 py-4 rounded-md hover:bg-primary-2 ease-in-out duration-300"
                  >
                    Activate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
