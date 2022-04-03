import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.scss";
import Loader from "../../Assets/tenor.gif";
import { useDispatch } from "react-redux";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RecProduct from "../../Component/RecomendedProduct/RecProduct";
import { Button } from "@mui/material";
import { addCart } from "../../Redux/Action";

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail([]);
    axios
      .get(`http://api-mobilespecs.azharimm.site/v2/${id}`)
      .then((res) => {
        const data = res.data.data;
        setDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.scroll(0, 0);
  }, [id]);
  const [storageIndex, setStorageIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [serviceProviderIndex, setServiceProviderIndex] = useState(3);

  const Storage = [64, 128, 512];
  const Color = ["silver", "red", "white", "gold", "blue"];
  const ServiceProvider = [
    "AT&T",
    "GSM Carriers",
    "T-Mobile",
    "Unlocked",
    "Verizon",
  ];
  /* 
  const addCartHandler = (newItem) => {
    dispatch(addCart(newItem));

        if(user){
        dispatch(addCart(newItem))
        console.log("Add");
    }else
 Navigate("/Sign%20in")
 console.log("Please Loged in and try again"); 
  }; */

  if (detail.length === 0) {
    return (
      <div className="Loader">
        <img src={Loader} alt="" />
      </div>
    );
  } else console.log("Phone =>", detail);

  return (
    <div className="Detail-Main">
      <div className="Ad">
        <div className="Ad__Image">
          <h1>TCL</h1>
          <img
            src="https://m.media-amazon.com/images/I/615fYCdHfnL._AC_SX679_.jpg"
            alt="img"
          />
        </div>
        <div className="Ad__Content">
          <p>TCL 10 SE Unlocked Android Smartphone, 6.52" V-Notch...</p>
          <div className="col1">
            ⭐⭐⭐⭐⭐
            <p>
              $159.99 <span>✔️Prime</span>
            </p>
          </div>
        </div>
        <h1></h1>
      </div>
      <div className="Detail-Section">
        <div>
          <a className="back">‹ Back to results</a>
        </div>
        <div className="Detail-Section__Wrapper">
          <div className="Atached__Iamges">
            {detail.phone_images.map((item, index) => {
              return (
                <div
                  className={`Atached__Iamges__Item ${
                    imageIndex === index ? "active" : null
                  }`}
                  key={index}
                  onMouseMove={(e) => {
                    setImageIndex(index);
                  }}
                >
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
          <div className="Row1">
            <div className="Row1__Image">
              <img src={detail.phone_images[imageIndex]} alt="product-image" />
            </div>
          </div>
          <div className="Row2">
            <div className="Row2__Content">
              <h1>
                {detail.phone_name} - {Storage[storageIndex]}GB, Pacific{" "}
                {Color[colorIndex]} - {ServiceProvider[serviceProviderIndex]}{" "}
                (Renewed Premium)
              </h1>
              <a href="">Visit the {detail.brand} Store</a>
              <div className="Raiting">
                {" "}
                ⭐⭐⭐⭐⭐ <KeyboardArrowDownIcon />
                <a href="">
                  {" "}
                  {detail.price}{" "}
                  {Math.floor(Math.random() * 5000 + 10000 - 5000)} ratings
                </a>
              </div>
              <a href="">
                {Math.floor(Math.random() * 50 + 100 - 50)} answered questions
              </a>
              <hr />

              <div className="Row2__Content__Selection">
                <p>
                  Size: <h5>{Storage[storageIndex]} GB</h5>
                </p>
                <div className="Storage">
                  {Storage.map((el, index) => {
                    return (
                      <div
                        className={`Storage__Item ${
                          index === storageIndex ? "StorageActive" : null
                        } `}
                        key={index}
                        onClick={() => {
                          setStorageIndex(index);
                        }}
                      >
                        <h4>{el}GB</h4>
                      </div>
                    );
                  })}
                </div>
                <p>
                  Color: <h5>{Color[colorIndex]}</h5>
                </p>
                <div className="Color">
                  {Color.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className={`Color__Item ${
                          colorIndex === index ? "ColorActive" : null
                        }`}
                        onClick={() => setColorIndex(index)}
                      >
                        <img src={detail.thumbnail} alt="" />
                        <span style={{ background: el }}></span>
                      </div>
                    );
                  })}
                </div>
                <p>
                  Service Provider:{" "}
                  <h5> {ServiceProvider[serviceProviderIndex]}</h5>
                </p>
                <div className="Storage">
                  {ServiceProvider.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className={`Storage__Item ${
                          serviceProviderIndex === index
                            ? "StorageActive"
                            : null
                        }`}
                        onClick={() => setServiceProviderIndex(index)}
                      >
                        <h4>{el}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="description">
                <h3>About this item</h3>
                <li>Please check with your carrier to verify compatibility.</li>
                <li>
                  When you receive the phone, insert a SIM card from a
                  compatible carrier. Then, turn it on, connect to Wi-Fi, and
                  follow the on screen prompts to activate service.
                </li>
                <a href="">See More</a>
              </div>
            </div>
          </div>
          <div className="Row3">
            <div className="purchesd">
              <p className="price"> $657.99</p>
              <div className="deliver">
                <p>$15.99 delivery</p> <h5>March 29 - April 5.</h5>{" "}
                <a href=""> Details</a>
              </div>
              <a href="" style={{ marginTop: "0.7rem" }}>
                <LocationOnOutlinedIcon />
                Deliver to Georgia
              </a>
              <p className="stock">In Stock</p>
              <select id="number">
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
              <Button className="Add">Add To Cart</Button>
              <Button className="Buy">Buy Now</Button>
              <a style={{ marginTop: "1rem" }} href="">
                ㊙️ Secure transaction
              </a>
              <p className="ship">
                Ships from: <span>NGP STORE USA</span>{" "}
              </p>
              <p className="ship">
                {" "}
                Sold by: <a href="">NGP STORE USA</a>
              </p>
              <p className="policy">
                Return policy:{" "}
                <a href="">Eligible for Return, Refund or Replacement.</a>
              </p>
              <hr />
              <button className="AddList">
                Add to list <KeyboardArrowDownIcon />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="specification">
          <div className="Specification__Header">
            <h2>Product information</h2>
          </div>
          <table>
            {detail.specifications.map((specification, index) => {
              return (
                <tr key={index}>
                  <td className="header">
                    <h5>{specification.title}</h5>
                  </td>
                  {specification.specs.map((det) => {
                    return (
                      <tr>
                        <td className="detKey">{det.key}</td>
                        <td className="detinfo"> {det.val[0]}</td>
                      </tr>
                    );
                  })}
                </tr>
              );
            })}
          </table>
        </div>
        <RecProduct brand={detail.brand} />
      </div>
    </div>
  );
};

export default Detail;
