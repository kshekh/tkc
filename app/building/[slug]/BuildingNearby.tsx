import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";

export default async function BuildingNearby(params: { slug: any }) {
  const { slug } = params;
  const bldg = await getDataBuilding(slug);
  // console.log(bldg);
  // console.log(bldg?.media);
  return (
    <div className="flex flex-wrap justify-between -mt-16 gap-1">
      <div className="bg-white flex-1 flex-col rounded-sm py-4 px-6 flex items-center shadow-1">
        <p className="text-primary text-sm font-medium text-left uppercase flex-1 pb-1">
          Total units
        </p>
        <div className="flex flex-col justify-center items-center flex-1">
          <h5 className="font-semibold text-4xl text-center text-black/75">
            {bldg?.location?.total_units}
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
          btn
        </div>
      </div>
    </div>
  );
}
