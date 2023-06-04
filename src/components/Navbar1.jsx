import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar1.css";
import React, { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
const Navbar1 = () => {
  //const { numberCart } = useSelector((state) => state);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h1>
          <span style={{ color: "aqua" }}>SHOP</span>
          <span color="black">LANE</span>
        </h1>
      </Link>
      <div className="form-inline ml-auto">
        <Link to="/login" className="btn btn-outline-dark me-2">
          <FontAwesomeIcon icon={faUserPlus} /> Login
        </Link>

        <Link to="/register" className="btn btn-outline-dark me-2">
          Sign up
        </Link>

        <Link to="/cart" className="btn btn-primary me-2">
          <FontAwesomeIcon icon={faCartShopping} /> Cart{" "}
          <span className="badge badge-light"></span>
        </Link>
        <Link
          to="/wishlist"
          className="btn btn-outline-dark me-2"
          style={{ border: "none", background: "none", padding: 0 }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar1;
