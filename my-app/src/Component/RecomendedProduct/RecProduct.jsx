import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./recproduct.scss";
import Button from "../Button/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
const RecProduct = (brand) => {
  const [page, setPage] = useState(1);
  const [giftData, setgiftData] = useState([]);
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    if (page > giftData.last_page) {
      setPage(1);
    } else if (page < 1) {
      setPage(giftData.last_page);
    } else
      axios
        .get(
          `https://api-mobilespecs.azharimm.site/v2/brands/${productData.BrandSlug}?page=${page}     
`
        )
        .then((res) => {
          const data = res.data.data;
          setgiftData(data);
        });
  }, [page]);
  console.log(giftData);
  if (giftData.length === 0) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div className="GiftIdeas-Section">
        <div className="GiftIdeas-Section__Header">
          <h2>Recommended based on your shopping trends</h2>
          <p style={{ color: "orange" }}>{giftData.title}</p>
          {
            <p>
              Page {page} of {giftData.last_page}
            </p>
          }
        </div>
        <div className="GiftIdeas-Section__Items">
          {giftData.phones.slice(9, 16).map((item) => {
            return (
              <Link to={`/Detail/${item.slug}`}>
                <div className="Item" key={item.slug}>
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <div className="Item__Detail">
                    <p className="title">{item.phone_name}...</p>

                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p>brand: {item.brand}</p>
                    <div className="price">
                      <p>$30.48 shipping</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}{" "}
        </div>

        <button className="next" onClick={() => setPage(page + 1)}>
          <ArrowForwardIosIcon />
        </button>
        <button className="prev" onClick={() => setPage(page - 1)}>
          <ArrowBackIosIcon />
        </button>

        <div className="Recomendation">
          <p>See personalized recommendations</p>
          <Button className="recbtn">sign in</Button>
          <p>
            New customer? <Link to="/sign in">Start Here</Link>
          </p>
        </div>
      </div>
    );
};

export default RecProduct;
