import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Constants from "../api/Constants";

import Navbar1 from "../components/Navbar1";

import Navbar2 from "../components/Navbar2";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart-actions";
import { deleteFromCart } from "../redux/actions/cart-actions";
import { getNumberFromCart } from "../redux/actions/cart-actions";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_ID_URL + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  const onClickHandler = () => {
    dispatch(addToCart(product));
  };
  const onClick = () => {
    dispatch(deleteFromCart(product));
  };
  const onClic = () => {
    dispatch(getNumberFromCart(product));
  };
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt=""
                className="img-fluid"
                width="500px"
              />
            </div>
            <h5 class="card-title">
              <b>Brand</b>
              <br />
              {product.title}
            </h5>
            <br />
            <h5 class="card-price">
              <span>${product.price}</span>
            </h5>
            <div className="col-md-6">
              <button onClick={onClickHandler} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
            <div className="col-md-6">
              <button onClick={onClick} className="btn btn-primary">
                Delete from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
