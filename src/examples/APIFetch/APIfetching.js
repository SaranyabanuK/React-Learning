import React, { useState, useEffect } from "react";

export default function DogImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json())
    ]).then(results => {
      setImages(results.map(r => r.message));
    });
  }, []);

  return (
    <div>
      <h2>Random Dog Images</h2>
      {images.map((img, i) => (
        <img key={i} src={img} alt="dog" width={200} />
      ))}
    </div>
  );
}
