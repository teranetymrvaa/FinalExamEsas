import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistProvider";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './style.css'

function Wishlist() {
  const { wishlist, wishlistCount, removeWishlist } =
    useContext(WishlistContext);

  if (wishlistCount() === 0) {
    return <h1> Wishlistde mehsul yoxdur...</h1>;
  }
  return (
    <div className="container">
      <title>Wishlist</title>
      <div className="wishlist-cards">
  
        {wishlist.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} style={{ width: "250px" }} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => removeWishlist(item._id)}
                style={{
                  padding: "3px 5px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Remove wishlist
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
