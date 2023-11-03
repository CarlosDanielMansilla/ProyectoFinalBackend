import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import "./CustomCard.css";

function CustomCard({ imageSrc }) {
  return (
    <Card className="custom">
      <CardImg top src={imageSrc} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Motorhome</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Low Cost
        </CardSubtitle>
        <CardText>Detalles del producto...</CardText>
        <Button>Alquilar</Button>
      </CardBody>
    </Card>
  );
}

CustomCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default CustomCard;
