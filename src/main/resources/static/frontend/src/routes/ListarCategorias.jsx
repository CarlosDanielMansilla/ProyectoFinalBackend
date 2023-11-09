import { useEffect, useState } from "react";
import axios from "axios";
import './ListarCategorias.css';

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categoria")
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEliminarCategoria = (id) => {
    // Aquí puedes implementar la lógica para eliminar un producto
    // Puedes usar una función o modal de confirmación antes de eliminar.
    console.log(`Eliminar categoria con ID: ${id}`);
  };

  return (
    <div className="listar-categorias-container">
      {/* <div className="row col-md-7 table-responsive"> */}
      <h1>Lista de Categorias</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.nombre}</td>
                <td>{categoria.descripcion}</td>
                <td>
                  <button
                    className="btn btn-danger d-inline mx-2"
                    onClick={() => handleEliminarCategoria(categoria.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
    </div>
  );
};

export default ListarCategorias;