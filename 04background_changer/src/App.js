import "./App.css";
import ColorPicker from "./Components/Resuable/ColorPicker";

function App() {
  /**
   * Made an Array of colors and used map
   */
  let color = ["red", "green", "blue", "pink", "yellow"];
  let renderOutput = color.map((eachColor) => {
    return <ColorPicker key={eachColor} color={eachColor} />;
  });

  return (
    <>
      <div>{renderOutput}</div>
    </>
  );
}

export default App;
