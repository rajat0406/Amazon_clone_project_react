import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingBasket";
export default function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header_logo"
          src="/images/amazon_header.png"
          alt=""
        ></img>
      </Link>
      <div className="search">
        <input type="text" className="search_header" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="" className="header_link">
          <div className="header_nav_text">
            <span className="header_nav_row1">Hello Rajat</span>
            <span className="header_nav_row2">SignIN</span>
          </div>
        </Link>
        <Link to="" className="header_link">
          <div className="header_nav_text">
            <span className="header_nav_row1">Returns </span>
            <span className="header_nav_row2">& Orders</span>
          </div>
        </Link>
        <Link to="" className="header_link">
          <div className="header_nav_text">
            <span className="header_nav_row1">Try</span>
            <span className="header_nav_row2">Prime</span>
          </div>
        </Link>
        <Link to="" className="header_link">
          <div>
            <ShoppingCart></ShoppingCart>
            <span></span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
