import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const navigate = useNavigate();

  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div className="cart">
      <Navbar1 />
      <Navbar2 />
      <p className="cartDef"></p>
      <Link to="/" className="p-5">
        <button className="btn btn-outline-dark m-2 align-center">
          Back to Home Page
        </button>
      </Link>

      {carts?.map((cart) => {
        return (
          <div className="col-md-2 mt-5 p-3">
            <div className="card h-100 text-center p-4 small-card">
              <div className="card-body small-card-body">
                <img
                  src={cart?.image}
                  alt=""
                  className="img-fluid"
                  width="400px"
                />

                <h5 className="card-title mb-3 small-text">{cart.title}</h5>
                <button
                  className="delete-button"
                  onClick={() => {
                    removeProduct(cart?.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
