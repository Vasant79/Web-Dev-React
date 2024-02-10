/**
 * Best Practice -- use PropeTypes when having props
 */

function ColorPicker({ color }) {
  function handleClick() {
    document.body.style.background = color;
  }
  return (
    <>
      <span className="flex justify-center">
        <button
          className="mt-10 mb-5 w-32  bg-white border-2 shadwow-xl rounded-xl"
          onClick={handleClick}
        >
          {color}
        </button>
      </span>
    </>
  );
}

export default ColorPicker;
