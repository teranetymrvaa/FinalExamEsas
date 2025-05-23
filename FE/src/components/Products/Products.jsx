import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistProvider";
function Products() {
  const { isProductinWishlist, addWishlist, removeWishlist } =
    useContext(WishlistContext);
  const url = "http://localhost:3000/clothing/";
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  async function getData() {
    const res = await axios.get(url);
    const data = res.data;
    setData(data);
    setIsloading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <h1>Hele yuklenirem...</h1>;
  }
  return (
    <section className="products">
      <div className="container">
        <div className="products-content">
          <h1 className="product-h1">Featured Products</h1>
          <div className="products-cards">
            {data.map((item) => (
              <div className="product-card">
                <img className="product-img" src={item.img} alt={item.name} />
                <p className="item-p">{item.name}</p>
                <p className="item-p">${item.price}.00</p>
                <div className="buttons">
                  <Link to={`/detail/${item._id}`} state={{ item }}>
                    <button style={{ padding: "3px 5px" }}>Detail</button>
                  </Link>
                  {isProductinWishlist(item._id) ? (
                    <button
                      onClick={() => removeWishlist(item._id)}
                      style={{
                        padding: "3px 5px",
                        backgroundColor: "red",
                        color: "white",
                      }}
                    >
                      Remove Wishlist
                    </button>
                  ) : (
                    <button
                      onClick={() => addWishlist(item)}
                      style={{
                        padding: "3px 5px",
                        backgroundColor: "green",
                        color: "white",
                      }}
                    >
                      Add Wishlist
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
