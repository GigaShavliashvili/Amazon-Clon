import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemfromCart,
  getQtyandUpdataTotal,
  removeItemfromList,
  addList,
  addCart,
} from "../../Redux/Action";
import "./cart.scss";
import Button from "../../Component/Button/Button";
import { getTotalPrice } from "../../Redux/Action";
import Giftideas from "../../Component/GiftIdeas/Giftideas";
const Cart = () => {
  const items = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  console.log(items);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [items.Cart]);

  const getQty = (e, slug) => {
    const qty = e.target.value;
    dispatch(getQtyandUpdataTotal(qty, slug));
  };

  const addtoList = (item) => {
    dispatch(addList(item));
    dispatch(removeItemfromCart(item.slug));
  };

  const movetoCart = (item) => {
    dispatch(addCart(item));
    dispatch(removeItemfromList(item.slug));
  };

  /*   if (items.Cart.length === 0) {
    return <h2>Your Cart is Empty</h2>
  } else */

  return (
    <div>
      <div className="Main-Section">
        {/* Cart Section */}
        <div className="row1">
          <div className="Cart-Section">
            {items.Cart.length === 0 ? (
              <div>
                <div className="Cart-Header">
                  <h1>Your Amazon Cart is empty.</h1>
                </div>
                <p style={{ textAlign: "end" }}>Price</p>
                <div className="Cart-Section__NoItem">
                  <p>
                    <a href="">iPhone 13 Pro - [128GB]</a> was removed from
                    Shopping Cart.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="Cart-Header">
                  <h1>Shoping Section</h1>
                  <p>
                    No items selected. <a href="#">Select all items</a>
                  </p>
                </div>

                <p style={{ textAlign: "end" }}>Price</p>
                {items.Cart.map((item) => {
                  return (
                    <div className="Cart-Section__Item" key={item.slug}>
                      <div className="cartcheckbox">
                        <input type="Checkbox" />
                      </div>

                      <div className="Cart-Section__Item__Image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="Cart-Section__Item__Content">
                        <h3>
                          {item.phone_name}-128GB, Pacific Blue - Unlocked
                          <br /> (Renewed Premium)
                        </h3>
                        <p>
                          Brand: <span>{item.brand}</span>
                        </p>
                        <p className="stock">In Stock</p>
                        <form action="">
                          <input type="checkbox" id="checkbox" />
                          <label htmlFor="chackbox">
                            This is a gift <a href="">Learn more</a>
                          </label>
                        </form>
                        <div className="row">
                          <select
                            name="qty"
                            id="qty"
                            onChange={(e) => getQty(e, item.slug)}
                          >
                            <option disabled hidden defaultValue="none">
                              Qty
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10+</option>
                          </select>
                          <a
                            onClick={() =>
                              dispatch(removeItemfromCart(item.slug))
                            }
                          >
                            Delet
                          </a>

                          <a onClick={() => addtoList(item)}>save for letter</a>
                        </div>
                      </div>
                      <div className="Cart-Section__Item__Price">
                        <h2>${item.price}</h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="subTotal">
              <h2>
                Subtotal ( {items.Cart.length} items ):{" "}
                <span>${items.total}</span>
              </h2>
            </div>
          </div>
          {/*  list section */}
          <div className="List-Section">
            <div className="List-Header">
              <h1>Your Items</h1>
              <nav>
                <li>Saved for later ({items.List.length} item)</li>
                <a href="">Buy it again</a>
              </nav>
            </div>
            <div className="List-Section__Items">
              {items.List.length === 0 ? (
                <h3 style={{ fontWeight: "400" }}>Your List is Empty</h3>
              ) : (
                items.List.map((item) => {
                  return (
                    <div className="List-Section__Items__Item" key={item.slug}>
                      <div className="List-Section__Items__Item__Image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="List-Section__Items__Item__Content">
                        <h3>
                          {item.phone_name}-128GB, Pacific Blue - Unlocked
                          <br /> (Renewed Premium)
                        </h3>
                        <p>
                          Brand: <span>{item.brand}</span>
                        </p>
                        <p className="stock">In Stock</p>
                        <form action="">
                          <input type="checkbox" id="checkbox" />
                          <label htmlFor="chackbox">
                            This is a gift <a href="">Learn more</a>
                          </label>
                        </form>
                        <button onClick={() => movetoCart(item)}>
                          Move to Cart
                        </button>
                        <a
                          style={{ marginTop: "10px" }}
                          onClick={() =>
                            dispatch(removeItemfromCart(item.slug))
                          }
                        >
                          Delet
                        </a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <p className="notice">
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price. Shopping CartLearn more
            Do you have a gift card or promotional code? We'll ask you to enter
            your claim code when it's time to pay.
          </p>
        </div>

        <div className="row2">
          <div className="Subtotal-Wrapper">
            <div className="subTotal">
              <h2>
                Subtotal ( {items.Cart.length} items ):{" "}
                <span>${items.total}</span>
              </h2>
            </div>
            <form action="">
              <input type="Checkbox" id="checkbox" />
              <label htmlFor="checkbox">This order contains a gift</label>
            </form>
            <Button className="cart-btn">Procced the Checkout</Button>
          </div>
        </div>
      </div>
      <Giftideas />
    </div>
  );
};

export default Cart;
