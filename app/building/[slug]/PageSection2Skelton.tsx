import { getDataBuilding } from "@/components/lib/helpers";

import { Suspense } from "react";

import BuildingInformation from "./BuildingInformation";
import { Skeleton } from "@/components/ui/skeleton";
export default async function PageSection2Skelton() {
  // console.log(bldg);
  // console.log(bldg?.media);

  return (
    <>
      {/* Building Information */}
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-3">
        <div className="flex flex-row gap-4">
          <Skeleton className="w-3/4 h-96" />
          <Skeleton className="w-1/4 h-96" />
        </div>
      </section>
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-3">
        <div className="flex flex-row gap-4">
          <Skeleton className="w-full h-96" />
        </div>

        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-96" />

          <Skeleton className="w-full h-96" />
          <Skeleton className="w-full h-96" />
        </div>
      </section>
    </>
  );
}
