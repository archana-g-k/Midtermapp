import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";

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
      <p className="cartDef">Shopping Cart</p>
      <Link to="/" className="p-5">
        <button className="btn btn-outline-dark m-2 align-center">
          Continue Shopping
        </button>
      </Link>

      {carts?.map((cart) => {
        return (
          <div className="col-md-4 mt-5 p-3">
            <div className="card h-100 text-center p-4">
              <div className="card-body">
                <img
                  src={cart?.image}
                  alt=""
                  className="img-fluid"
                  width="400px"
                />

                <h5 className="card-title mb-3 ">{cart.title}</h5>
                <button
                  className="btn btn-outline-dark m-2 align-center"
                  onClick={() => {
                    removeProduct(cart?.id);
                  }}
                >
                  Remove Cart
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
