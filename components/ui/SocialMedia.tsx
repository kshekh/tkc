"use client";
import React from "react";
import Icon from "./Icon";
import Link from "next/link";
interface SocialMediaProps {
  gap: string;
  size: string;
  iconSize: string;
  width: string;
}

const socialIcons = [
  { link: "/#", icon: "fb" },
  { link: "/#", icon: "ig" },
  { link: "/#", icon: "tiktok" },
  { link: "/#", icon: "x" },
  { link: "/#", icon: "linkedin" },
];

 const SocialMedia: React.FC<SocialMediaProps> = ({ gap, size, width, iconSize }) => {
  return (
    <div className={`flex ${gap ? gap : 'gap-2'} ${width ? width : 'lg:min-w-72'} justify-between items-center`}>
      {socialIcons.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={`text-white ${size ? size : 'w-8 lg:w-12 h-8 lg:h-12'}  rounded-md flex justify-center items-center ease-in-out duration-200 hover:text-primary hover:bg-white`}
          >
            <Icon
              name={item.icon}
              className={`w-4 h-4 ${iconSize ? iconSize : 'lg:w-auto lg:h-auto'}`}
              size={28}
              color="currentColor"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialMedia;
