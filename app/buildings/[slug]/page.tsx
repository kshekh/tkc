import { Suspense } from "react";
import * as React from "react";
import Image from "next/image";

import {
  getLocationFromSlug,
  getBuildings,
  QueryBuildings,
  getURL,
} from "@/components/lib/helpers";

import BuildingCard from "@/components/ui/BuildingCard";
import Icon from "@/components/ui/Icon";
// import HeaderDetailPage from "./HeaderDetailPage";
// import HeaderDetailPageSkelton from "./HeaderDetailPageSkelton";
// import BuildingImageRow from "./BuildingImageRow";
// import BuildingImageRowSkelton from "./BuildingImageRowSkelton";
// import BuildingHighlightRow from "./BuildingHighlightRow";
// import BuildingHighlightRowSkelton from "./BuildingHighlightRowSkelton";
// import PageSection2Skelton from "./PageSection2Skelton";
// import PageSection2 from "./PageSection2";
// { params }: { params: { slug: string } }
const getListings = async (params: any) => {
  try {
    const { slug } = params;
    console.log("slug", slug);
    const location = await getLocationFromSlug(slug);
    console.log("location", location);
    const { data: rtn, error } = location;
    const loc = rtn["data"];
    console.log("loc", loc);
    const query = {
      location_type: loc.location_type,
      location_id: loc._id,
      img_only: true,
      sort_id: 0,
      result_from: 0,
      result_size: 20,
    };
    const data = await getBuildings(query);
    console.log("datax", data?.rows);
    return { rows: data?.rows || [], total: data?.total || 0 };
  } catch (error) {
    console.error("Error fetching records", error);
    return { rows: [], total: 0 };
  }
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug?: string };
  searchParams?: {
    sortid?: number;
    page?: string;
  };
}) {
  //   console.log(bldg);
  // const searchQuery = URLSearchParams.query?.toString().toLowerCase();
  // return <BuildingContent slug={params.slug} />;
  const { slug } = params;
  const { sortid, page } = searchParams ?? {};
  // const bldgs = await getDataBuilding(slug);
  const data = await getListings({ slug });
  console.log("datay", data);
  const { rows, total } = data;
  // if (!bldg) return null;
  return (
    <>
      {slug} {sortid} {total && total} is the slug.
      {/* {data && <pre>{JSON.stringify(data, null, 4)}</pre>} */}
      <div className="max-w-screen-wrap px-5 mx-auto">
        <div className="py-5 xl:px-10 mx-auto w-full">
          <div className="flex flex-col pt-5 gap-5">
            <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                Price
              </div>
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                Units
              </div>
              <div className="shadow-md ring-2 ring-primary rounded bg-white text-center flex gap-1 py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                <span className="flex justify-between w-full max-w-40 ">
                  <span>12 mo Sales</span>
                  <span className="flex flex-col gap-[2px]">
                    <button className="relative text-black/20 hover:text-primary">
                      <Icon name="tringle-up" size={10} color="currentColor" />
                    </button>
                    <button className="relative text-black/20 hover:text-primary">
                      {" "}
                      <Icon
                        name="tringle-down"
                        size={10}
                        color="currentColor"
                      />
                    </button>
                  </span>
                </span>
              </div>
              <div className="shadow-md rounded bg-white text-center flex py-3 uppercase justify-center items-center font-bold text-primary text-xl">
                A - Z
              </div>
            </div>
            {rows && (
              <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
                {rows.map((item, index) => {
                  const slug = item.bld_slug
                    ? `${item.bld_slug}`
                    : `builging-id-${item.pbid}`;
                  return (
                    <BuildingCard
                      key={index}
                      image={`${item.img}`}
                      alt={item.bld_name}
                      title={item.bld_name}
                      describ={`${item.address} ${item.city}, ${item.state} ${item.zip}`}
                      unit={item.total_units}
                      price={item.act_avg_sale_price_fmt_km}
                      priceDigit={item.price}
                      button={true}
                      slug={slug}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
