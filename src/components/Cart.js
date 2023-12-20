// Cart.js

import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
      <div className="cart-total">Total: ${cartTotal.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
