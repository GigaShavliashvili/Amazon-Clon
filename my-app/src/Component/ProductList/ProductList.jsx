import React from "react";
import "./productlist.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { addCart, addList } from "../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import "./productlist.scss";
const ProductList = (props) => {
  const items = props.Product;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.register.user);
  console.log(user);
  const Navigate = useNavigate();

  const addCartHandler = (newItem) => {
    dispatch(addCart(newItem));
    /*   if (user) {
      dispatch(addCart(newItem));
      console.log("Add");
    } else Navigate("/Sign%20in");
    console.log("Please Loged in and try again"); */
  };

  const addListHandler = (newItem) => {
    dispatch(addCart(newItem));
    /*   if (user) {
      dispatch(addCart(newItem));
      console.log("Add");
    } else Navigate("/Sign%20in");
    console.log("Please Loged in and try again"); */
  };

  return (
    <div className="productlist">
      <h2>Results</h2>

      {items.map((item, index) => {
        const price = item.slug.slice(-4, -1);
        return (
          <div className="item" key={index}>
            <Link to={`/Detail/${item.slug}`}>
              <div className="item__image">
                <img src={item.image} alt="" />
              </div>
            </Link>
            <div className="item__content">
              <h3>
                {item.phone_name} - 128GB, Pacific Blue - Unlocked (Renewed
                Premium)
              </h3>
              <h5>1{price}$</h5>
              ⭐⭐⭐⭐⭐
            </div>
            <div className="item__content__button">
              <Button
                className="List"
                onClick={() => addListHandler({ ...item, price })}
              >
                Add To list
              </Button>
              <Button
                className="Cart"
                onClick={() => addCartHandler({ ...item, price })}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
