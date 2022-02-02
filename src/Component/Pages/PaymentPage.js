import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState();
  const [expireDate, setExpireDate] = useState();
  const { toPayPrice } = useAuth();
  const handleCardInput = (value) => {
    if (value.length % 4 === 10) {
    } else {
      setCardNumber(value);
    }
  };
  return (
    <div className="paymentContainer">
      <h6>Payment Info</h6>
      <span>Total Price : {toPayPrice}</span>
      <form>
        <div className="form-group">
          <div className="input-label">Email</div>
          <div>
            <input type="email" maxLength={30}></input>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label">Card Information</div>
          <div>
            <input
              placeholder="0000-0000-0000-0000"
              value={cardNumber}
              onChange={(e) => handleCardInput(e.target.value)}
              type="text"
              maxLength={30}
            ></input>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label">Expiry Date</div>
          <div>
            <input type="text" placeholder="MM/YY" maxLength={5}></input>
          </div>
        </div>
        <div className="form-group">
          <div className="input-label">CVV</div>
          <div>
            <input type="text" maxLength={3}></input>
          </div>
        </div>
        <button
          onClick={() => {
            alert(
              "Stripe API Payment still in development stage. Thank you for testing up my website!"
            );
          }}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
