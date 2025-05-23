import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './style.css'
import { WishlistContext } from "../../context/WishlistProvider";
function Navbar() {
    const {wishlistCount} = useContext(WishlistContext)
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-content">
            <img
              className="nav-img"
              src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png"
              alt=""
            />
            <div className="nav-links">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
              <Link to={"/add"} className="nav-link">
                Admin Add
              </Link>
              <Link to={"/wishlist"} className="nav-link">
                Wishlist <span className="wish-count">{wishlistCount()}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
