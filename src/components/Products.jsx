import React from "react";

const Product = (prop) => {
  return (
    <article className="product" key="index">
      <img src={prop.image} alt={prop.title} />
      <div className="product__details">
        <h4 className="product__title">{prop.title}</h4>
        <p className="product__price">Price: $ {prop.price}</p>
        <p className="product__rating">Rating: {prop.rating.rate}/5</p>
        <p className="product__desc">Description: {prop.description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
