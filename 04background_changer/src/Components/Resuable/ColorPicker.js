/**
 * Best Practice -- use PropeTypes when having props
 */

function ColorPicker({ color, code }) {
  function handleClick() {
    document.body.style.background = code;
  }
  return (
    <>
      <span className="flex justify-center">
        <button
          className="mt-10 mb-5  w-32  bg-white hover:bg-sky-500 hover:font-medium hover:text-white border-2 shadwow-xl rounded-full"
          onClick={handleClick}
        >
          {color}
        </button>
      </span>
    </>
  );
}

export default ColorPicker;
