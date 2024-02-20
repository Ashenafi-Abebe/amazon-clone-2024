import React from "react";
import { FadeLoader } from "react-spinners";
// import from classes "./"
// import Layout from "../LayOut/LayOut"
// import { DataContext } from "../DataProvider/DataProvider";
// import productCard from "../../components/Products/ProductCard"
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
