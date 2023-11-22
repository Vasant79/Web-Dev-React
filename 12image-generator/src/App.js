import ImageSearch from "./Components/ImageSearch";
import fetchData from "./fetchData";
import Image from "./Components/Image";
import { useState } from "react";

import "../node_modules/bulma/css/bulma.css";
import "./App.css";

/*
task 
- make hhtp request
- take search term from user
- make that user serach serm go to fetch data function and then query params
- display pictures 
*/

function App() {
  // with every search we are storing array of img from api as statelear
  const [images, setImages] = useState([]);

  const data = async (term) => {
    const pictures = await fetchData(term);
    //not updating array in [...images, ----] format),
    //this used when we want something to adding state.
    setImages(pictures);
  };

  const renderImages = images.map((image) => {
    return <Image image={image} key={image.id} />;
  });

  return (
    <div>
      <ImageSearch data={data} />
      <div className="flex">{renderImages}</div>
    </div>
  );
}

export default App;
