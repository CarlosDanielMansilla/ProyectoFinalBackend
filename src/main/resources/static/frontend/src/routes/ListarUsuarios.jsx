import { useEffect, useState } from "react";
import axios from "axios";
import './ListarUsuarios.css';

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuario")
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEliminarUsuario = (id) => {
    // Aquí puedes implementar la lógica para eliminar un producto
    // Puedes usar una función o modal de confirmación antes de eliminar.
    console.log(`Eliminar usuario con ID: ${id}`);
  };

  return (
    <div className="listar-usuarios-container">
      {/* <div className="row col-md-7 table-responsive"> */}
      <h1>Lista de Usuarios</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>email</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.Nombre}</td>
                <td>{usuario.Apellido}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminarUsuario(categoria.id)}
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

export default ListarUsuarios;