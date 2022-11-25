import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardData({ id, name, price, image }) {
  const count = 0;
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
              <Button variant="primary">Add to basket</Button>
            ) : (
              <div className="d-flex align-items-center flex-column">
                <div className="d-flex align-items-center justify-content-center">
                  <Button>-</Button>
                  <div className="fs-4 m-2 ">{count} in Basket</div>
                  <Button>+</Button>
                </div>
                <Button variant="danger">Remove</Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
