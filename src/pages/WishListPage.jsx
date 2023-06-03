import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";

const CartPage = () => {
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
      <p className="cartDef">Wishlist</p>
      <Link to="/" className="p-5">
        <button className="btn btn-outline-dark m-2 align-center">
          Continue Shopping
        </button>
      </Link>

      {wishes?.map((wish) => {
        return (
          <div className="col-md-4 mt-5 p-3">
            <div className="card h-100 text-center p-4">
              <div className="card-body">
                <img
                  src={wish?.image}
                  alt=""
                  className="img-fluid"
                  width="400px"
                />

                <h5 className="card-title mb-3 ">{wish.title}</h5>
                <button
                  className="btn btn-outline-dark m-2 align-center"
                  onClick={() => {
                    removeProduct(wish?.id);
                  }}
                >
                  Remove From Wishlist
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
