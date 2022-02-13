interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "CONTAINED" | "OUTLINED" | "ICON" | "TEXT";
  icon: React.ReactNode;
  size: number | string;
  rounded: number | string;
  floating: boolean;
  fullWidth: boolean;
}

type ContainedButtonProps = Omit<ButtonProps, "variant" | "icon" | "size">;
type OutlinedButtonProps = Omit<ButtonProps, "variant" | "icon" | "size">;
type IconButtonProps = Omit<ButtonProps, "variant" | "rounded" | "fullWidth">;
type TextButtonProps = Omit<
  ButtonProps,
  "variant" | "icon" | "size" | "floating" | "rounded"
>;
