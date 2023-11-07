import React from "react";
import { Row, Col } from "reactstrap";
import CustomCard from "./CustomCard";


function CardRowCategorias() {
  return (
    <div>
      <h2>Categorias</h2>
      <Row>
          <Col><CustomCard imageSrc={"/images/1categoria.jpeg"} /></Col>
          <Col><CustomCard imageSrc={"/images/2categoria.jpg"} /></Col>
          <Col><CustomCard imageSrc={"/images/3categoria.jpg"} /></Col>
          <Col><CustomCard imageSrc={"/images/4categoria.jpg"} /></Col>
      </Row>
    </div>
);
}
export default CardRowCategorias;
