import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProductsCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import "./styles/styleCardProduct.css";

const ProductCard = ({ product }) => {
  
  const navigate = useNavigate();

  const handleNavigateProductId = () => navigate(`/product/${product.id}`);

  const dispatch = useDispatch();

  const addCartProduct = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";

    const objProduct = {
      id: product.id,
      quantity: 1,
    };

    axios
      .post(URL, objProduct, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProductsCart());
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <article className="card-product">
      <figure onClick={handleNavigateProductId} className="container-figure">
        <img
          src={product.productImgs[1]}
          alt="img-products"
          className="img-front"
        />
        <img
          src={product.productImgs[0]}
          alt="img-products"
          className="img-back"
        />
      </figure>

      <section className="info-container" onClick={handleNavigateProductId}>
        <h3 className="product-name">{product.title}</h3>
        <div className="product-price">
          <p className="price-text">Price:</p>
          <p className="price">${product.price}</p>
        </div>
      </section>
      <button onClick={addCartProduct} className="card-product-btn">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </article>
  );
};

export default ProductCard;
