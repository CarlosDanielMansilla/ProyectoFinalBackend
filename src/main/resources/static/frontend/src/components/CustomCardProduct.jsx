import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import "./CustomCardProduct.css";
import SliderCardImage from "./SliderCardImage";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CustomCardProduct({ producto }) {
  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    axios
      .get(` http://localhost:8080/imagenes/buscarPorProducto? `, {
        params: { nombre: producto.nombre },
      })
      .then((res) => {
        setImagenes(res.data);
      })
      .catch((err) => console.log(err));
  }, [producto]);

  return (
    <Card className="customPro">
      <Link to={`/producto/${producto.nombre}`}>
        <SliderCardImage src={Object.values(imagenes)} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{producto.nombre}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Low Cost
          </CardSubtitle>
          <CardText>Detalles del producto...</CardText>
          <Button color="primary" className="--bs-orange">
            Alquilar
          </Button>
        </CardBody>
      </Link>
    </Card>
  );
}

CustomCardProduct.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string,
    // Otras propiedades del objeto aquí
  }).isRequired,
};

export default CustomCardProduct;
