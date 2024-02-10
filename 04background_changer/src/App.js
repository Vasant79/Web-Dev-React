import "./App.css";
import ColorPicker from "./Components/Resuable/ColorPicker";

function App() {
  /**
   * Made an Array of colors and used map
   */
  let color = [
    "Red",
    "Green",
    "Blue",
    "Pink",
    "Yellow",
    "Purple",
    "Orange",
    "Gray",
    "Brown",
    "Black",
  ];
  let renderOutput = color.map((eachColor) => {
    return <ColorPicker key={eachColor} color={eachColor} />;
  });

  return (
    <>
      <div>
        <div className=" mt-5 mb-5 pt-5 pb-5  text-4xl flex justify-center bg-white rounded-xl shadow-xl">
          Click on colors to change the background color
        </div>
        <div className=" grid grid-rows-10 content-center sm:grid-cols-2 md:grid-cols-4 md:content-center lg:grid-cols-5 lg:content-center">
          {renderOutput}
        </div>
      </div>
    </>
  );
}

export default App;
