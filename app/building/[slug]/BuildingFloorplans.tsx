import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";

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

export default async function BuildingFloorplans(params: { slug: any }) {
  const { slug } = params;
  const bldg = await getDataBuilding(slug);
  // console.log(bldg);
  // console.log(bldg?.media);
  if (!bldg?.plans) return null;
  return (
    <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 lg:flex lg:flex-row flex-wrap">
      <h4 className="text-primary text-3xl 2xl:text-5xl font-normal w-auto lg:w-40 xl:w-80 max-w-full text-center lg:text-left">
        Building <br className="hidden lg:block" /> Floorplans
      </h4>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 flex-1 p-5 lg:pt-0">
        {bldg?.plans.map((item: any, i: number) => (
          <div className=" flex flex-col gap-4" key={i}>
            <div className="overflow-hidden justify-center flex">
              <Image
                src={`${item.md}`}
                width={256}
                height={217}
                className="object-cover w-full sm:w-auto h-auto"
                alt=""
              />{" "}
            </div>
            <div className="space-y-1">
              <h4 className="text-center text-black/75 text-xl font-semibold uppercase">
                {item.caption}
              </h4>
              {/* <p className="text-center text-lg font-medium text-black/55">
                {item.bd}bd {item.ba}ba - {item.area} sqft
              </p>
              <p className="text-center text-lg font-medium text-black/55">
                {item.terraces}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
