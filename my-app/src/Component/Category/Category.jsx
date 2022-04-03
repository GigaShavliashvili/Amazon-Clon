import React from "react";
import "./category.scss";
import { Link } from "react-router-dom";
import Loader from "../../Assets/tenor.gif";
const Category = (props) => {
  const items = props.images;
  if (items.length === 0) {
    return (
      <div className="Loader">
        <img src={Loader} alt="" />
      </div>
    );
  } else
    return (
      <div className="Category__Wrapper">
        <div className="Category__Wrapper__Items">
          {items.slice(0, 3).map((item, index) => {
            return (
              <div className="item" key={index}>
                <h3>{item.Title}</h3>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                <Link to="/Gaming accessories">
                  <p>See More</p>
                </Link>
              </div>
            );
          })}
          {props.Ed === true ? (
            <div className="Ed">
              <div className="row1">
                <h3>Sign in for the best experience</h3>
                <button>Sign in Securely</button>
              </div>
              <div className="row2">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                  alt=""
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {items.slice(3).map((item, index) => {
            return (
              <div className="item" key={index}>
                <h3>{item.Title}</h3>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <p>See More</p>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Category;
