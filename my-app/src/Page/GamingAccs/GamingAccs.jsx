import React, { useEffect } from "react";
import { GamingCategoryData } from "../../Assets/gamingcat";
import { Link } from "react-router-dom";
import "./gamingaccs.scss";
const GamingAccs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="GaminAccs" style={{ margin: "1rem" }}>
      <div className="GaminCategory">
        <div
          className="Banner"
          style={{
            backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png)`,
          }}
        ></div>
        <div className="GaminAccs__Header">
          <h1>Featured Categories</h1>
        </div>
        <div className="GaminAccs__Grid">
          {GamingCategoryData.map((item) => {
            return (
              <Link to="/Product List">
                {" "}
                <div className="item">
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>
                  <p>{item.tilte}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamingAccs;
