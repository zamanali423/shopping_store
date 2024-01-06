import React from "react";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { addItems, delItems } from "../redux/slice/CartSlice";

const SinglePro = (props) => {
  const price = props.price + 300;
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {props.category.name}
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section id="showcase">
        <div className="container">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <p className="d-block">
            <span className="card-text">
              <strong>Price:{props.price}</strong>
            </span>
            <span className="ms-2 text-muted">
              <del>{price}</del>
            </span>
          </p>
          <a
            href="#"
            className="button-main btn btn-primary"
            onClick={() => dispatch(addItems(props))}
          >
            Add
          </a>
          <a href="#" className="button-main btn btn-primary ms-2"
          onClick={() => dispatch(delItems(props))}
          >
            Remove
          </a>
        </div>
      </section>

      <section className="main">
        <div className="container">
          <img src={props.images} alt="Product Image" />
        </div>
      </section>
    </>
  );
};

export default SinglePro;
