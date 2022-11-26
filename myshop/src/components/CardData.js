import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useBasket from "../context/BasketContext";

export default function CardData({ id, name, price, image }) {
  const { getItemCount, increaseCount, decreaseCount, removeItem } =
    useBasket();
  const count = getItemCount(id);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          height="200px"
          style={{ objectFit: "cover" }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} €</Card.Text>
          <div>
            {count === 0 ? (
              <Button variant="primary" onClick={() => increaseCount(id)}>
                Add to basket
              </Button>
            ) : (
              <div className="d-flex align-items-center flex-column">
                <div className="d-flex align-items-center justify-content-center">
                  <Button onClick={() => decreaseCount(id)}>-</Button>
                  <div className="fs-4 m-2 " onClick={() => increaseCount(id)}>
                    {count} in Basket
                  </div>
                  <Button onClick={() => increaseCount(id)}>+</Button>
                </div>
                <Button variant="danger" onClick={() => removeItem(id)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
