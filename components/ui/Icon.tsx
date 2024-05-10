// components/Icon.tsx
import React from "react";
import { IconName } from "../../types";

interface IconProps {
  name: IconName | string;
  className?: string;
  color?: string;
  size?: number;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  color,
  size,
  stroke,
}) => {
  const IconSVG = require(`@/public/icons/${name}.svg`).default;
  return (
    <IconSVG
      name={name}
      className={className}
      fill={color}
      stroke={stroke}
      width={size}
      height={size}
    />
  );
};

export default Icon;
