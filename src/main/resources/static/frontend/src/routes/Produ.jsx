import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Produ.css";

const Produ = () => {
  const { nombre } = useParams();
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para controlar la carga de datos

  useEffect(() => {
    axios
      .get(` http://localhost:8080/imagenes/buscarPorProducto? `, {
        params: { nombre: nombre },
      })
      .then((res) => {
        setImagenes(res.data);
        setLoading(false); // Cuando los datos se cargan, actualiza el estado de carga
        console.log("data" + res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Maneja errores y actualiza el estado de carga
      });
  }, [nombre]);

  //   const items = imagenes.map((imagen, index) => ({
  //     url: `../images/${imagen.file}`,
  //     key: index,
  //   }));

  if (loading) {
    // Mientras los datos se cargan, puedes mostrar un mensaje de carga o spinner
    return <div>Cargando...</div>;
  }

  const items = imagenes.map((imagen, index) => ({
    src: `../images/${imagen.file}`,
    key: index,
  }));

  console.log(items);

  const producto = {
    titulo: "Producto de Ejemplo",
    descripcion: "Este es un ejemplo de descripción de un producto.",
    categorias: ["Electrónica", "Tecnología", "Accesorios"],
  };

  const imagenesPrincipales = items.slice(0, 1); // La primera imagen es la principal.
  console.log("principal" + imagenesPrincipales);
  const imagenesSecundarias = items.slice(1, 5); // Máximo de 4 imágenes secundarias.
  return (
    <Container fluid={true}>
      {/* Encabezado del Producto */}
      <Row className="tituloContainer">
        <Col className="columna" sm={{ size: 4 }}>
          <h2>{producto.titulo}</h2>
        </Col>
        <Col className="columna" sm={{ size: 4 }}>
          <Link to="/">
            <Button color="secondary" className="--bs-orange">
              Volver a Home
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Imagenes del Producto */}
      <Row className="imagenesContainer">
        <Col className="imagenPrincipal">
          <img src={imagenesPrincipales[0].src} alt="Imagen principal" />
        </Col>

        <Col className="imagenesSecundarias">
          <Row className="fila1">
            {imagenesSecundarias.map((imagen, index) => (
              <Col key={index}>
                <img
                  src={imagen.src}
                  //src={`../images/${imagen.file}`}
                  alt={`Imagen ${index + 1}`}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Descripción del Producto */}
      <div className="descripcionContainer">
        <h3>Descripción:</h3>
        <p>descripcion</p>
      </div>
      <div className="categoriasContainer">
        <h3>Categorías:</h3>
        <ul>
          {/* {producto.categorias.map((categoria, index) => (
            <li key={index}>{categoria}</li>
          ))} */}
        </ul>
      </div>
    </Container>
  );
};

export default Produ;
