"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { formatNumberWithCommas } from "../utils/utils";
interface PageProps {
  image: string;
  alt: string;
  title: string;
  address: string;
  price: number;
  link: string;
  forSale: number;
  area: number;
  bd: number;
  ba: number;
}
const UnitCard: React.FC<PageProps> = ({
  image,
  alt,
  title,
  address,
  price,
  link,
  forSale,
  area,
  bd,
  ba,
}) => {
  const [favorite, setFavorite] = useState(false);
  const favorites = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded bg-white shadow-md">
      <div className="overflow-hidden flex-1 flex justify-center items-center ">
        <Image
          src={`${image}`}
          alt={alt}
          width={250}
          height={150}
          className="object-cover max-w-[none] min-w-full h-auto min-h-full"
        />
      </div>
      {forSale && (
        <div className="bg-primary pb-1 pt-1.5 px-5 text-left xl:text-xl font-semibold text-white">
          #{forSale} For Sale
        </div>
      )}
      <div className="p-5 space-y-3">
        <div className="flex justify-between gap-2">
          <p className="font-semibold text-black/75 xl:text-xl flex gap-2">
            <span>{formatNumberWithCommas(area)} sq ft</span>
            <hr className="h-5 border border-black/10" />
            <span>
              {bd} bd {ba} ba
            </span>
          </p>{" "}
          <button onClick={favorites} className="w-5 shrink-0">
            <Icon
              name={favorite ? "heartFill" : "heart"}
              size={20}
              color="currentColor"
              className={favorite ? "text-primary" : "text-black/10"}
            />
          </button>
        </div>
        <p className="xl:text-3xl text-xl uppercase text-primary font-medium truncate">
          ${formatNumberWithCommas(price)}
        </p>
        <div className="flex flex-wrap justify-between items-end">
          <div className="space-y-1">
            <h3 className="xl:text-xl uppercase text-blac/60 font-semibold truncate">
              {title}
            </h3>
            <p className="xl:text-xl text-black/55 max-w-72 font-semibold leading-snug">
              {address}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href={link}
              className="bg-primary hover:bg-primary-2 ease-in-out duration-200 rounded font-semibold text-white w-24 py-1  font-montserrat uppercase text-center"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
