import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [itemsInWishlist, setItemsInWishlist] = useState([]);
  return (
    <>
      <WishlistContext.Provider value={{ itemsInWishlist, setItemsInWishlist }}>
        {children}
      </WishlistContext.Provider>
    </>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
