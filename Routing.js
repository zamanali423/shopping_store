import React from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import { CreateContext } from "../context/CreateContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import SingleProduct from "./SingleProduct";
import Form from "./Form";

const Routing = () => {
  const cat = useContext(CreateContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {cat.cat.map((category) => (
            <>
              <Route path="/" element={<Home />} />
              <Route
                path={`/category/:name`}
                element={<Category />}
              />
            </>
          ))}
          <Route path={`/category/:name/:title`} element={<SingleProduct />} />
          <Route path="/detail-customer" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
