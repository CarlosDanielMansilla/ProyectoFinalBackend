import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './InicioSesion.css';

const InicioSesion = () => {
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });

  const [errores, setErrores] = useState({});
  const [inicioSesionExitoso, setInicioSesionExitoso] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la validación del formulario antes de enviar los datos al servidor
    const nuevosErrores = {};

    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nuevosErrores.email = "El email no es válido.";
    }

    if (formData.contraseña.length < 6) {
      nuevosErrores.contraseña = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (Object.keys(nuevosErrores).length === 0) {
      // Aquí puedes enviar los datos del formulario al servidor para el inicio de sesión
      // y manejar la respuesta del servidor

      // Por ejemplo, podrías mostrar un mensaje de éxito y redirigir al usuario
      setInicioSesionExitoso(true);
      setFormData({
        email: "",
        contraseña: "",
      });
      setErrores({});
    } else {
      // Si hay errores en el formulario, los mostramos
      setErrores(nuevosErrores);
      setInicioSesionExitoso(false);
    }
  };

  return (
    <div className="inicio-sesion-container">
      <h1 className="inicio-sesion-title">Iniciar Sesión</h1>
      {inicioSesionExitoso ? (
        <div>
          <p className="inicio-sesion-success">¡Inicio de sesión exitoso!</p>
          {/* Puedes redirigir al usuario a su página de perfil, por ejemplo */}
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errores.email && <p className="error-message">{errores.email}</p>}
          </FormGroup>

          <FormGroup>
            <Label>Contraseña</Label>
            <Input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
            />
            {errores.contraseña && (
              <p className="error-message">{errores.contraseña}</p>
            )}
          </FormGroup>

          <Button color="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      )}
    </div>
  );
};

export default InicioSesion;