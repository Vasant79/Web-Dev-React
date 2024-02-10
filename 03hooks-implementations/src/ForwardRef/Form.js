import { useRef } from "react";
import Input from "./Input";

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <div>
      <form>
        <Input label="Name" ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default Form;
