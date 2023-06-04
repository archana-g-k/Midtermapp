import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faCartShopping,
  faHeart,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const WishListPage = () => {
  const navigate = useNavigate();

  const wishes = JSON.parse(localStorage.getItem("wish")) || [];

  const removeProduct = (id) => {
    const updatedWish = wishes.filter((item) => item.id !== id);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
    navigate("/wishlist");
  };

  return (
    <div className="wish">
      <Navbar1 />
      <Navbar2 />
      <p className="cartDef"></p>
      <Link to="/" className="p-5">
        <a className="btn btn-outline-dark m-2 align-center">
          Back to Home Page
        </a>
      </Link>

      {wishes?.map((wish) => {
        return (
          <div className="col-md-3 mt-5 p-3">
            <div className="card h-100 text-center p-4 small-card">
              <div className="card-body small-card-body">
                <img
                  src={wish?.image}
                  alt=""
                  className="img-fluid"
                  width="200px"
                />

                <h5 className="card-title mb-3 small-text">{wish.title}</h5>
                <button
                  className="delete-button"
                  onClick={() => {
                    removeProduct(wish?.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                </button>
                <div className="divW">
                  <a>
                    <FontAwesomeIcon icon={faHeartCircleCheck} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListPage;
