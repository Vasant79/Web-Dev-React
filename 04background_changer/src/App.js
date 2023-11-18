import "./App.css";
import ColorPicker from "./Components/Resuable/ColorPicker";

function App() {
  /**
   * Made an Array of colors and used map
   */
  let color = ["Red", "Green", "Blue", "Pink", "Yellow"];
  let renderOutput = color.map((eachColor) => {
    return <ColorPicker key={eachColor} color={eachColor} />;
  });

  return (
    <>
      <div className="flex justify-center">{renderOutput}</div>
    </>
  );
}

export default App;
