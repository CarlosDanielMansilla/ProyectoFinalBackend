import { useState, useEffect } from "react";
import "./RegistroCuenta.css";
import axios from "axios";

const RegistroCuenta = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [errores, setErrores] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false);

  useEffect(() => {
    // Aquí puedes implementar la lógica para verificar si el formulario es válido
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la validación del formulario antes de enviar los datos al servidor
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formData.apellido.trim()) {
      nuevosErrores.apellido = "El apellido es obligatorio.";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nuevosErrores.email = "El email no es válido.";
    }

    if (formData.contraseña.length < 6) {
      nuevosErrores.contraseña =
        "La contraseña debe tener al menos 6 caracteres.";
    } else if (formData.contraseña !== formData.confirmarContraseña) {
      nuevosErrores.confirmarContraseña = "Las contraseñas no coinciden.";
    }

    if (Object.keys(nuevosErrores).length === 0) {
      // Aquí puedes enviar los datos del formulario al servidor para el registro
      // y manejar la respuesta del servidor
      try {
        axios
          .post("http://localhost:8080/usuarios/createUser", formData)
          .then((res) => {
            // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
            console.log("Motorhome registrado exitosamente", res.data);
          });

        // Limpiar el formulario o realizar otras acciones necesarias
      } catch (error) {
        console.error("Error al registrar el Motorhome", error);
      }

      // Por ejemplo, podrías mostrar un mensaje de éxito y borrar el formulario
      setRegistroExitoso(true);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        contraseña: "",
        confirmarContraseña: "",
      });
      setErrores({});
    } else {
      // Si hay errores en el formulario, los mostramos
      setErrores(nuevosErrores);
      setRegistroExitoso(false);
    }
  };

  return (
    <div className="registro-container">
      <h1 className="registro-title">Crea tu cuenta</h1>
      {registroExitoso ? (
        <div>
          <p className="registro-success">¡Registro exitoso!</p>
          <p>Te enviamos un mail de confirmación</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            {errores.nombre && (
              <p className="error-message">{errores.nombre}</p>
            )}
          </div>

          <div>
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
            {errores.apellido && (
              <p className="error-message">{errores.apellido}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errores.email && <p className="error-message">{errores.email}</p>}
          </div>

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
            />
            {errores.contraseña && (
              <p className="error-message">{errores.contraseña}</p>
            )}
          </div>

          <div>
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmarContraseña"
              value={formData.confirmarContraseña}
              onChange={handleInputChange}
            />
            {errores.confirmarContraseña && (
              <p className="error-message">{errores.confirmarContraseña}</p>
            )}
          </div>

          <button type="submit">Registrar</button>
        </form>
      )}
    </div>
  );
};

export default RegistroCuenta;
