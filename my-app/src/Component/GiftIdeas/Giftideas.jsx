import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./giftideas.scss";
import Button from "../Button/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Giftideas = () => {
  const [page, setPage] = useState(1);
  const [giftData, setgiftData] = useState([]);
  useEffect(() => {
    if (page > 4) {
      setPage(1);
    }
    if (page < 0) {
      setPage(4);
    }

    axios.get(`https://gutendex.com/books/?page=${page}`).then((res) => {
      const data = res.data.results.slice(1, 8);
      setgiftData(data);
    });
  }, [page]);
  if (giftData.length === 0) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div className="GiftIdeas-Section">
        <div className="GiftIdeas-Section__Header">
          <h2>Gift ideas inspired by your shopping history</h2>
          <p>Page {page} of 4</p>
        </div>
        <div className="GiftIdeas-Section__Items">
          {giftData.map((item) => {
            return (
              <div className="Item" key={item.id}>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${item.formats["image/jpeg"]})`,
                  }}
                ></div>
                <div className="Item__Detail">
                  <Link to="/">
                    <p className="title">{item.title.slice(0, 30)}...</p>
                  </Link>
                  <Link to="/">
                    <p className="author">
                      {">"}
                      {item.authors.length !== 0
                        ? item.authors[0].name
                        : "noName"}
                    </p>
                  </Link>
                  <div className="stars">
                    ⭐⭐⭐⭐⭐<span>{item.download_count}</span>
                  </div>
                  <p>board book</p>
                  <div className="price">
                    <h4>${item.id / 10}</h4>
                    <p>$30.48 shipping</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="next" onClick={() => setPage(page + 1)}>
          <ArrowForwardIosIcon />
        </button>
        <button className="prev" onClick={() => setPage(page + 1)}>
          <ArrowBackIosIcon />
        </button>

        <div className="Recomendation">
          <p>See personalized recommendations</p>
          <Button className="recbtn">sign in</Button>
          <p>
            New customer? <Link to="/">Start Here</Link>
          </p>
        </div>
      </div>
    );
};

export default Giftideas;
