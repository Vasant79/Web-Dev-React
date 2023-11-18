/**
 * Best Practice -- use PropeTypes when having prsops
 */

function ColorPicker({ color }) {
  function handleClick(event) {
    document.body.style.background = color;
  }
  return (
    <>
      <button onClick={handleClick}>{color}</button>
    </>
  );
}

export default ColorPicker;
