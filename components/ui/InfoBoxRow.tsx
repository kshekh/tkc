import { Interface } from "node:readline/promises";
import React from "react";

interface IboxData {
  title: string;
  descrip: string;
}
interface props {
  boxData: IboxData[];
}
function InfoBoxRow({ boxData }: props) {
  return (
    <div className="flex flex-col xs:grid xs:grid-cols-2 lg:grid-cols-4 gap-5">
      {boxData.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-md bg-white shadow-md p-5 xl:p-10 space-y-5"
          >
            <h3 className="text-xl uppercase text-primary font-semibold">
              {item.title}
            </h3>
            <p className="text-xl text-black/85">{item.descrip}</p>
          </div>
        );
      })}
    </div>
  );
}

export default InfoBoxRow;
