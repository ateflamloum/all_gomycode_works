// src/Image.js
import React from "react";

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ maxWidth: "100%" }} />;
};

export default Image;
