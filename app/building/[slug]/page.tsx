import { getDataBuilding } from "@/components/lib/helpers";
import { Suspense } from "react";
import * as React from "react";
import Image from "next/image";

import HeaderDetailPage from "./HeaderDetailPage";
import HeaderDetailPageSkelton from "./HeaderDetailPageSkelton";
import BuildingImageRow from "./BuildingImageRow";
import BuildingImageRowSkelton from "./BuildingImageRowSkelton";
import BuildingHighlightRow from "./BuildingHighlightRow";
import BuildingHighlightRowSkelton from "./BuildingHighlightRowSkelton";
import PageSection2Skelton from "./PageSection2Skelton";
import PageSection2 from "./PageSection2";

export default async function Page({ params }: { params: { slug: string } }) {
  //   console.log(bldg);

  // return <BuildingContent slug={params.slug} />;
  const { slug } = params;
  const bldg = await getDataBuilding(slug);

  // if (!bldg) return null;
  return (
    <>
      <Suspense fallback={<HeaderDetailPageSkelton />}>
        <HeaderDetailPage slug={slug} />
      </Suspense>
      <section className="relative">
        <div className="relative before:absolute before:inset-x-0 before:bottom-0 before:h-40 before:bg-gradient-to-t before:from-[#f2f2f2] before:to-transparent">
          {/* <img className="w-full" src="/images/details-banner.png" /> */}
          <Suspense fallback={<BuildingImageRowSkelton />}>
            <BuildingImageRow slug={slug} />
          </Suspense>
        </div>
        <div className="max-w-screen-wrap px-5 mx-auto w-full relative z-10">
          <Suspense fallback={<BuildingHighlightRowSkelton />}>
            <BuildingHighlightRow slug={slug} />
          </Suspense>
        </div>
      </section>
      <Suspense fallback={<PageSection2Skelton />}>
        <PageSection2 slug={slug} />
      </Suspense>
    </>
  );
}
