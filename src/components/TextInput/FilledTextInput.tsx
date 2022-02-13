import { stylex } from "helpers/functions";
import clsx from "clsx";
import React from "react";
import TextInputAdornment from "./TextInputAdornment";

const FilledTextInput: React.FC<Partial<FilledTextInputProps>> = ({
  value,
  type,
  name,
  maxWidth,
  startAdornment,
  endAdornment,
  containerProps,
  startAdornmentProps,
  endAdornmentProps,
  onFocus,
  onBlur,
  onChange,
  getContainer,
  fullWidth = false,
  multiline = false,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current && getContainer) {
      getContainer(containerRef.current);
    }
  }, [getContainer]);

  return (
    <div
      {...containerProps}
      ref={containerRef}
      className={clsx(
        "flex items-center rounded-md px-1 bg-white",
        fullWidth && "w-full",
        containerProps?.className
      )}
      style={stylex(containerProps?.style, maxWidth && { maxWidth })}
    >
      {startAdornment && (
        <TextInputAdornment position="START" {...startAdornmentProps}>
          {startAdornment}
        </TextInputAdornment>
      )}
      {multiline ? (
        <textarea
          name={name}
          value={value}
          className={clsx(
            "w-full py-3 bg-transparent focus:outline-none",
            !startAdornment && "pl-3",
            !endAdornment && "pr-3",
            inputProps?.className
          )}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          {...inputProps}
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          value={value}
          className={clsx(
            "w-full py-3 bg-transparent focus:outline-none",
            !startAdornment && "pl-3",
            !endAdornment && "pr-3",
            inputProps?.className
          )}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
      {(endAdornment || type === "password") && (
        <TextInputAdornment
          position="END"
          password={type === "password"}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
          {...endAdornmentProps}
        >
          {endAdornment}
        </TextInputAdornment>
      )}
    </div>
  );
};

export default FilledTextInput;
