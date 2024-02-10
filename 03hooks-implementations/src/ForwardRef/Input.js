import { forwardRef } from "react";

/**
 * By default dom of components are private
 * to expose it to parent component -- forWard ref is used
 *
 * step 1 --
 * write your component inside forward ref
 *  component = ForwardRef(  render function .... )
 *
 * render fn takes props and ref as arguments -- destructure your props for using
 *
 * add ref ={ref} to the dom element that is to be exposed
 */

const Input = forwardRef(function Input(props, ref) {
  const { label } = props;
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} />;
    </div>
  );
});

export default Input;
