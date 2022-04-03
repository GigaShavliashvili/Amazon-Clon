import React, { useEffect, useState } from "react";
import ProductList from "../../Component/ProductList/ProductList";
import Productmenu from "../../Component/ProductMenu/Productmenu";
import axios from "axios";
import "./product.scss";
import Loader from "../../Assets/tenor.gif";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPrice } from "../../Redux/Action";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [brands, setBrands] = useState([]);

  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct([]);
    axios
      .get(
        `https://api-mobilespecs.azharimm.site/v2/brands/${productData.BrandSlug}?page=1     
`
      )
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
      });
  }, [productData.BrandSlug]);
  useEffect(() => {
    axios.get(`https://api-mobilespecs.azharimm.site/v2/brands`).then((res) => {
      const data = res.data.data;
      setBrands(data);
    });
  }, []);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [productData.Cart]);

  if (product.length === 0 || brands.length === 0) {
    return (
      <div className="Loader">
        <img src={Loader} alt="" />
      </div>
    );
  } else
    return (
      <div className="Product-Section">
        <div className="Product-Section__Header">
          <p>
            {product.current_page}-{product.last_page} of over{" "}
            {product.phones.length} results for "<span>{product.title}</span>"
          </p>
        </div>
        <div className="Product-Section__Mean">
          <Productmenu Brands={brands} />
          <ProductList Product={product.phones} />
          <div className="MiniCart">
            <div className="subtotal">
              <p>subtotal</p>
              <h3>{productData.total ? productData.total : 0}$</h3>
            </div>
            {productData.Cart
              ? productData.Cart.map((item) => {
                  return (
                    <div className="MiniCart__Item">
                      <img src={item.image} alt="" />
                      <h5>{item.price}$</h5>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
};

export default Product;
