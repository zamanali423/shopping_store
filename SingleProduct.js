import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CreateContext } from "../context/CreateContext";
import SinglePro from "./SinglePro";
import Products from "./Products";
import Home from "./Home";

const SingleProduct = (props) => {
  const params = useParams();
  const title = params.title;
  const single = useContext(CreateContext);
  return (
    <div>
      {single.cat.map((s) => (
        <div>{title == s.title && <SinglePro {...s} />}</div>
      ))}

      {/* <Home /> */}

      <footer>
        <p>&copy; 2023 Product Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SingleProduct;
