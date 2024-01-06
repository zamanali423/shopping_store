import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { CreateContext } from "../context/CreateContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [text, setText] = useState("");

  let location = useLocation();
  const cat = useContext(CreateContext);
  let uniqueVal = [];
  const filteredArr = (cat) => {
    cat.cat.forEach((el) => {
      if (!uniqueVal.includes(el.category.name)) {
        uniqueVal.push(el.category.name);
      }
    });
    return uniqueVal;
  };
  filteredArr(cat);

  const onHandle = (e) => {
    e.preventDefault();
    setText("")
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const srch = useContext(CreateContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Products
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname == "/" ? "nav-link-active" : "nav-link"
                  } nav-link`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {uniqueVal.map((cats) => (
                <li className="nav-item">
                  <Link
                    className={`${
                      location.pathname == `/${cats}`
                        ? "nav-link-active"
                        : "nav-link"
                    }`}
                    to={`/category/${cats}`}
                  >
                    {cats}
                  </Link>
                </li>
              ))}
            </ul>
            <Cart />

            <form className="d-flex" onSubmit={onHandle}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={onChange}
              />

              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={() => srch.search(text)}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
