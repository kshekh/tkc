import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { Skeleton } from "@/components/ui/skeleton";
const links = [
  { lable: "Buy", link: "/#" },
  { lable: "rent", link: "/#" },
  { lable: "buildings", link: "/#" },
];
const add = [
  { lable: "add to watchlist", link: "/#" },
  { lable: "add to favorites", link: "/#" },
  { lable: "Request Infomation", link: "/#" },
];
function HeaderDetailPageSkelton() {
  return (
    <div className="max-w-screen-wrap px-5  mx-auto w-full ">
      <div className="bg-gray-100 rounded-b-md py-2 md:py-5 flex-col md:flex-row gap-2 flex justify-between items-center">
        <div>
          <div className="flex flex-wrap gap-y-2 gap-x-5 justify-between items-center flex-1 lg:flex-none mb-1 md:mb-5">
            <div className="gap-2 flex items-center">
              <Link
                href="#"
                className="text-black/50 hover:text-primary ease-in-out duration-200 uppercase inline-flex gap-1 items-center font-semibold"
              >
                <Icon
                  name="chevron-left"
                  color="currentColor"
                  size={13}
                  className="relative -top-0.5"
                  stroke="transparent"
                />{" "}
                Back to Results
              </Link>
            </div>
          </div>

          <div className="text-primary text-2xl md:text-3xl xl:text-5xl font-semibold">
            <Skeleton className="h-6 w-56 " />
          </div>
          <div className="gap-2 flex items-center">
            <Icon
              name="location"
              className="text-black/50 w-5 h-5 xl:w-auto xl:h-auto relative -top-0.5"
              size={15}
              color="currentColor"
              stroke="transparent"
            />
            <div className="text-black/50 text-xl xl:text-xl font-medium pt-4">
              <Skeleton className="h-4 w-60 " />
            </div>
          </div>
        </div>
        <div className="gap-2 flex flex-wrap sm:items-center flex-1 lg:flex-none ">
          {add.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="bg-white border-2 border-black/20 hover:bg-white/10 text-sm text-left w-36 leading-snug font-montserrat ease-in-out duration-200 rounded-md py-3 px-4 uppercase flex-1 font-bold text-black/50 hover:text-black"
              >
                {item.lable}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderDetailPageSkelton;
