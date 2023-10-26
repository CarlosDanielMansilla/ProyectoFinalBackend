import { Container, Row, Col, Button, Navbar, NavbarBrand } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="header" light expand="md" fixed="top">
      <Container fluid={true}>
        <Row>
          <Col sm="6" className="logo-container">
            <NavbarBrand href="/">
              <img width="7%" src="/images/Logo navegador-01.png" alt="" />
              <span>Ruta Libre</span>
            </NavbarBrand>
          </Col>
          <Col sm="6" className="buttons-container">
            <Button color="primary" className="sign-up-button">
              Crear Cuenta
            </Button>
            <Button color="secondary">Iniciar Sesión</Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
