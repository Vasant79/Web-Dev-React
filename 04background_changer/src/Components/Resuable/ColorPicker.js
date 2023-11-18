/**
 * Best Practice -- use PropeTypes when having props
 */

function ColorPicker({ color }) {
  function handleClick() {
    document.body.style.background = color;
  }
  return (
    <>
      <button
        className=" w-28 ml-2 mt-10 font-mono font-light  text-xl shadow-lg  bg-white rounded-lg border-1 border-black"
        onClick={handleClick}
      >
        {color}
      </button>
    </>
  );
}

export default ColorPicker;
