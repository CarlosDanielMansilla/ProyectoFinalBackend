import { useState, useEffect } from "react";
import CustomCardProduct from "./CustomCardProduct";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Recomendados.css";

function Recomendados() {
  const [motorhome, setMotorhome] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/motorhome`)
      .then((res) => {
        const uniqueMotorhomes = [...new Set(res.data)];
        setMotorhome(uniqueMotorhomes);
      })
      .catch((err) => console.log(err));
  }, []);

  // Función para obtener un orden aleatorio de los productos
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledMotorhome = shuffleArray(motorhome);

  // Paginación
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = shuffledMotorhome.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  // Manejar el cambio de página
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="Recomendados">
      <h5>TOP MOTORHOMES</h5>
      <h2>Las mejores ofertas para tu viaje</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {displayItems.map((producto) => (
          <CustomCardProduct key={producto.nombre} producto={producto} />
        ))}
      </div>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={Math.ceil(shuffledMotorhome.length / itemsPerPage)}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Recomendados;
