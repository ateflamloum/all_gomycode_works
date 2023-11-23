// src/PaymentForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PaymentForm = ({ handlePayment }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields as needed

    // Call the handlePayment function with the payment details
    handlePayment({
      cardNumber,
      expiryDate,
      cvc,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formExpiryDate">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formCvc">
        <Form.Label>CVC</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Pay Now
      </Button>
    </Form>
  );
};

export default PaymentForm;
