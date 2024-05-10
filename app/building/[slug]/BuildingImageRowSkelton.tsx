import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

// export function SkeletonCard() {
//   return (
//     <div className="flex flex-col space-y-3">
//       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   );
// }

export default function BuildingImageRowSkelton() {
  // console.log(bldg?.media);
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {[...Array(15)].map((_, idx) => {
          return (
            <figure key={idx} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Skeleton className="h-[300px] w-[400px] rounded-xl" />
              </div>
            </figure>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
