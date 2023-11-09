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

function CustomCard({ catg }) {
  return (
    <Card className="custom" style={{ width: "22%" }}>
      <CardImg top src={"../images/" + catg.file} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">Motorhome</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {catg.nombre}
        </CardSubtitle>
        <CardText>{catg.descripcion}</CardText>
        <Button>Alquilar</Button>
      </CardBody>
    </Card>
  );
}

CustomCard.propTypes = {
  catg: PropTypes.object.isRequired,
};

export default CustomCard;
