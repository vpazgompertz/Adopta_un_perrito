import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ imagen, name, description, color, text }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Tags text={text} color={color} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
