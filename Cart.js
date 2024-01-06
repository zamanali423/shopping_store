import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import df from "../../images/df.webp";
import { Link } from "react-router-dom";

const Cart = () => {
  const total = useSelector((state) => state.cart);
  return (
    <div>
      <button
        className="btn position-relative"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <AiOutlineShoppingCart className="cart me-3" />
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-primary">
          {total.length}
        </span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Products</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {total.map((item) => (
            <>
              <div
                className="card mb-3"
                key={item.id}
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.images}
                      className="rounded-start"
                      style={{ height: "100%", width: "100%" }}
                      alt="..."
                      onError={(e) => {
                        if (e.target.src !== item.images) {
                          e.target.onerror = null;
                          e.target.src = df;
                        }
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.slice(0, 19)}...
                      </h5>
                      <p className="card-text">
                        {item.description.slice(0, 50)}...
                      </p>
                      <Link to="/detail-customer" className="btn btn-success">CheckOut</Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
