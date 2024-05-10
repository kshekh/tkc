import type { NextRequest } from "next/server";
import { getLocationFromSlug } from "@/components/lib/helpers";
export async function GET(request: NextRequest) {
try {
    const qs = request.nextUrl.searchParams;

    console.log("qs", qs);
    console.log("qs.get(slug)", qs.get("slug"));
    const query = {
        location_type: qs.get("slug") || "",
    };
    const result = await getLocationFromSlug(query.location_type); // Fix: Pass the location_type property instead of the entire object
    console.log("result", result);
    return Response.json(result, { status: 200, statusText: "OK" });
} catch (error: any) {
    return new Response(`error: ${error?.message}`, {
      status: 500,
    });
  }
}
