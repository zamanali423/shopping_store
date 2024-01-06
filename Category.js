import React, { useContext } from "react";
import { CreateContext } from "../context/CreateContext";
import { useParams } from "react-router-dom";
import CatProduct from "./CatProduct";

const Category = () => {
  const category = useContext(CreateContext);
  const y = useParams();
  const s = y.name;
  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        {category.cat.map((itm) => (
          <div className="card mb-3" key={itm.id} style={{ maxWidth: "540px" }}>
            <>
              {s === "Shoes" && itm.category.name === "Shoes" ? (
                <CatProduct {...itm} />
              ) : null}
            </>
            <>
              {s === "Clothes" && itm.category.name === "Clothes" ? (
                <CatProduct {...itm} />
              ) : null}
            </>
            <>
              {s === "Electronics" && itm.category.name === "Electronics" ? (
                <CatProduct {...itm} />
              ) : null}
            </>
            <>
              {s === "Forniture" && itm.category.name === "Forniture" ? (
                <CatProduct {...itm} />
              ) : null}
            </>
            <>
              {s === "Miscellaneous" &&
              itm.category.name === "Miscellaneous" ? (
                <CatProduct {...itm} />
              ) : null}
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
