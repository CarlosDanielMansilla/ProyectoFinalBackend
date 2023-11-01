import axios from "axios";
import { useState } from "react";

const Administrador = () => {
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    anioFabricacion: null,
    descripcion: "",
    precioAlquiler: null,
    file: "", // Cambiado de un array a un solo archivo
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      // Si se selecciona una imagen, se almacena en el estado
      const selectedImage = files[0];
      setFormData({ ...formData, [name]: selectedImage });
    } else {
      // Para otros campos, se almacenan los valores directamente
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("marca", formData.marca);
    formDataToSend.append("modelo", formData.modelo);
    if (formData.anioFabricacion) {
      formDataToSend.append("anioFabricacion", formData.anioFabricacion);
    } else {
      formDataToSend.append("anioFabricacion", 0);
    }

    formDataToSend.append("descripcion", formData.descripcion);
    if (formData.precioAlquiler) {
      formDataToSend.append("precioAlquiler", formData.precioAlquiler);
    } else {
      formDataToSend.append("precioAlquiler", 0.0);
    }
    formDataToSend.append("file", formData.file);

    let datos = {
      marca: formData.marca,
      modelo: formData.modelo,
      anioFabricacion: formData.anioFabricacion,
      descripcion: formData.descripcion,
      precioAlquiler: formData.precioAlquiler,
      //   file: formData.file, // Cambiado de un array a un solo archivo
    };

    console.log(formData.marca);
    console.log(formData.modelo);
    console.log(formData.anioFabricacion);
    console.log(formData.descripcion);
    console.log(formData.precioAlquiler);
    console.log(formData.file);
    console.log(datos);

    try {
      axios
        .post("http://localhost:8080/motorhome/registrar", formDataToSend)
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
    <div>
      <h1>Administrador</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
        <label htmlFor="file">imagen</label>
        <input type="file" id="file" name="file" onChange={handleInputChange} />
        <input type="submit" value="Subir Motorhome" />
      </form>
    </div>
  );
};

export default Administrador;
