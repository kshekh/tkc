import { getDataBuilding } from "@/components/lib/helpers";

import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default async function BuildingImageRow(params: { slug: any }) {
  const { slug } = params;
  const bldg = await getDataBuilding(slug);
  // console.log(bldg);
  // console.log(bldg?.media);
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex min-h-[310px] w-max space-x-4 p-4">
        {bldg?.media.map((img: any, idx: number) => {
          const img_base = `https://media1.condo.com/buildings/img/${bldg._id}/`;

          // detail_url: "/PropertyUploads/3851463/16ac8eca-6cc8-4234-83d0-b7f62a850213_dt.jpg",
          let mediaUrl = img?.detail_url;
          if (img?.detail_url?.includes("/building/media/")) {
            mediaUrl = img_base + img.detail_url.split("/building/media/")[1];
          }

          if (img?.detail_url?.includes(`/PropertyUploads/${bldg._id}/`)) {
            mediaUrl =
              img_base +
              img.detail_url.split(`/PropertyUploads/${bldg._id}/`)[1];
          }
          return (
            <figure key={idx} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={mediaUrl}
                  alt={`Photo by ${idx}`}
                  className="max-h-[300px]"
                />
              </div>
            </figure>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
