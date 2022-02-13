import clsx from "clsx";
import React from "react";

const Avatar: React.FC<Partial<AvatarProps>> = ({
  shape = "ROUNDED",
  size = "M",
  image,
  alt,
  children,
  ...props
}) => {
  const shapes = {
    NORMAL: "rounded-none",
    ROUNDED: "rounded-md",
    CIRCLE: "rounded-full",
  };
  const sizes = {
    XS: "h-6 w-6",
    S: "h-8 w-8",
    M: "h-12 w-12",
    L: "h-20 w-20",
    XL: "h-32 w-32",
    XXL: "h-64 w-64",
  };

  return (
    <div
      {...props}
      className={clsx(
        "relative flex justify-center items-center text-white overflow-hidden",
        !image && "bg-primary-500",
        sizes[size],
        shapes[shape],
        props?.className
      )}
    >
      {image ? <img src={image} alt={alt} /> : children}
    </div>
  );
};

export default Avatar;
