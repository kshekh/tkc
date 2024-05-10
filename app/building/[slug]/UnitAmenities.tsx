import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";

import Icon from "@/components/ui/Icon";
export default async function UnitAmenities(params: { slug: any }) {
  const { slug } = params;
  const bldg = await getDataBuilding(slug);
  // console.log(bldg);
  // console.log(bldg?.media);
  return (
    <div className="shadow-1 w-full rounded bg-white p-5 xs:p-10 gap-5 flex flex-col lg:flex-row flex-wrap">
      <h4 className="text-primary text-3xl 2xl:text-5xl font-normal text-center lg:text-left w-auto lg:w-40 xl:w-80 max-w-full">
        Units <br className="hidden lg:block" /> Amenities
      </h4>
      <div className="flex flex-col xs:grid xs:grid-cols-2 md:grid-cols-3 gap-5 flex-1">
        {bldg?.extended_details?.amenities_unit.map(
          (item: string, index: number) => (
            <div className="space-y-2" key={index}>
              <p className="flex items-center gap-4">
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
            </div>
          )
        )}
      </div>
    </div>
  );
}
