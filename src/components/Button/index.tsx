import React from "react";
import IconButton from "./IconButton";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";
import TextButton from "./TextButton";

const Button: React.FC<Partial<ButtonProps>> = ({
  variant,
  type = "button",
  icon,
  size,
  rounded,
  floating,
  fullWidth,
  children,
  ...buttonProps
}) => {
  switch (variant) {
    case "ICON":
      return (
        <IconButton
          type={type}
          icon={icon}
          size={size}
          floating={floating}
          {...buttonProps}
        />
      );
    case "CONTAINED":
      return (
        <ContainedButton
          type={type}
          rounded={rounded}
          floating={floating}
          fullWidth={fullWidth}
          {...buttonProps}
        >
          {children}
        </ContainedButton>
      );
    case "OUTLINED":
      return (
        <OutlinedButton
          type={type}
          rounded={rounded}
          floating={floating}
          fullWidth={fullWidth}
          {...buttonProps}
        >
          {children}
        </OutlinedButton>
      );
    default:
      return (
        <TextButton type={type} fullWidth={fullWidth} {...buttonProps}>
          {children}
        </TextButton>
      );
  }
};

export default Button;
