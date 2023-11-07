// import { useEffect, useState } from "react";
// import axios from "axios";
// import './ListarProductos.css';

// const ListarProductos = () => {
//   const [motorhome, setmotorhome] = useState({});
//   useEffect(() => {
//     axios
//       .get(` http://localhost:8080/motorhome/detalle/${1} `)
//       .then((res) => {
//         setmotorhome(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
    
//     <div className="listar-productos-container">
//       <h1 className="listar-productos-title">MotorHome</h1>
//       <h1>MotorHome</h1>

//       <h2 className="listar-productos-details">{motorhome.marca}</h2>
//       <h2>{motorhome.modelo}</h2>
//       <h2>{motorhome.anioFabricacion}</h2>
//       <h2>{motorhome.descripcion}</h2>
//       <h2>{motorhome.precioAlquiler}</h2>
//       <img src={"/images/" + motorhome.file} alt="" width={200} />
//     </div>




//   );
// };

// export default ListarProductos;


import { useEffect, useState } from "react";
import axios from "axios";
import './ListarProductos.css';

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/motorhome")
      .then((res) => {
        setProductos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEliminarProducto = (id) => {
    // Aquí puedes implementar la lógica para eliminar un producto
    // Puedes usar una función o modal de confirmación antes de eliminar.
    console.log(`Eliminar producto con ID: ${id}`);
  };

  return (
    <div className="listar-productos-container">
      {/* <div className="row col-md-7 table-responsive"> */}
      <h1>Lista de Productos</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año de Fabricación</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.marca}</td>
                <td>{producto.modelo}</td>
                <td>{producto.anioFabricacion}</td>
                <td>{producto.descripcion}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* </div> */}
    </div>
  );
};

export default ListarProductos;