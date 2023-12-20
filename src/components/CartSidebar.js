// CartSidebar.js

import React from 'react';

const CartSidebar = ({ cartItems, onCloseCart, onRemove, onUpdateQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-sidebar mt-5">
      <button className="close-button" onClick={onCloseCart}>
        &times;
      </button>
      <h3 className="mb-4">Shopping Cart</h3>
      <div className="total-price mt-4">
        <h4>Total Price: ${getTotalPrice()}</h4>
      </div>
      <div className="container">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-3">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-secondary disabled">
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="btn btn-danger" onClick={() => onRemove(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price mt-4">
        <h4>Total Price: ${getTotalPrice()}</h4>
      </div>
    </div>
  );
};

export default CartSidebar;
