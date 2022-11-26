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

  const increaseCount = (id) => {
    setCardItems((curr) => {
      if (curr.find((item) => item.id === id) == null) {
        return [...curr, { id, count: 1 }];
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCount = (id) => {
    setCardItems((curr) => {
      if (curr.find((item) => item.id === id)?.count === 1) {
        return curr.filter((item) => item.id !== id);
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCardItems((curr) => {
      return curr.filter((item) => item.id !== id);
    });
  };

  return (
    <BasketContext.Provider
      value={{ getItemCount, increaseCount, decreaseCount, removeItem }}
    >
      {children}
    </BasketContext.Provider>
  );
}
