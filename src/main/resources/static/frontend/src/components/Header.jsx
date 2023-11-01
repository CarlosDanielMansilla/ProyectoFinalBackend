import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink as RSNavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="header" light expand="md" fixed="top">
      <Container fluid={true}>
        <Row>
          <Col sm="4" className="logo-container">
            <NavbarBrand href="/">
              <img width="7%" src="/images/Logo navegador-01.png" alt="" />
              <span className="logo-text">Ruta Libre</span>
            </NavbarBrand>
          </Col>
          <Col sm="8" className="buttons-container">
            <Nav navbar>
              <div className="links-container">
                <RSNavLink tag={Link} to="/productos">
                  Productos
                </RSNavLink>
                <RSNavLink tag={Link} to="/recomendados">
                  Recomendados
                </RSNavLink>
                <RSNavLink tag={Link} to="/contacto">
                  Contacto
                </RSNavLink>
              </div>
              <Button outline color="secondary" className="fixed-height">
                Iniciar Sesión
              </Button>
              <Button
                color="primary"
                className="sign-up-button fixed-height --bs-orange"
              >
                Crear Cuenta
              </Button>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;