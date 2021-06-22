import React, { forwardRef, useState } from "react";

const CustomInput = (
  {
    component: Component = "input",
    className = "",
    wrapperClassName = "",
    labelClassName = "",
    label = "",
    wrapperProps,
    labelProps,
    onChange,
    ...props
  },
  ref
) => {
  const [hasVal, setHasVal] = useState(false);
  const change = (e) => (e.target.value ? setHasVal(true) : setHasVal(false));
  return (
    <div
      className={`wrap-input100 validate-input ${wrapperClassName}`}
      data-validate={`Enter ${label}`}
      {...wrapperProps}
    >
      <Component
        {...props}
        ref={ref}
        onChange={(e) => {
          change(e);
          onChange?.(e);
        }}
        className={`input100 ${
          hasVal || props.value ? "has-val" : ""
        } ${className}`}
      />
      <span
        {...labelProps}
        className={`focus-input100 ${labelClassName}`}
        data-placeholder={label}
      ></span>
    </div>
  );
};

export default forwardRef(CustomInput);
