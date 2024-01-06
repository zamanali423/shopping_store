import React, { useContext } from "react";
import { CreateContext } from "../context/CreateContext";
import Products from "./Products";
const Home = () => {
  const data = useContext(CreateContext);

  return (
    <>
      <h2 className="text-center my-4">Featured products</h2>
      <div className="container-fluid d-flex flex-wrap justify-content-around">
        {data.state.map((items) => (
          <div
            className="card mb-3"
            key={items.id}
            style={{ maxWidth: "540px" }}
          >
            <Products {...items} />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => data.next()}
        >
          More
        </button>
      </div>
    </>
  );
};

export default Home;
