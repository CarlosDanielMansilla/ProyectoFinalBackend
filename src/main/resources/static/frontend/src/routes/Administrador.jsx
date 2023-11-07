import { NavLink as RSNavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./Administrador.css";

const Administrador = () => {
  return (
    <>
      <h2>PANEL DE ADMINISTRACION</h2>
      <hr />
      <h3>Gestión de Productos</h3>
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <RSNavLink tag={Link} to="/registrarProducto">
              <button>Agregar Producto</button>
            </RSNavLink>

            <RSNavLink tag={Link} to="/listarproductos">
              <button>Listar Productos</button>
            </RSNavLink>

            <RSNavLink tag={Link} to="/agregarcategoria">
              <button>Agregar Categoría</button>
            </RSNavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Administrador;
