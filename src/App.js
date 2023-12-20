// App.js

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (itemId) => {
    // Implement logic to remove item from cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    // Ensure the new quantity is not less than 1
    const updatedQuantity = Math.max(newQuantity, 1);
  
    // Implement logic to update the quantity of the item in the cart
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  };
  return (
    <div className="app">
      <Navbar cartItemCount={cartItems.length} onToggleCart={handleToggleCart} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ProductList onAddToCart={handleAddToCart} />
          </div>
          {isCartOpen && (
            <div className="col-md-4">
              <CartSidebar
                cartItems={cartItems}
                onCloseCart={() => setIsCartOpen(false)}
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default App;
