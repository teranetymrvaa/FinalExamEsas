import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const item = location?.state.item;
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <title>Detail</title>
      <div className="product-card">
        <img className="product-img" src={item.img} alt={item.name} />
        <p className="item-p">{item.name}</p>
        <p className="item-p">${item.price}.00</p>
      </div>
    </div>
  );
}

export default Detail;
