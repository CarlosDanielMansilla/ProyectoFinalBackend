import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div style={{ marginTop: 200 }}>
      <h1>Panel de Administración</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2>Gestion de Producto</h2>
        <Link to={"/agregarProducto"}>Agregar Producto</Link>
        <Link to={"/listarProducto"}>Listar Productos</Link>
      </div>
    </div>
  );
};

export default Administrador;
