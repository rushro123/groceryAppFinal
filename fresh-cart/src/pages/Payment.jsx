import React, { useState } from "react";
import "../styles/payment.css"; // Import custom CSS file

const Payment = ({ subtotal = 0 }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Order submitted successfully!");
  };

  return (
    <div className="body">
            <div className="payment-container">
      <div>
      <h3 className="payment-heading tw:text-[2rem] tw:text-[#000]">Checkout</h3>
      </div>

      <div className="subtotal">
        <span>Subtotal:</span> ₹{subtotal.toFixed(2)}
      </div>

      <div className="payment-method">
        <label>Choose Payment Method:</label>
        <div className="radio-options">
          <label className="tw:text-[#000]">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>

          <label className="tw:text-[#000]">
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI Payment
          </label>
        </div>
      </div>

      {paymentMethod === "cod" && (
        <form className="cod-form" onSubmit={handleSubmit}>
          <input className="half"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input className="half"
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input className="half"
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input className="half"
            type="text"
            name="pincode"
            placeholder="Pin Code"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <textarea 
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          <button type="submit" className="submit-btn">Place Order</button>
        </form>
      )}

      {paymentMethod === "upi" && (
        <div className="upi-section">
          <p>Scan the QR Code to pay via UPI</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=200x200"
            alt="UPI QR Code"
            className="upi-qr"
          />
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Payment;
