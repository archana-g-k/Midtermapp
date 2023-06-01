import heartfill from "./heartfill.svg";
import cart3 from "./cart3.svg";
import { Link } from "react-router-dom";
import Star from "./Star";
const Category = (props) => {
  const { id, title, price, image, rating, count } = props.data;

  return (
    <div class="col-sm-3">
      <div className="cardlink">
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
            <Link
              to={"/product/detail/" + id}
              class="btn btn-primary btn-block"
            >
              <span>
                {" "}
                <img src={cart3} className="cart-img-top" alt="..." />
              </span>
              Add to Cart
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Category;
