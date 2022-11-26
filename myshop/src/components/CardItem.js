import React from "react";
import { Button, Stack } from "react-bootstrap";
import useBasket from "../context/BasketContext";
import data from "../data/data.json";
export default function CardItem({ id, count }) {
  const { removeItem } = useBasket();
  const item = data.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <div>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center "
      >
        <img
          src={item.image}
          style={{ width: "100px", height: "70px", objectFit: "cover" }}
          alt="img"
        />
        <div className="me-auto">
          <div>
            {item.name}
            {count > 1 && (
              <span className="text-muted" style={{ fontSize: "15px" }}>
                x{count}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: "15px" }}>
            {item.price} €
          </div>
        </div>
        <div className="text-muted" style={{ fontSize: "15px" }}>
          Total {item.price * count} €
        </div>
        <Button
          variant="outline-danger"
          size="small"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </Button>
      </Stack>
    </div>
  );
}
