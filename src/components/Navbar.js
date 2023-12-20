// Navbar.js

import React from 'react';

const Navbar = ({ cartItemCount, onToggleCart }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Store
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Other navigation items */}
          </ul>
        </div>
        <div className="cart-button-container">
          <button className="btn btn-outline-light" onClick={onToggleCart}>
            Cart ({cartItemCount})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
