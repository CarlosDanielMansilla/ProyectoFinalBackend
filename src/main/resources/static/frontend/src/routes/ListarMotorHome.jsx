import { useEffect, useState } from "react";
import axios from "axios";

const ListarMotorHome = () => {
  const [motorhome, setmotorhome] = useState({});
  useEffect(() => {
    axios
      .get(` http://localhost:8080/motorhome/detalle/${1} `)
      .then((res) => {
        setmotorhome(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: 100, height: "100vh" }}>
      <h1>MotorHome</h1>
      <h2>{motorhome.marca}</h2>
      <h2>{motorhome.modelo}</h2>
      <h2>{motorhome.anioFabricacion}</h2>
      <h2>{motorhome.descripcion}</h2>
      <h2>{motorhome.precioAlquiler}</h2>
      <img src={"/images/" + motorhome.file} alt="" width={200} />
    </div>
  );
};

export default ListarMotorHome;
