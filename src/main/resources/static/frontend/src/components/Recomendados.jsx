import { Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomCardProduct from "./CustomCardProduct";
import "./Recomendados.css";

function Recomendados() {
  const [motorhome, setmotorhome] = useState([]);
  useEffect(() => {
    axios
      .get(` http://localhost:8080/motorhome `)
      .then((res) => {
        setmotorhome(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const imageListRec = [
    "/images/MH1-1.jpg",
    "/images/MH2-1.jpg",
    "/images/MH3-2.jpg",
    "/images/MH4-1.jpg",
    "/images/MH5-5.jpg",
    "/images/MH6-1.jpg",
    "/images/MH7-1.jpg",
    "/images/MH8-1.jpg",
    "/images/MH9-1.jpg",
    "/images/MH10-1.jpg",
  ];

  const imageListRandom = Array.from(
    { length: 5 },
    () => imageListRec[Math.floor(Math.random() * imageListRec.length)]
  );
  return (
    <div className="Recomendados">
      <h5>TOP MOTORHOMES</h5>
      <h2>Las mejores ofertas para tu viaje</h2>
      {/* <Row className="g-5 justify-content-center">
        <Col>
          {imageListRandom.map((imageSrc, index) => (
            <div key={index}>
              <CustomCardProduct imageSrc={imageSrc} />
            </div>
          ))}
        </Col>
        <Col>
          {imageListRandom.map((imageSrc, index) => (
            <div key={index}>
              <CustomCardProduct imageSrc={imageSrc} />
            </div>
          ))}
        </Col>
      </Row> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {motorhome.map((producto) => (
          <CustomCardProduct key={producto.nombre} producto={producto} />
        ))}
      </div>
    </div>
  );
}
export default Recomendados;
