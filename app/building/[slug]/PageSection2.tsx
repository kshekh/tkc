import { getDataBuilding, getBuildingReviews } from "@/components/lib/helpers";
import Image from "next/image";
import SearchRow from "@/components/ui/SearchRow";
import ProductCard from "@/components/ui/BuildingCard";
import NearByCities from "@/components/ui/NearByCities";

import BuildingInformation from "./BuildingInformation";
import BuildingAmenities from "./BuildingAmenities";
import BuildingReviews from "./BuildingReviews";
import BuildingUnits from "./BuildingUnits";
import BuildingFloorplans from "./BuildingFloorplans";
import BuildingIntel from "./BuildingIntel";
import BuildingSocial from "./BuildingSocial";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import BuildingLife from "./BuildingLife";

import { NearbyBuildings } from "./fakedata.js";
import UnitAmenities from "./UnitAmenities";
export default async function PageSection2(params: { slug: any }) {
  const { slug } = params;
  const bldg = await getDataBuilding(slug);
  const rvws = await getBuildingReviews(bldg._id);
  // console.log(bldg);
  // console.log(bldg?.media);
  if (!bldg) return null;
  return (
    <>
      {/* Building Information */}
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-3">
        <BuildingInformation bldg={bldg} />
      </section>
      {/*  Building Amenities */}
      <section className="max-w-screen-wrap mx-auto px-5 w-full pt-1">
        <BuildingAmenities slug={slug} />
      </section>
      {/*  Unit Amenities */}
      {bldg?.extended_details?.amenities_unit && (
        <section className="max-w-screen-wrap mx-auto px-5 w-full pt-1">
          <UnitAmenities slug={slug} />
        </section>
      )}
      {/*  Building Reviews */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full ">
        <BuildingReviews bldg={bldg} rvws={rvws} />
      </section>
      {/*  Building Real Estate Activity */}
      {/* <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full space-y-2">
        <BuildingUnits bldg={bldg} />
      </section> */}

      {/*   Building Floorplans */}
      <section className="max-w-screen-wrap mx-auto px-5 pt-1">
        <BuildingFloorplans slug={slug} />
      </section>

      {/*  Building Association & Management */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-full ">
        <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10 gap-5 flex flex-col lg:flex-row flex-wrap">
          <h4 className="text-primary text-3xl 2xl:text-5xl font-normal xl:max-w-md xl:w-full">
            Building Association <br className="hidden lg:block" />& Management
          </h4>

          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 xl:gap-4 flex-1">
            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                association fees
              </h5>
              <ul className="space-y-2 text-black/80">
                <li className="text-base font-medium">$3,500/mo</li>
                <li className="text-base font-medium">$2/sq.ft./mo</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                Building Association
              </h5>
              <ul className="space-y-4 text-black/80">
                <li className="text-base font-medium">
                  Beach House 8 - Association
                </li>
                <li className="text-base">
                  3651 Collins Avenue <br /> Miami Beach, FL 33140
                </li>

                <li className="text-base">
                  (800) 443 - 2343 <br /> info@hh8association.com
                </li>
              </ul>
            </div>

            <div className="flex flex-col space-y-2">
              <h5 className="text-primary font-montserrat text-sm font-semibold uppercase ">
                Management company
              </h5>
              <ul className="space-y-4 text-black/80">
                <li className="text-base font-medium">Property Manager, Inc</li>
                <li className="text-base">
                  3651 Collins Avenue <br /> Miami Beach, FL 33140
                </li>

                <li className="text-base">
                  (800) 443 - 2343 <br /> manager@mgmtcompany.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Intelligence */}
      {/* <section className="max-w-screen-wrap pt-1 mx-auto px-5 w-full">
        <BuildingIntel bldg={bldg} />
      </section> */}

      {/* NEW LISTING */}
      <section className="hidden max-w-screen-wrap pt-1 mx-auto px-5 w-full">
        <div className="justify-between rounded-md shadow-md bg-primary px-5 xl:px-10 flex flex-col lg:flex-row items-center pt-5 gap-5">
          <p className="text-white text-center lg:text-left text-xl lg:text-2xl xl:text-3xl max-w-2xl">
            Activate any building to receive branded marketing content delivered
            to your inbox for easy sharing
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-5">
            <div className="bg-white rounded-t-md p-5 pb-0">
              <h2 className="text-primary text-sm font-bold font-montserrat text-center ">
                NEW LISTING
              </h2>
              <p className="text-lg font-semibold text-black/80 text-center font-montserrat ">
                Brickell Tower
              </p>
              <p className="text-primary text-sm font-bold font-montserrat text-center uppercase whitespace-nowrap ">
                2bd 2ba $380,000
              </p>
              <Image
                src="/images/new-listing.png"
                alt="new listing"
                width={250}
                height={50}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Building social */}
      {/* <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-ful  ">
        <BuildingSocial bldg={bldg} />
      </section> */}

      {/* Condo living */}
      <section className="max-w-screen-wrap pt-1 mx-auto px-5 space-y-5 w-full ">
        <BuildingLife bldg={bldg} />
      </section>
      {/* Nearby Building */}
      <section className="hidden pt-1 ">
        <SearchRow sectionTitle="Nearby buildings">
          <div className="grid grid-cols-4 gap-5">
            {NearbyBuildings.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`/images/${item.image}`}
                  alt={item.alt}
                  title={item.title}
                  describ={item.describ}
                  unit={item.unit}
                  price={item.price}
                  priceDigit={item.priceDigit}
                  button={item.button}
                />
              );
            })}
          </div>
        </SearchRow>
      </section>
      {/* Nearby Cities */}
      <section className="hidden pt-1 pb-5">
        <NearByCities sectionTitle="Nearby cities" />
      </section>
    </>
  );
}
