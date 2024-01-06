import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import df from '../images/df.webp'
import { useDispatch, useSelector } from 'react-redux';
import { addItems, delItems } from '../redux/slice/CartSlice';

const CatProduct = (props) => {
    const price = props.price + 300;
  const [currentDate, setCurrentDate] = useState(new Date(props.updatedAt));
  useEffect(() => {
    setCurrentDate(new Date(props.updatedAt));
  }, []);

  const total = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={`/category/${props.category.name}/${props.title}`}>
          <img
            src={props.images}
            className="rounded-start imgSize"
            alt="Loading..."
            onError={(e) => {
              if (e.target.src !== props.images) {
                e.target.onerror = null;
                e.target.src = df;
              }
            }}
          />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <span>
              <strong>Category:{props.category.name}</strong>
            </span>
            <span className="d-block">
              <span className="card-text">
                <strong>Price:{props.price}</strong>
              </span>
              <span className="ms-2 text-muted">
                <del>{price}</del>
              </span>
            </span>
            <p className="card-text">
              <small className="text-muted">
                Last updated {currentDate.getHours()} hours ago
              </small>
            </p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addItems(props))}
            >
              Add
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={() => dispatch(delItems(props))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatProduct
