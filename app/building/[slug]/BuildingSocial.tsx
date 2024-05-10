import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";

import { buldibngSocila } from "./fakedata.js";
export default async function BuildingSocial(params: { bldg: any }) {
  const { bldg } = params;

  // console.log(bldg);
  // console.log(bldg?.media);
  return (
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
  );
}
