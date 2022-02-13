import React from "react";
import clsx from "clsx";
import TextInputAdornment from "./TextInputAdornment";
import { stylex } from "helpers/functions";

const OutlinedTextInput: React.FC<Partial<OutlinedTextInputProps>> = ({
  label,
  name,
  value,
  type,
  maxWidth,
  startAdornment,
  endAdornment,
  startAdornmentProps,
  endAdornmentProps,
  labelProps,
  fieldsetProps,
  onChange,
  onFocus,
  onBlur,
  getContainer,
  fullWidth = false,
  focused = false,
  multiline = false,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [labelWidth, setLabelWidth] = React.useState("0");
  const containerRef = React.useRef<HTMLFieldSetElement>(null);
  const labelEl = React.useRef(null);

  React.useEffect(() => {
    if (labelEl.current) {
      setLabelWidth(getComputedStyle(labelEl.current).width);
    }

    if (containerRef.current && getContainer) {
      getContainer(containerRef.current);
    }
  }, [getContainer]);

  return (
    <fieldset
      {...fieldsetProps}
      ref={containerRef}
      className={clsx(
        "relative border border-solid rounded-md transition-all ease-in-out duration-300 mt-4 mb-2",
        fullWidth && "w-full",
        focused ? "border-2 border-primary-500" : "border-slate-800",
        fieldsetProps?.className
      )}
      style={stylex(fieldsetProps?.style, maxWidth && { maxWidth })}
    >
      <legend
        className="w-0 ml-3 transition-[width] ease-in-out duration-300"
        style={{
          width: focused && labelWidth,
        }}
      ></legend>
      <div className="flex items-center">
        {startAdornment && (
          <TextInputAdornment position="START" {...startAdornmentProps}>
            {startAdornment}
          </TextInputAdornment>
        )}
        <div className="relative flex-1">
          <label
            ref={labelEl}
            {...labelProps}
            className={clsx(
              "absolute top-2 left-3 pointer-events-none transition-all ease-in-out duration-300 text-lg",
              labelProps?.className,
              focused && "-translate-y-6 scale-[0.85] text-primary-500",
              focused && startAdornment && "-translate-x-12"
            )}
          >
            {label}
          </label>
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
        </div>
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
    </fieldset>
  );
};

export default OutlinedTextInput;
