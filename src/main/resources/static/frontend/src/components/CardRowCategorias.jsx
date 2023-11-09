import { useState, useEffect } from "react";
import axios from "axios";
// import { Row, Col } from "reactstrap";
import CustomCard from "./CustomCard";

function CardRowCategorias() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/categoria`)
      .then((res) => {
        setCategoria(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Categorias</h2>
      {/* <Row>
        <Col>
          <CustomCard imageSrc={"/images/1categoria.jpeg"} />
        </Col>
        <Col>
          <CustomCard imageSrc={"/images/2categoria.jpg"} />
        </Col>
        <Col>
          <CustomCard imageSrc={"/images/3categoria.jpg"} />
        </Col>
        <Col>
          <CustomCard imageSrc={"/images/4categoria.jpg"} />
        </Col>
      </Row> */}
      <div
        style={{
          display: "flex",
          //flexWrap: "wrap", // Para que las tarjetas se envuelvan a la siguiente línea si no caben en el ancho
          justifyContent: "space-between",
        }}
      >
        {categoria.map((catg) => (
          <CustomCard key={catg.id} catg={catg} />
        ))}
      </div>
    </div>
  );
}
export default CardRowCategorias;
