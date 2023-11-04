import { useEffect, useState } from "react";
import axios from "axios";
import CustomCardProduct from "./CustomCardProduct";
import "./Recomendados.css";

function Recomendados() {
  const [motorhome, setMotorhome] = useState([]);
  useEffect(() => {
    axios
      .get(` http://localhost:8080/motorhome `)
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

  // Conjunto para mantener un registro de productos ya mostrados
  const shownProducts = new Set();
  const uniqueShuffledMotorhome = [];

  shuffledMotorhome.forEach((producto) => {
    if (!shownProducts.has(producto.nombre)) {
      shownProducts.add(producto.nombre);
      uniqueShuffledMotorhome.push(producto);
    }
  });

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
        {uniqueShuffledMotorhome.map((producto) => (
          <CustomCardProduct key={producto.nombre} producto={producto} />
        ))}
      </div>
    </div>
  );
}
export default Recomendados;
