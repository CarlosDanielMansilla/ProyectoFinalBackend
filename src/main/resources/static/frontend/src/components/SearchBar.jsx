import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar form-with-background">
      <FormGroup>
        <Label for="locationInput">Argentina Buenos Aires</Label>
        <Input
          type="text"
          name="location"
          id="locationInput"
          placeholder="Ingresa la ubicación"
        />
      </FormGroup>
      <FormGroup>
        <Label for="checkInInput">Check In</Label>
        <Input type="date" name="check-in" id="checkInInput" />
      </FormGroup>
      <FormGroup>
        <Label for="checkOutInput">Check Out</Label>
        <Input type="date" name="check-out" id="checkOutInput" />
      </FormGroup>
      <Button color="primary" className="search-button --bs-orange">
        Buscar
      </Button>
    </div>
  );
}

export default SearchBar;
