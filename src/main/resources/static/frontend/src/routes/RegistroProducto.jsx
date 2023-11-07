import axios from "axios";
import { useState } from "react";
import "./RegistroProductos.css";

const RegistroProducto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    anioFabricacion: 0,
    descripcion: "",
    precioAlquiler: 0.0,
    //file: "", // Cambiado de un array a un solo archivo
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.nombre);
    console.log(formData.marca);
    console.log(formData.modelo);
    console.log(formData.anioFabricacion);
    console.log(formData.descripcion);
    console.log(formData.precioAlquiler);

    try {
      axios
        .post("http://localhost:8080/motorhome/registrar", formData)
        .then((res) => {
          // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
          console.log("Motorhome registrado exitosamente", res.data);
        });

      // Limpiar el formulario o realizar otras acciones necesarias
    } catch (error) {
      console.error("Error al registrar el Motorhome", error);
    }
  };

  return (
    <div className="registro-container">
      <h2 className="registro-productos">Registro de Producto</h2>
      <span />

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <label htmlFor="marca">marca</label>
        <input
          type="text"
          id="marca"
          name="marca"
          value={formData.marca}
          onChange={handleInputChange}
        />
        <label htmlFor="modelo">modelo</label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          value={formData.modelo}
          onChange={handleInputChange}
        />
        <label htmlFor="descripcion">descripcion</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
        <label htmlFor="anioFabricacion">año de fabricacion</label>
        <input
          type="number"
          id="anioFabricacion"
          name="anioFabricacion"
          value={formData.anioFabricacion}
          onChange={handleInputChange}
        />
        <label htmlFor="precioAlquiler">precio</label>
        <input
          type="number"
          id="precioAlquiler"
          name="precioAlquiler"
          value={formData.precioAlquiler}
          onChange={handleInputChange}
        />

        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default RegistroProducto;
