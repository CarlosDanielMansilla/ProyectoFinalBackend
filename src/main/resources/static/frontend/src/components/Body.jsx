import React from "react";
import "./Body.css";
import CardRow from "./CardRowCategorias";
import SearchBar from "./SearchBar";
import CardRowReco from "./CardRowRecomend";

function Body() {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="container">
          <SearchBar />
        </div>
      </div>
      <div className="container">
        <CardRow />
        <CardRowReco />
      </div>
    </div>
  );
}

export default Body;
