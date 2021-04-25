import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/login-context";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { OffersProvider } from "./context/offers-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <OffersProvider>
        <ProductProvider>
          <LoginProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </LoginProvider>
        </ProductProvider>
      </OffersProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
