import type { NextRequest } from "next/server";
import { getBuildings } from "@/components/lib/helpers";
export async function GET(request: NextRequest) {
  try {
    const qs = request.nextUrl.searchParams;

    console.log("qs", qs);
    console.log("qs.get(location_type)", qs.get("location_type"));
    console.log("qs.get(location_id)", qs.get("location_id"));
    console.log("qs.get(search_id)", qs.get("search_id"));
    console.log("qs.get(result_size)", qs.get("result_size"));
    const query = {
      location_type: qs.get("location_type") || "",
      location_id: Number(qs.get("location_id") || 0),
      img_only: Boolean(qs.get("img_only") || true),
      sort_id: Number(qs.get("search_id") || 0),
      result_from: 0,
      result_size: Number(qs.get("result_size") || 4),
    };
    const result = await getBuildings(query);
    console.log("result", result);
    return Response.json(result, { status: 200, statusText: "OK" });
  } catch (error: any) {
    return new Response(`error: ${error?.message}`, {
      status: 500,
    });
  }
}
