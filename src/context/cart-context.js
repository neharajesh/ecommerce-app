import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <CartContext.Provider
        value={{
          cartCount,
          setCartCount,
          cartPrice,
          setCartPrice,
          itemsInCart,
          setItemsInCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
