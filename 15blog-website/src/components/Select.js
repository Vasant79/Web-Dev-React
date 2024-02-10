import React from "react";

//create select component -- we want that user shouls be able to manuplate select forwardRef

const Select = React.forwardRef(function Select(
  {
    className = "m-4 border-2 border-gray-400 rounded-xl",
    label,
    options,
    ...props
  },
  ref
) {
  const renderOptions = options.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <div>
      <label>{label}</label>
      <select className={className} {...props} ref={ref}>
        {renderOptions}
      </select>
    </div>
  );
});

export default Select;
