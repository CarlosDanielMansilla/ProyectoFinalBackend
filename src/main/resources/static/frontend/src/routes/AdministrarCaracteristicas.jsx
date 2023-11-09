import { useEffect, useState } from "react";
import { NavLink as RSNavLink } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './AdministrarCaracteristicas.css';

const AdministrarCaracteristicas = () => {
  const [caracteristicas, setCaracteristicas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/caracteristica")
      .then((res) => {
        setCaracteristicas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEliminarCaracteristica = (id) => {
    //lógica
    console.log(`Eliminar caracteristica con ID: ${id}`);
  };

  const handleEditarCaracteristica = (id) => {
    //logica
    console.log(`Editar caracteristica con ID: ${id}`);
  };

  return (
    <div className="listar-caracteristicas-container">
      <h1>Administración de Caracteristicas</h1>
      <RSNavLink tag={Link} to="/registrocaracteristica">
        <button>Agregar nueva</button>
      </RSNavLink>  
      <h2>Lista de Caracteristicas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ícono</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {caracteristicas.map((caracteristica) => (
            <tr key={caracteristica.id}>
              <td>{caracteristica.id}</td>
              <td>{caracteristica.icono}</td>
              <td>{caracteristica.descripcion}</td>
              <td>
                <button
                  className="btn btn-danger d-inline mx-2"
                  onClick={() => handleEliminarCaracteristica(caracteristica.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-warning d-inline mx-2"
                  onClick={() => handleEditarCaracteristica(caracteristica.id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdministrarCaracteristicas;
