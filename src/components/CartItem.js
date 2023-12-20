// CartItem.js

import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-item ">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price ? item.price.toFixed(2) : 'N/A'}</p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
