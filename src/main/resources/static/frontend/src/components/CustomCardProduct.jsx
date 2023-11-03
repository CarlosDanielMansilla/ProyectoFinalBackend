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

function CustomCardProduct({ producto }) {
  return (
    <Card className="customPro">
      <Link to="/producto">
        <SliderCardImage top src={producto.file} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Motorhome</CardTitle>
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
  producto: PropTypes.string.isRequired,
};

export default CustomCardProduct;
