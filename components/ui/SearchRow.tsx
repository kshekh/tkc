"use client";
import React, { Children, use } from "react";

interface ContainerProps {
  sectionTitle?: string; // Title is optional
  children?: any; // Title is optional
}

const SearchRow: React.FC<ContainerProps> = ({ sectionTitle, children }) => {
  // const { sectionTitle, Children } = props;

  return (
    <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
      <div className="flex flex-col pt-5 gap-5">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-2 ">
          <h2 className="uppercase font-semibold text-black/80 text-center text-xl font-montserrat">
            {sectionTitle} {}
          </h2>
          <button className="bg-white hover:bg-primary hover:text-white ease-in-out duration-200 rounded-full py-1 px-5 w-32 whitespace-nowrap font-semibold text-black/60 font-montserrat ">
            VIEW ALL
          </button>
        </div>
        <div className="overflow-auto">
          <div className="min-w-[1200px] overflow-auto pb-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchRow;
