import "./ImageList.css";
import React from "react";
import { useImage } from "../context/ImageContext";
import ImageCard from "./ImageCard";

const ImageList = () => {
  const { images } = useImage();
  console.log(images);
  const imageList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
