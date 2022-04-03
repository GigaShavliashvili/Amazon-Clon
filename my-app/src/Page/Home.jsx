import React, { useEffect } from "react";
import Slider from "../Component/Slider/Slider";
import { images } from "../Assets/Banner";
import Category from "../Component/Category/Category";
import { Menuimg } from "../Assets/MenuData";
import { Menuimg2 } from "../Assets/MenuData";
import TopSeller from "../Component/TopSellerSwiper/TopSeller";
import axios from "axios";
import Giftideas from "../Component/GiftIdeas/Giftideas";
import { usedispatch, useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
  const [bookData, setBookData] = useState([]);
  const data = useSelector((state) => state);
  useEffect(() => {
    axios.get(`https://gutendex.com/books/?page=4`).then((res) => {
      const data = res.data.results.slice(0, 10);
      setBookData(data);
    });

    console.log(data.register);
  }, []);

  return (
    <div className="Home" style={{ background: "#eeeeee" }}>
      <Slider images={images} />
      <div className="Home-Category">
        <Category images={Menuimg} Ed={true} />
      </div>
      <div className="Home-TopSeller">
        <TopSeller items={bookData} />
      </div>
      <div className="Home-Category">
        <Category images={Menuimg2} />
      </div>
      <div className="Home-Giftideas">
        <Giftideas />
      </div>
    </div>
  );
};

export default Home;
