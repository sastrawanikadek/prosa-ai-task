interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: "NORMAL" | "ROUNDED" | "CIRCLE";
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  image: string;
  alt: string;
}
