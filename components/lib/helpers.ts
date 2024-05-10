// This file contains helper functions that are used in multiple components
import { searchSorts } from "@/components/utils/utils";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const getURL = (strAppend: string | null) => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  if (strAppend) {
    url = url + strAppend;
  }
  return url;
};
export async function getLocationFromSlug(slug: string) {
  const lslug = slug.toLowerCase();
  const durl = `https://dapi.buildingadvisor.ai/webhook/get_loc.php?action=get_loc_by_slug&slug=${lslug}`;
  const res = await fetch(durl);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("getLocationFromSlug", durl, { res });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log("getLocationFromSlug", { data });
  // return {data: null, error: "Failed to fetch data"};
  return { data, error: null };
}

export async function getBuildingReviews(bldgId: number) {
  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log("pullListingReviews  query", bldgId);
  let q = supabase
    .from("tbl_building_reviews")
    .select("*", { count: "exact" })
    .eq("ref_property_id", bldgId);
  const { data, error, count } = await q;
  console.log("error pullListingReviews", { error });
  console.log("data pullListingReviews", { data });
  console.log("count pullListingReviews", { count });

  if (data) {
    return { data: { rows: data || [], total: count } };
  }
  return null;
}

export async function getDataBuilding(slug: string) {
  let id = 0;
  if (slug) {
    console.log("Building Slug", slug);
    if (typeof slug == "string") {
      const myArray = slug.split("-");
      const lastItem = parseInt(myArray[myArray.length - 1]);
      if (lastItem > 0) {
        console.log("Building ID", lastItem);
        id = lastItem;
      } else {
        console.log("No Building ID");
      }
    }
  }
  if (id === 0) {
    throw new Error("Unable to parse Building ID");
    return null;
  }
  const res = await fetch(
    `https://dapi.buildingadvisor.ai/webhook/get_bldg.php?bid=${id}`
  );
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("getDataBuilding", { res });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export type QueryBuildings = {
  location_type: string;
  location_id: number;
  img_only?: boolean;
  sort_id?: number;
  result_from?: number;
  result_size?: number;
};
export async function getBuildings(query: QueryBuildings) {
  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log("getListings  query", query);
  const query_test = {
    search_type: "location",
    location_id: 459,
    result_from: 0,
    ids: "",
    req_pg: 1,
    result_size: 4,
    filter_is_sold: false,
    filter_is_avail: false,
    sort_id: 3,
    sort: [{ total_units: "desc" }, { act_count_sale: "desc" }],
    page: 1,
  };
  let ltyp = query.location_type;
  let lsuffix = "_id";
  switch (query.location_type) {
    case "place":
      ltyp = "city";
      break;
    case "zipcode":
      ltyp = "zip";
      break;
    case "building":
      ltyp = "pbid";
      lsuffix = "";
      break;
  }
  const locFilterLbl = `${ltyp}${lsuffix}`;
  let q = supabase
    .from("vw_tbl_bldg_metrics")
    .select("*", { count: "exact" })
    .eq(locFilterLbl, query.location_id);

  if (query.img_only) {
    q.neq("img", null);
  }

  const sortId = query.sort_id || 0;
  const sorts = searchSorts.find((s) => s.id === sortId);
  // console.log("pullListings sorts", sorts);
  sorts?.fields.map((s) => {
    q = q.order(s.f, { ascending: s.asc, nullsFirst: s.nullsFirst });
  });
  const result_from = query?.result_from || 0;
  const result_size = query?.result_size || 50;
  if (result_from > 0) {
    q = q.range(result_from, result_from + result_size);
    // console.log("q range", { result_from, result_size });
  } else {
    q = q.limit(result_size);
    // console.log("q limit", { result_size });
  }
  // console.log({ result_from, result_size }, "q pullListings", { q });
  const { data, error, count } = await q;
  // console.log("error pullListings", { error });
  // console.log("data pullListings", { data });

  // console.log("count pullListings", { count });
  // console.log(
  //   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!pullListings  query",
  //   result_from,
  //   result_size,
  //   query
  // );
  if (data) {
    return { rows: data || [], total: count };
  }
}
