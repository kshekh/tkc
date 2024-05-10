"use client";
import React, { useEffect, useState } from "react";
import useGetBuildings from "@/components/lib/useGetBuildings";
import ProductCard from "./BuildingCard";
import useShopStore from "@/components/data/storeShop";
import { Skeleton } from "./skeleton";
import { getBuildings, QueryBuildings, getURL } from "@/components/lib/helpers";
import useSWR from "swr";
import { searchTypes } from "@/components/utils/utils";

const loadSearchData = async (params: any[]) => {
  try {
    const [srch_type, loc_type, loc_id, search_type_id] = params;
    const searchTypeId = parseInt(search_type_id);

    if (!loc_id) return;
    const fetchUrl = getURL(
      `/api/buildings/tiny-search?location_type=${loc_type}&location_id=${loc_id}&search_id=${searchTypeId}`
    );
    console.log("fetchUrl", srch_type, fetchUrl);
    const { data } = await fetch(fetchUrl).then((res) => res.json());
    console.log("dataXXX", fetchUrl, data);
    return data;
  } catch (error) {
    console.error("Error fetching records", error);
  }
};
interface ContainerProps {
  sectionTitle?: string; // Title is optional
  searchTypeId?: number; //
}

const MiniSearchRow = (props: ContainerProps) => {
  const { sectionTitle, searchTypeId } = props;
  const searchType: any = searchTypes.find(
    (item: any) => item.id === searchTypeId
  );
  const sectionLabel = sectionTitle || searchType?.label || "";
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const [clientReady, setClientReady] = useState(false);
  const [currentLocation] = useShopStore((state) => [state.currentLocation]);
  const [location, setLocation] = useState<any | null>(null);
  // @ts-ignore
  const { data } = useSWR(
    ["ts", location?.location_type, location?._id, searchTypeId],
    loadSearchData
  );

  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState<any[] | null>(null);

  useEffect(() => {
    setClientReady(true);
  }, []);

  useEffect(() => {
    if (currentLocation && clientReady) {
      console.log("currentLocation", currentLocation);
      console.log("currentLocation", location);
      if (
        // @ts-ignore
        currentLocation?._id != location?._id &&
        currentLocation?._id != null
      ) {
        // @ts-ignore
        setLocation((prevLoc) => currentLocation);
      }
    }
  }, [currentLocation, clientReady, location]);

  useEffect(() => {
    console.log("uef data", data);
    if (data) {
      setRecords(data);
    }
  }, [data]);

  if (records && records.length == 0) return null;
  return (
    <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
      <div className="flex flex-col pt-5 gap-5">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-2 ">
          <h2 className="uppercase font-semibold text-black/80 text-center text-xl font-montserrat">
            {sectionLabel}
          </h2>
          <button className="bg-white hover:bg-primary hover:text-white ease-in-out duration-200 rounded-full py-1 px-5 w-32 whitespace-nowrap font-semibold text-black/60 font-montserrat ">
            VIEW ALL
          </button>
        </div>
        <div className="overflow-auto">
          <div className="min-w-[1200px] overflow-auto pb-3">
            {!records && (
              <div className="grid grid-cols-4  gap-5">
                {[1, 2, 3, 4].map((item, index) => {
                  return <Skeleton key={index} className="h-96 w-80" />;
                })}
              </div>
            )}
            {records && (
              <div className="grid grid-cols-4  gap-5">
                {records.map((item, index) => {
                  return (
                    <ProductCard
                      key={index}
                      image={`${item.img}`}
                      alt={item.bld_name}
                      title={item.bld_name}
                      describ={`${item.address} ${item.city}, ${item.state} ${item.zip}`}
                      unit={item.total_units}
                      price={item.act_avg_sale_price_fmt_km}
                      priceDigit={item.price}
                      button={true}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSearchRow;
