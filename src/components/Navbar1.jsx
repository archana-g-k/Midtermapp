import { Link } from "react-router-dom";

import "./Navbar1.css";
const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h1>
          <span style={{ color: "aqua" }}>SHOP</span>
          <span color="black">LANE</span>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
export default Navbar1;
