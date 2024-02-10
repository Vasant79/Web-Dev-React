import React from "react";
/**
 *  useForward -- reason i want to expose input dom -- to parent so that it can take its input
 */

const Input = React.forwardRef(function Input(
  { label, className = "m-4 border-2 border-gray-400 rounded-xl", ...props },
  ref
) {
  return (
    <div>
      <label>{label}</label>
      <input className={className} ref={ref} {...props} />
    </div>
  );
});
export default Input;
