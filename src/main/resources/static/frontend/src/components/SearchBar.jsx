import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

import "./SearchBar.css";

function SearchBar() {
  return (
    <Form className="form-with-background">
        <Row className="row-cols-lg-auto g-4 align-items-center justify-content-center search-bar">
          <Col>
            <FormGroup>
              <Label for="startLocationInput">Desde</Label>
              <Input  type="select" name="startLocation" id="startLocationInput" placeholder="Lugar de salida">
                  <option value="">Lugar de Salida</option>
                <option>Caba, Argentina</option>
                <option>La Plata, Argentina</option>
                <option>Cordoba Capital, Argentina</option>
                <option>Rio de Janeiro, Brasil</option>
                <option>Montevideo, Uruguay</option>
              </Input >
            </FormGroup>
            
          </Col>
          <Col>
            <FormGroup>
              <Label for="endLocationInput">Hasta</Label>
              <Input  type="select" name="endLocation" id="endLocationInput" placeholder="Lugar de salida">
                  <option value="">Lugar de Entrega</option>
                <option>Caba, Argentina</option>
                <option>La Plata, Argentina</option>
                <option>Cordoba Capital, Argentina</option>
                <option>Rio de Janeiro, Brasil</option>
                <option>Montevideo, Uruguay</option>
              </Input >
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="checkInInput">Check In</Label>
              <Input type="date" name="check-in" id="checkInInput" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="checkOutInput">Check Out</Label>
              <Input type="date" name="check-out" id="checkOutInput" />
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary" className="search-button --bs-orange">
              Buscar
            </Button>
          </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
