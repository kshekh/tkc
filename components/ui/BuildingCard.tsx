"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { useRouter } from "next/navigation";
interface PageProps {
  image: string;
  alt: string;
  title: string;
  describ: string;
  unit: number;
  price: number;
  priceDigit: string;
  button: boolean;
  slug?: string;
}
const BuildingCard: React.FC<PageProps> = ({
  image,
  alt,
  title,
  describ,
  unit,
  price,
  priceDigit,
  button,
  slug,
}) => {
  const router = useRouter();
  const [favorite, setFavorite] = useState(false);
  const favoritesClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
    console.log("favorites clicked");
    return false;
  };
  const viewClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("view clicked");
    return false;
  };
  const cardClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("card clicked");
    router.push(`/building/${slug}`);
    return false;
  };
  return (
    <a
      className="flex flex-col border-t-8 border-primary rounded bg-white shadow-md"
      onClick={cardClick}
    >
      <div className="overflow-hidden flex-1 flex justify-center items-center ">
        <img
          src={`${image}`}
          alt={alt}
          className="object-cover max-w-[none] min-w-full h-auto min-h-full w-[250px] h-[150px]"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-between gap-2">
          <h3 className="text-xl uppercase text-primary font-semibold truncate">
            {title}
          </h3>{" "}
          <button onClick={favoritesClick} className="w-5 shrink-0">
            <Icon
              name={favorite ? "heartFill" : "heart"}
              size={20}
              color="currentColor"
              className={favorite ? "text-primary" : "text-black/10"}
            />
          </button>
        </div>
        <p className="text-xl text-black/55 max-w-72 font-semibold leading-snug">
          {describ}
        </p>
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-xs text-black/45 uppercase font-semibold leading-none">
              Units
            </p>
            <p className="text-xl text-black/55 font-semibold leading-none">
              {unit}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-black/45 uppercase font-semibold leading-none">
              Starting From
            </p>
            <p className="text-xl text-black/55 font-semibold leading-none">
              ${price}
              {/* {priceDigit} */}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={viewClick}
              className="bg-primary hover:bg-primary-2 ease-in-out duration-200 rounded font-semibold text-white w-20 xl:w-24 py-1 font-montserrat uppercase text-center"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BuildingCard;
