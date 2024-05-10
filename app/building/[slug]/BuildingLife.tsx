"use client";
import { getDataBuilding } from "@/components/lib/helpers";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { CondoLiving } from "./fakedata.js";

export default function BuildingLife(params: { bldg: any }) {
  // console.log(bldg);
  // console.log(bldg?.media);

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-wrap">
        <div className="flex gap-5 flex-col lg:grid lg:grid-cols-12 flex-1">
          <div className="space-y-5 flex flex-col  justify-start items-start lg:col-span-2 xl:col-span-3">
            <h4 className="text-primary text-3xl 2xl:text-5xl font-normal  ">
              Condo
              <br className="hidden " /> Living
            </h4>
            <Image
              src="/images/kitchen-painting.png"
              width={258}
              height={155}
              className="mr-2 mb-4 rounded-md"
              alt=""
            />
          </div>
          <div className="lg:col-span-10 xl:col-span-9 ">
            <div className="flex  justify-between shadow-1 w-full rounded bg-white ">
              <div
                className={`space-y-5 relative overflow-hidden ${
                  showContent ? "h-auto pb-12" : "h-96 pb-0"
                }`}
              >
                <h4 className="text-primary text-3xl 2xl:text-5xl font-montserrat  ">
                  Turning Your Pilot House Paradise into a Culinary Oasis:
                  Kitchen Design Tips
                </h4>
                <div className="text-xl text-black/75 font-normal space-y-4">
                  <p>
                    Living on the Intracoastal at Pilot House offers
                    unparalleled waterfront views and a luxurious lifestyle. But
                    what about your kitchen? This vital space deserves an
                    upgrade that reflects the beauty of your surroundings and
                    complements the building&#39;s unique features. Here are some
                    tips to transform your Pilot House condo kitchen into a
                    stunning and functional haven for culinary creations:
                  </p>
                  <p>
                    <strong>Embrace the Views:</strong> Pilot House boasts
                    incredible water vistas. Take advantage of this by
                    positioning your sink or installing a breakfast bar under
                    windows facing the Intracoastal. This will allow you to soak
                    up the scenery while prepping meals or enjoying morning
                    coffee.{" "}
                  </p>
                  <p>
                    <strong>Light and Bright:</strong> Many Pilot House units
                    feature floor-to-ceiling sliding glass doors. Maximize the
                    natural light by opting for light-colored cabinets and
                    countertops. White, soft gray, or light beige will reflect
                    the sunlight and create an airy feel.{" "}
                  </p>
                  <p>
                    <strong>Space Utilization:</strong> Condo kitchens often
                    have limitations on square footage. To combat this, consider
                    clever storage solutions. Built-in cabinets that reach the
                    ceiling will provide ample storage without sacrificing floor
                    space. You can also explore installing pull-out drawers in
                    lower cabinets for easy access to cookware.{" "}
                  </p>
                  <p>
                    <strong>Open Floor Plan Magic:</strong> Since some Pilot
                    House units have open floor plans connecting the kitchen to
                    the living area, consider design elements that create a
                    cohesive feel. Extend the same color scheme or backsplash
                    material from the kitchen into the living area to achieve a
                    sense of flow.{" "}
                  </p>
                  <p>
                    <strong>Stainless Steel Synergy:</strong> Pilot House units
                    often feature stainless steel appliances. Lean into this
                    modern aesthetic by incorporating stainless steel elements
                    throughout your kitchen. This could include a sleek,
                    stainless steel backsplash, hardware, or even a pot rack.{" "}
                  </p>
                  <p>
                    <strong>Nautical Touches:</strong> A subtle nod to the
                    waterfront location can add a touch of personality. Consider
                    incorporating nautical-themed light fixtures, artwork with a
                    coastal theme, or blue and white accents in your dishware or
                    towels.{" "}
                  </p>
                  <p>
                    <strong>Balcony Bliss:</strong> If your unit has a balcony,
                    use it! Add a small bistro table and chairs to create a
                    charming breakfast nook or an outdoor cocktail area.{" "}
                  </p>
                  <p>
                    <strong>Resident Resources:</strong> Don&#39;t forget to explore
                    the Pilot House Condominium Association guidelines. These
                    may outline restrictions on modifications, paint colors, or
                    appliance types. Familiarize yourself with these guidelines
                    before embarking on your renovation journey.{" "}
                  </p>
                  <p>
                    By incorporating these tips and keeping Pilot House&#39;s unique
                    features in mind, you can design a kitchen that is both
                    beautiful and functional, a true reflection of your
                    waterfront paradise. Remember, even small changes can make a
                    big impact - so unleash your creativity and enjoy the
                    process of transforming your kitchen into a culinary oasis!
                  </p>
                </div>

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
        </div>

        <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
          <div className="flex flex-col pt-5 gap-5">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-2 ">
              <h2 className="uppercase font-semibold text-primary text-center text-xl font-montserrat">
                Recent Articles
              </h2>
              <button className="bg-white hover:bg-primary hover:text-white ease-in-out duration-200 rounded-full py-1 px-5 w-32 whitespace-nowrap font-semibold text-black/60 font-montserrat ">
                VIEW ALL
              </button>
            </div>
          </div>
          <div className="overflow-auto">
            <div className="min-w-[1200px] grid grid-flow-col  gap-4 overflow-x-scroll pb-3">
              {CondoLiving.map((item, index) => (
                <div
                  className="flex flex-col w-[260px] gap-1 col-span-1"
                  key={index}
                >
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
                  <p className="max-w-fit text-base text-black/55">
                    {item.descrp}
                  </p>
                </div>
              ))}
              {CondoLiving.map((item, index) => (
                <div
                  className="flex flex-col w-[260px] gap-1 col-span-1"
                  key={index}
                >
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
                  <p className="max-w-fit text-base text-black/55">
                    {item.descrp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
