// src/App.js
import React, { useState } from "react";
import product from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Cart from "./Cart";
import PaymentForm from "./PaymentForm";
import { Card, Modal, Button, Container, Navbar, Nav } from "react-bootstrap";
// import "./App.css"; // Import a separate CSS file for styling

const firstName = "YourFirstName"; // Replace with your first name

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

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
    setShowPaymentForm(true);
  };

  const handlePayment = (paymentDetails) => {
    // Implement the logic to handle the payment details
    console.log("Payment Details:", paymentDetails);

    // Close the payment form modal
    setShowPaymentForm(false);

    // Show the order summary modal or perform any other actions
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Your App Name</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          {/* Add more navbar links as needed */}
        </Nav>
      </Navbar>

      <Container className="app-container">
        <div className="background-image">
          {/* Background image styling goes here */}
        </div>

        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Body>
            <Image image={product.image} />
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
           
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

        <Modal show={showPaymentForm} onHide={() => setShowPaymentForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Payment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PaymentForm handlePayment={handlePayment} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default App;
