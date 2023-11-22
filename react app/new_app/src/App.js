// src/App.js
import React, { useState } from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Cart from "./Cart";
import { Card, Modal, Button, Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
const firstName = "YourFirstName"; // Replace with your first name

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const addToCartHandler = () => {
    setCartCount(cartCount + 1);
    setTotalPrice(totalPrice + parseFloat(product.price.replace("$", "")));
  };

  const deleteFromCartHandler = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      setTotalPrice(totalPrice - parseFloat(product.price.replace("$", "")));
    }
  };

  const handleBuy = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">ATEF EXPRESSE</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Categories</Nav.Link>
          <Nav.Link href="#">My Account</Nav.Link>
          {/* Add more navbar links as needed */}
        </Nav>
      </Navbar>

      <Container>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Body>
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
            <Image image={product.image} />
            {/* <p>Quantity: {product.quantity}</p> */}
          </Card.Body>
        </Card>
        {/* <p style={{ marginTop: "20px" }}>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && <img src="path/to/your/image.jpg" alt="Your Image" style={{ maxWidth: "100px" }} />} */}

        <Cart
          cartCount={cartCount}
          totalPrice={totalPrice.toFixed(2)} // Format to two decimal places
          addToCartHandler={addToCartHandler}
          deleteFromCartHandler={deleteFromCartHandler}
          handleBuy={handleBuy}
        />

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Order Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Total Items: {cartCount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {/* Add additional information or confirmation messages here */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            {/* Implement the logic to finalize the purchase here */}
            <Button variant="primary" onClick={handleCloseModal}>
              Buy Now
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default App;
