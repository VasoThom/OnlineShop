import React, { createContext, useState } from "react";
import { useContext } from "react";

const BasketContext = createContext({});
export default function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [cardItems, setCardItems] = useState([]);

  const getItemCount = (id) => {
    return cardItems.find((item) => item.id === id)?.count || 0;
  };

  return (
    <BasketContext.Provider value={{ getItemCount }}>
      {children}
    </BasketContext.Provider>
  );
}
