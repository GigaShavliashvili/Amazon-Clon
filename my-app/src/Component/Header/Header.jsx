import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import AmazongLogo from "../../Assets/amazonWhite.png";
import American from "../../Assets/American.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { logoutinitial } from "../../Redux/Action";
const Header = () => {
  const user = useSelector((state) => state.register.user);
  const CartLength = useSelector((state) => state.product.Cart);
  console.log(user);
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    svg: {
      color: "white",
      fontSize: "30px",
    },
    "& .MuiBadge-badge": {
      right: -3,
      top: 2,
      fontSize: "15px",
      background: "none",
      color: "orange",
      padding: "0 4px",
      fontWeight: "700",
    },
  }));

  const toggle = useRef(null);

  const handlerLogout = () => {
    if (user) {
      dispatch(logoutinitial());
    } else console.log("You aren't logedin");
  };

  /* useEffect(() =>{

    const DropDown = document.getElementsByClassName(" UserLog");
    const active  = DropDown.addEventListener("mouseover" , (e) =>{
      
            console.log(e);
        
    }) 

    return window.removeEventListener("mouseover", active )
})*/

  return (
    <div className="Header">
      <div className="Header__Wrapper">
        <Link to="/">
          <div className="Header__Wrapper__Logo">
            <img src={AmazongLogo} alt="" />
          </div>
        </Link>
        <div className="Header__Wrapper__Option" style={{ display: "flex" }}>
          <div className="option1" style={{ transform: "translateY(10px)" }}>
            <LocationOnOutlinedIcon />
          </div>
          <div className="option2">
            <p>Deliver to</p>
            <h5>Georgia</h5>
          </div>
        </div>
        <div className="Header__Wrapper__Search">
          <form action="submit">
            <select defaultValue="All">
              <option>All</option>
              <option>giga</option>
              <option>giga</option>
            </select>
            <input type="text" name="search" />
            <button className="searchIcon" type="submit">
              <SearchOutlinedIcon />
            </button>
          </form>
        </div>
        <div className="Header__Wrapper__Option">
          <img src={American} alt="" />
          <ArrowDropDownIcon style={{ transform: "translateY(10px)" }} />
        </div>
        <div className="Header__Wrapper__Option  UserLog">
          <Link to="/sign in"></Link>
          <div className="option1">
            <p>Hello, {user ? user.email : "Sing in"}</p>

            <div className="logout">
              <div className="col1">
                <Link to="/sign in">
                  {!user ? <Button>Sing in</Button> : null}
                </Link>
                <p>
                  New customer? <a href="#">Start here.</a>
                </p>
              </div>
              <div className="col2">
                <div className="row1">
                  <ul>
                    <h3>Your List</h3>
                    <li>Create a List</li>
                    <li>Find a List or Registry</li>
                    <li>AmazonSmile Charity Lists</li>
                  </ul>
                </div>
                <div className="row2">
                  <ul>
                    <h3>Your Account</h3>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recommendations</li>
                    <li>Browsing History</li>
                    <li>Watchlist</li>
                    <li>Video Purchases {"&"} Rentals</li>
                    <li>Kindle Unlimited</li>
                    <li>Content {"&"} Devices</li>
                    <li>Subscribe {"&"} Save Items</li>
                    <li>Memberships {"&"} Subscriptions</li>
                    <li>Music Library</li>
                    <li className="Logout">
                      {" "}
                      {user ? (
                        <p onClick={() => handlerLogout()}>logout</p>
                      ) : null}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="option2" style={{ display: "flex" }}>
            <h5>Acounts {"&"} Lists</h5>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="Header__Wrapper__Option">
          <div className="option1">
            <p>Returns</p>
          </div>
          <div className="option2">
            <h5>{"&"} Orders</h5>
          </div>
        </div>
        <Link to="/Cart">
          <div className="Header__Wrapper__Option">
            <StyledBadge badgeContent={CartLength.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
            <h5 className="CartName">Cart</h5>
          </div>
        </Link>
      </div>
      <div className="Header__Wrapper2">
        <ul>
          <li>
            <MenuIcon /> All
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
