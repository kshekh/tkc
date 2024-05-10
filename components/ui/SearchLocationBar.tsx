"use client";
// @ts-nocheck
import React, { useEffect, useState, useRef, Fragment } from "react";
import Icon from "@/components/ui/Icon";
import useDebounce from "@/components/lib/useDebounce";
import useShopStore from "@/components/data/storeShop";
import { createClient } from "@supabase/supabase-js";

const SearchLocationBar = (parameters: any) => {
  const { border, context } = parameters;
  const [currentLocation, doSearchLocationById, doSearchBuilding, goToPage] =
    useShopStore((state) => [
      state.currentLocation,
      state.doSearchLocationById,
      state.doSearchBuilding,
      state.goToPage,
    ]);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [clientLoaded, setClientLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLocationResults, setShowLocationResults] = useState(false);

  useEffect(() => {
    console.log("SaleSearchLocation mounted");
    setClientLoaded(true);
    return () => {
      console.log("SaleSearchLocation unmounted");
    };
  }, []);

  //   Search Window Toggle
  const [searchOnMobile, setSearchOnMobile] = useState(false);
  const searchToggle = (event: any) => {
    // 👇️ toggle searchOnMobile state variable
    setSearchOnMobile((current) => !current);
  };

  const debouncedSearch = useDebounce(search, 300);
  const handleChangeLocation = (locationIndex: number) => {
    setShowLocationResults(false);
    setLocations([]);
    setSearch((prevSearch) => "");
    const l = locations[locationIndex] as {
      location_type: string;
      id: string;
      canonical_slug: string;
    }; // Add the 'canonical_slug' property to the type
    console.log("l", l);

    const chngLocation = async () => {
      if (l.location_type == "building") {
        // const r = await doSearchBuilding(locations[locationIndex]);
        // window.location.assign(`/building/${l.canonical_slug}`);
        // goToPage("detail");
      } else {
        doSearchLocationById(l.id);
      }
    };
    chngLocation();
  };
  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    if (val.length > 0) {
      setShowLocationResults(true);
      setSearch(val);
    } else {
      setShowLocationResults(false);
      setSearch(val);
      setLocations([]);
    }
  };

  useEffect(() => {
    // search the api

    async function fetchData() {
      setLoading(true);

      setLocations([]);
      const { data, error } = await supabase
        .from("vw_search")
        .select()
        .like("search", `${debouncedSearch}%`)
        .order("listings", { ascending: false })
        .limit(50);
      console.log("error datam", { error });
      console.log("datam", { data });
      // @ts-ignore
      setLocations(data);
      // const datam = await fetch(
      // 	`https://track.condo.com/svc/typeahead.php?country_filter=US_CA&from=0&index=locations.location,buildings.building&loctype=place,zipcode,neighborhood,metro,building&qmod=prefix&size=75&q=${debouncedSearch}`
      // ).then((res) => res.json());
      // setLocations(datam.locations);
      setLoading(false);
      // setShowLocationResults((prevShowLocationResults)=>true);
    }

    if (debouncedSearch) fetchData();
  }, [debouncedSearch]);

  return (
    <>
      <div
        className={` flex flex-1 sm:relative sm:inset-auto sm:flex sm:items-center sm:p-0 sm:pt-0  `}
      >
        <button
          type="button"
          onClick={searchToggle}
          className="absolute top-0 right-0 flex items-center justify-center rounded-md py-1 px-3 text-xl text-gray-400 hover:bg-gray-700 hover:text-white sm:hidden sm:py-2"
        >
          <i className="ri-close-line"></i>
        </button>
        <div
          className={`group relative flex w-full flex-wrap  bg-white p-1 pl-10 text-sm ring-blue-1  duration-300 ease-in-out sm:p-2.5 sm:pl-10 rounded sm:rounded-full ${border} `}
        >
          <div className="absolute  z-10 inset-y-0 left-0 flex items-center pl-3 font-semibold text-black/40 focus-within:border-blue-1 ">
            <Icon
              name="search"
              color="currentColor"
              size={24}
              className="text-black/40"
            />
          </div>

          {!clientLoaded && (
            <ul className="flex w-full md:flex-nowrap items-center gap-1 font-montserrat xl:pr-3 overflow-hidden">
              <li
                className={`inline-flex items-center rounded bg-primary py-0.5 px-1 text-xs font-semibold leading-none text-white group-hover:hidden ease-in-out duration-200 sm:px-2 sm:text-sm `}
              >
                Loading....
              </li>
            </ul>
          )}
          {clientLoaded && (
            <ul className="flex w-full md:flex-nowrap items-center gap-1 font-montserrat xl:pr-3 overflow-hidden">
              <li
                className={`inline-flex items-center rounded bg-primary py-0.5 px-1 text-xs font-semibold leading-none text-white group-hover:hidden ease-in-out duration-200 sm:px-2 sm:text-sm `}
              >
                {currentLocation?.label}
              </li>

              <li className="relative flex-1 ease-in-out duration-200">
                <input
                  type="search"
                  className="transitions h-8 w-full border-collapse truncate rounded-full border border-none border-transparent bg-transparent p-1 pl-2 font-montserrat text-xs font-semibold text-black/70 placeholder-black/45 outline-none ease-in-out duration-200 ring-opacity-0 hover:ring-opacity-0 focus:border-0 focus:outline-none  focus:ring-0 focus:ring-opacity-0  sm:text-sm "
                  placeholder="Search for buildings by name, city or zip"
                  value={search}
                  onChange={handleSearchTypeChange}
                />
              </li>
            </ul>
          )}
        </div>
      </div>
      {showLocationResults && (
        <div className="absolute mt-0 w-auto    bg-transparent px-6  ">
          <div className="  mt-0 w-auto rounded-b-xl border border-t-0 border-black/30 bg-white p-2 shadow-lg">
            <div className="min-h-20 on-hover-scroll flex max-h-72 flex-col overflow-x-hidden overflow-y-scroll">
              {locations.map(
                (
                  l: {
                    _id: number;
                    location_type: string;
                    label: string;
                    label_alt: string;
                  },
                  idx
                ) => {
                  return (
                    <button
                      type="button"
                      key={l._id}
                      onClick={(e) => {
                        handleChangeLocation(idx);
                      }}
                      className="group block w-full"
                    >
                      <span className="flex items-center gap-2 p-2 text-sm font-semibold text-black/70 duration-300 ease-in-out group-hover:bg-blue-1/10 ">
                        {l.location_type == "building" ? (
                          <i className="ri-building-4-line text-lg font-normal leading-none text-blue-1 duration-300 ease-in-out"></i>
                        ) : (
                          <i className="ri-map-pin-line text-lg font-normal leading-none text-blue-1 duration-300 ease-in-out"></i>
                        )}

                        <span className="font-montserrat leading-none ">
                          <span>{l.label} </span>
                          <span className="text-xs text-black/45">
                            {`${
                              l.location_type == "building"
                                ? " (" + l.label_alt + ")"
                                : ""
                            }`}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchLocationBar;
