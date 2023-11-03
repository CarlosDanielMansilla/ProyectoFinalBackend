import {Container, Row, Col, Button, Badge} from "reactstrap";
import "./SeccionHome.css";

const SeccionHome = () => {

    return (
        <Container className="seccionHome">
            <h1>Tu Viaje, Tu Libertad</h1>
            <p>En Ruta Libre, hacemos que viajar sea una experiencia única y emocionante para todos. <br />
                Queremos ofrecerte casas rodantes de calidad y servicios excepcionales, para que puedas <br />
                crear recuerdos inolvidables en tu recorrido por el mundo."</p>
            <Button outline color="secondary" className="--bs-orange" size="md">
                Iniciar Sesión
            </Button>
            <Button color="primary" className="--bs-orange" size="md">
                Crear Cuenta
            </Button>
        </Container>
    );
};
export default SeccionHome;