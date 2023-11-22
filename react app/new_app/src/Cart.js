// src/Cart.js
import React from "react";
import { Button, Modal } from "react-bootstrap";

const Cart = ({ cartCount, totalPrice, addToCartHandler, deleteFromCartHandler, handleBuy }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Your Cart</h3>
      <p>Items in Cart: {cartCount}</p>
      <p>Total Price: ${totalPrice}</p>
      <Button variant="success" onClick={addToCartHandler}>
        Add to Cart
      </Button>{" "}
      {cartCount > 0 && (
        <>
          <Button variant="danger" onClick={deleteFromCartHandler}>
            Delete from Cart
          </Button>{" "}
          <Button variant="primary" onClick={handleBuy}>
            Buy Now
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
