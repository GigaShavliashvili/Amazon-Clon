import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductbyBrand } from "../../Redux/Action";
import "./productmenu.scss";
const Productmenu = (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const dispatch = useDispatch();
  const brand = useSelector((state) => state.product.BrandSlug);
  const handlerSubmit = (BrandSlug, e) => {
    dispatch(getProductbyBrand(BrandSlug));
    window.scroll(0, 0);
    const CheckBox = document.querySelectorAll("input");
    CheckBox.forEach((el) => {
      el.checked = false;
    });
    document.getElementById(`${BrandSlug} input`).checked = true;
  };

  useEffect(() => {}, [brand]);

  const Color = [
    {
      color: "red",
    },
    {
      color: "black",
    },
    {
      color: "blue",
    },
    {
      color: "white",
    },
    {
      color: "orange",
    },
    {
      color: "gray",
    },
    {
      color: "pink",
    },
  ];

  return (
    <div className="ProductMenu">
      <div className="Condition">
        <h5>Condition</h5>
        <li>
          <input type="checkbox" />
          New
        </li>
        <li>
          {" "}
          <input type="checkbox" />
          old
        </li>
      </div>
      <div className="Customer-Review">
        <h5>Customer-Review</h5>
        <li>
          <input type="checkbox" />
          ⭐⭐⭐⭐⭐
        </li>
        <li>
          <input type="checkbox" />
          ⭐⭐⭐⭐⭐
        </li>
        <li>
          <input type="checkbox" />
          ⭐⭐⭐⭐⭐
        </li>
        <li>
          <input type="checkbox" />
          ⭐⭐⭐⭐⭐
        </li>
        <li>
          <input type="checkbox" />
          ⭐⭐⭐⭐⭐
        </li>
      </div>
      <div className="Brand">
        <h5>Brand</h5>
        {(!seeMore ? props.Brands.slice(0, 10) : props.Brands).map((brand) => {
          return (
            <form
              key={brand.brand_id}
              onClick={(e) => handlerSubmit(brand.brand_slug, e)}
            >
              <input type="Checkbox" id={`${brand.brand_slug} input`} />
              <label>{brand.brand_name}</label>
            </form>
          );
        })}
        <p
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setSeeMore(!seeMore)}
        >
          {!seeMore ? "Show More" : "Show Less"}
        </p>
      </div>
      <div className="Price">
        <h5>Price</h5>
        <form action="submit">
          <input type="text" placeholder="Min" />
          <input type="Text" placeholder="Max" />
          <button>Go</button>
        </form>
      </div>
      <div className="Model-Year">
        <h5>Model Year</h5>
        <li>
          <input type="checkbox" />
          2022
        </li>
        <li>
          <input type="checkbox" />
          2021
        </li>
        <li>
          <input type="checkbox" />
          2020
        </li>
        <li>
          <input type="checkbox" />
          2019
        </li>
        <li>
          <input type="checkbox" />
          2018
        </li>
        <li>
          <input type="checkbox" />
          2017
        </li>
        <li>
          <input type="checkbox" />
          2016
        </li>
        <li>
          <input type="checkbox" />
          2015
        </li>
        <li>
          <input type="checkbox" />
          2014
        </li>
      </div>
      <div className="Color">
        <h5>Color</h5>
        <div className="spans">
          {Color.map((color, index) => {
            return (
              <span key={index} style={{ background: color.color }}></span>
            );
          })}
        </div>
      </div>
      <div className="Storage-Memory">
        <h5>Storage Memory</h5>
        <li>
          <input type="checkbox" />
          Up to 3.9 GB
        </li>
        <li>
          <input type="checkbox" />4 GB
        </li>
        <li>
          <input type="checkbox" />8 GB
        </li>
        <li>
          <input type="checkbox" />
          16 GB
        </li>
        <li>
          <input type="checkbox" />
          32 GB
        </li>
        <li>
          <input type="checkbox" />
          64 GB
        </li>
        <li>
          <input type="checkbox" />
          128 GB
        </li>
        <li>
          <input type="checkbox" />
          256 GB above
        </li>
      </div>
      <div className="Screen-Size">
        <h5>Screen Size</h5>
        <li>
          <input type="checkbox" />4 to 4.4 in
        </li>
        <li>
          <input type="checkbox" />
          4.5 to 4.9 in
        </li>
        <li>
          <input type="checkbox" />5 to 5.4 in
        </li>
        <li>
          <input type="checkbox" />
          5.5 in above
        </li>
      </div>
      <div className="Cellular-Technology">
        <h5>Cellular Technology</h5>
        <li>
          <input type="checkbox" />
          2G
        </li>
        <li>
          <input type="checkbox" />
          3G
        </li>
        <li>
          <input type="checkbox" />
          4G
        </li>
        <li>
          <input type="checkbox" />
          5G
        </li>
      </div>
      <div className="Operating-System">
        <h5>Operating System</h5>
        <li>
          <input type="checkbox" />
          IOS
        </li>
        <li>
          <input type="checkbox" />
          Android
        </li>
      </div>
      <div className="Display-Type">
        <h5>Display Type</h5>
        <li>
          <input type="checkbox" />
          LCD
        </li>
        <li>
          <input type="checkbox" />
          OLED
        </li>
      </div>
      <div className="Camera-Resolution">
        <h5>Camera Resolution</h5>
        <li>
          <input type="checkbox" />
          Up to 2.9 MP
        </li>
        <li>
          <input type="checkbox" />5 to 7.9 MP
        </li>
        <li>
          <input type="checkbox" />8 to 12.9 MP
        </li>
        <li>
          <input type="checkbox" />
          13 to 19.9 MP
        </li>
        <li>
          <input type="checkbox" />
          20 MP above
        </li>
      </div>
      <div className="Resolution">
        <h5>Resolution</h5>
        <li>
          <input type="checkbox" />
          1920 x 1080
        </li>
        <li>
          <input type="checkbox" />
          3840 x 2160
        </li>
      </div>
      <div className="Water-Resistance">
        <h5>Water Resistant</h5>
        <li>
          <input type="checkbox" />
          Water-Resistant
        </li>
      </div>
    </div>
  );
};

export default Productmenu;
