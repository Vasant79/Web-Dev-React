function Image({ image }) {
  return (
    <div className="card ">
      <img src={`${image.urls.small}`}></img>
    </div>
  );
}

export default Image;
