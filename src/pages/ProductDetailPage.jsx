import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetailPage = () => {
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

  const handleCart = (product) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
  };

  const handleWish = (product) => {
    console.log(product);
    const wish = JSON.parse(localStorage.getItem("wish")) || [];
    const isProductExist = wish.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedWish = wish.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("wish", JSON.stringify(updatedWish));
    } else {
      localStorage.setItem(
        "wish",
        JSON.stringify([...wish, { ...product, quantity: 1 }])
      );
    }
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
                width="300px"
              />
            </div>
            <h5 class="card-title small-text">
              <b>Brand</b>
              <br />
              {product.title}
              <br />
              <br />
              {product.description}
            </h5>
            <br />
            <div class="product-details">
              <h5 class="card-price small-text">
                <span>${product.price}</span>
              </h5>

              <div class="button-container">
                <button
                  onClick={() => handleCart(product)}
                  class="btn btn-primary add-to-cart"
                >
                  Add to Cart
                </button>

                <div class="wishP">
                  <button
                    href="#"
                    class="btn btn-outline-dark"
                    onClick={() => handleWish(product)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
