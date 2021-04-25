import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const OffersContext = createContext();

export const OffersProvider = ({ children }) => {
  const [offersList, setOffersList] = useState([]);

  const loadOffersList = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-application-backend.neharajesh.repl.co/offers"
      );
      setOffersList(response.data);
    } catch (err) {
      console.log("Error occurred => ", err.message);
    }
  };

  useEffect(() => {
    loadOffersList();
  }, [setOffersList]);

  return (
    <>
      <OffersContext.Provider value={{ offersList }}>
        {children}
      </OffersContext.Provider>
    </>
  );
};

export const useOffers = () => {
  return useContext(OffersContext);
};
