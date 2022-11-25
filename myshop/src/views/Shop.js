import React from "react";
import data from "../data/data.json";
import { Row, Col } from "react-bootstrap";
import CardData from "../components/CardData";

console.log(data);

export default function Shop() {
  return (
    <div>
      <Row>
        {data.map((el) => {
          return (
            <Col key={el.id}>
              <CardData {...el} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
