//import React, { useState, useEffect } from "react";
//import { useSelector } from "react-redux";
import "./Navbar2.css";

import { Link } from "react-router-dom";
const Navbar2 = () => {
  /*const { numberCart } = useSelector((state) => state);
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
  };*/
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            All <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/electronics">
            Electronics
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jewelery">
            Jewellery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menclothing">
            Men's Clothing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/womenclothing">
            Women's Clothing
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar2;
