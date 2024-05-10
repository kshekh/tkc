"use client";
import * as React from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const progressBar = [
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
  {
    label: "This is a great boutique building!",
    description:
      "Beach House 8 is an exclusive mid-rise condominium building located on the beachfront in Miami Beach, FL at 3651 Collins Avenue. Conveniently located, it is within walking distance to South Beach.",
    commentor: "Johny B. Miami, FL",
    progresses: [
      {
        plabel: "amenities",
        progress: 70,
      },
      {
        plabel: "location",
        progress: 70,
      },
      {
        plabel: "price",
        progress: 70,
      },
      {
        plabel: "management",
        progress: 50,
      },
      {
        plabel: "community",
        progress: 70,
      },
    ],
  },
];

const BuildingReviewsBtn = [
  { label: "Write a review", url: "/#" },
  { label: "View all", url: "/#" },
];

export default function BuildingReviews(params: { bldg: any; rvws: any }) {
  const { bldg, rvws } = params;
  // const bldg = await getDataBuilding(slug);
  // console.log(bldg);
  // console.log(bldg?.media);
  console.log(rvws);
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return (
        '<span class="!w-3 !h-1 !rounded-none ' +
        className +
        '"><span class="opacity-0 leading-none hidden">' +
        (index + 1) +
        "</span></span>"
      );
    },
  };

  return (
    <div className="shadow-1 w-full rounded bg-white p-5 lg:p-10">
      <div className="lg:gap-5 lg:grid lg:grid-cols-12 ">
        <div className="space-y-2 lg:space-y-5 flex flex-col lg:col-span-2 xl:col-span-3">
          <h4 className="text-primary text-3xl 2xl:text-5xl font-normal flex-1 text-center lg:text-left ">
            Building <br className="hidden lg:block" /> Reviews
          </h4>

          <div className="gap-2 flex flex-wrap items-center justify-center lg:justify-start  ">
            {BuildingReviewsBtn.map((items, index) => (
              <Link
                key={index}
                className="h-9 text-sm bg-white hover:bg-primary hover:text-white ease-in-out duration-200 shadow-2 border border-black/20 text-black/40 uppercase font-montserrat font-bold relative whitespace-nowrap z-10 rounded py-1 px-3 flex justify-center items-center"
                href={items.url}
              >
                {items.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-10 xl:col-span-9 pt-5 lg:pt-0 max-w-screen">
          <Swiper
            navigation={true}
            pagination={pagination}
            modules={[Navigation, Pagination]}
            className="mySwiper !pb-5"
          >
            {rvws.data.rows.map((item: any, index: number) => {
              const rating_amenities =
                (parseInt(item.rating_amenities) / 5) * 100;
              const rating_location =
                (parseInt(item.rating_location) / 5) * 100;
              const rating_price = (parseInt(item.rating_price) / 5) * 100;
              const rating_management =
                (parseInt(item.rating_management) / 5) * 100;
              const rating_community =
                (parseInt(item.rating_community) / 5) * 100;
              return (
                <SwiperSlide key={index}>
                  <div className="md:grid-cols-12 md:grid flex flex-col gap-10 lg:px-5 xl:px-12">
                    <div className="col-span-7">
                      <div className="max-w-md flex flex-col space-y-4">
                        <h4 className="text-primary font-montserrat text-lg font-semibold">
                          {item.review_title}
                        </h4>
                        <p className="text-black/90 text-lg font-normal leading-snug max-h-64 overflow-y-auto">
                          {item.review_body}
                        </p>
                        <p className="text-black/75 text-sm font-normal leading-snug">
                          {item.first_mame}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col col-span-5 space-y-4">
                      <div className="flex flex-col lg:flex-row gap-1 w-full lg:items-center">
                        <span className="text-primary font-montserrat text-sm font-semibold uppercase w-40">
                          {/* rating_amenities, rating_location, rating_price, rating_management, rating_community */}
                          amenities
                        </span>
                        <div className="w-56 bg-black/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: rating_amenities + "%" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-1 w-full lg:items-center">
                        <span className="text-primary font-montserrat text-sm font-semibold uppercase w-40">
                          {/* rating_amenities, rating_location, rating_price, rating_management, rating_community */}
                          location
                        </span>
                        <div className="w-56 bg-black/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: rating_location + "%" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-1 w-full lg:items-center">
                        <span className="text-primary font-montserrat text-sm font-semibold uppercase w-40">
                          {/* rating_amenities, rating_location, rating_price, rating_management, rating_community */}
                          price
                        </span>
                        <div className="w-56 bg-black/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: rating_price + "%" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-1 w-full lg:items-center">
                        <span className="text-primary font-montserrat text-sm font-semibold uppercase w-40">
                          {/* rating_amenities, rating_location, rating_price, rating_management, rating_community */}
                          management
                        </span>
                        <div className="w-56 bg-black/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: rating_management + "%" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-1 w-full lg:items-center">
                        <span className="text-primary font-montserrat text-sm font-semibold uppercase w-40">
                          {/* rating_amenities, rating_location, rating_price, rating_management, rating_community */}
                          community
                        </span>
                        <div className="w-56 bg-black/10 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: rating_community + "%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
