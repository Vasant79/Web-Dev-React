import "./App.css";
import ColorPicker from "./Components/Resuable/ColorPicker";

function App() {
  /**
   * Made an Array of colors and used map
   */
  let color = [
    {
      name: "Grey",
      code: "#EFECEC",
    },
    { name: "Peach", code: "#FFB0B0" },
    { name: "Navy", code: "#0C2D57" },
    { name: "Teal", code: "#8CB9BD" },
    { name: "Orange", code: "#ECB159" },
    { name: "Sage", code: "#ADBC9F" },
    { name: "Winter", code: "#FBFADA" },
    { name: "Maroon", code: "#720455" },
    { name: "Beige", code: "#E9D5CA" },
    { name: "Blue", code: "#40A2E3" },
  ];
  let renderOutput = color.map((eachColor) => {
    return (
      <ColorPicker
        key={eachColor.name}
        color={eachColor.name}
        code={eachColor.code}
      />
    );
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
