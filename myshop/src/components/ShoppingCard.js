import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import useBasket from "../context/BasketContext";
import CardItem from "./CardItem";
import data from "../data/data.json";

export default function ShoppingCard({ isOpen }) {
  const { closeCart, cardItems } = useBasket();
  return (
    <div>
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body gap={3}>
          <Stack>
            {cardItems.map((item) => (
              <CardItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {cardItems.reduce((total, cardItems) => {
                const item = data.find((i) => i.id === cardItems.id);
                return total + (item?.price || 0) * cardItems.count;
              }, 0)}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
