import React from "react";
import Image from "next/image";
const boxes = [
  {
    thumb: "/images/dashbord-box-1.png",
    title: "BEACH HOUSE 8",
    selected: true,
  },
  {
    thumb: "/images/dashbord-box-2.png",
    title: "Brickell Flatiron",
    selected: false,
  },
  {
    thumb: "/images/dashbord-box-3.png",
    title: "jade signature",
    selected: false,
  },
  {
    thumb: "/images/dashbord-box-4.png",
    title: "BEACH HOUSE 8",
    selected: false,
  },
];

const list1 = boxes.slice(0, 2);
const list2 = boxes.slice(2, 4);

function DashboarSidebar() {
  return (
    <>
      <div className="flex flex-col flex-1 gap-4 border border-black/10 rounded-md bg-white p-2">
        <div className="flex flex-col gap-2 border-b border-black/10 pb-3">
          {list1.map((item, index) => (
            <div
              key={index}
              className={`border rounded-md overflow-hidden ${
                item.selected ? "border-primary" : "border-black/30"
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.thumb}
                  width={400}
                  height={200}
                  alt={item.title} className="w-full h-auto object-cover"
                />
              </div>
              <div className="py-2 px-3">
                <p
                  className={`font-semibold text-left uppercase ${
                    item.selected ? "text-primary" : "text-black/50"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-center text-black/60 font-semibold uppercase">
          Recommended buildings
        </h3>
        <div className="flex flex-col gap-2 ">
          {list2.map((item, index) => (
            <div
              key={index}
              className={`border rounded-md overflow-hidden ${
                item.selected ? "border-primary" : "border-black/30"
              }`}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.thumb}
                  width={400}
                  height={200}
                  alt={item.title} className="w-full h-auto object-cover"
                />
              </div>
              <div className="py-2 px-3">
                <p
                  className={`font-semibold text-left uppercase ${
                    item.selected ? "text-primary" : "text-black/50"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboarSidebar;
