import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import heartfill from "./heartfill.svg";
import cart3 from "./cart3.svg";
import { Link } from "react-router-dom";
import Star from "./Star";
const Category = (props) => {
  const { id, title, price, image, rating, count } = props.data;
  const product = { id, title, image, price };
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
    alert("Product added to cart");
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
    alert("Product added to Wishlist");
  };

  return (
    <div class="col-sm-3">
      <Link to={"/product/detail/" + id} className="card">
        <img src={image} className="card-img-top" alt="..." />
        <span>
          <img id="heart" src={heartfill} alt="..." />
        </span>

        <div class="card-body">
          <h6 class="card-title">
            <b>Brand,</b>
            {title}
          </h6>
          <h6>{count}</h6>
          <h6>
            <span>$</span>
            {price}
          </h6>
          <div className="star-rating">
            <p className="card-text">
              <Star stars={rating.rate} reviews={rating.count} />
            </p>
          </div>
          <Link to={"/product/detail/" + id} class="btn btn-primary btn-block">
            <button
              className="btn btn-outline-dark m-2 align-center"
              onClick={() => handleCart(product)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to cart
            </button>
            <div className="wishC">
              {" "}
              <button
                href="#"
                className="btn btn-outline-dark"
                onClick={() => handleWish(product)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>{" "}
            </div>
          </Link>
        </div>
      </Link>
    </div>
  );
};
export default Category;
