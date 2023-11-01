import CustomCard from "./CustomCard";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardRow() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const [motorhome, setmotorhome] = useState([]);
  useEffect(() => {
    axios
      .get(` http://localhost:8080/motorhome `)
      .then((res) => {
        setmotorhome(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Elige tu mejor opción para irte de vacaciones</h2>{" "}
      {/* Añadimos el título aquí */}
      <Slider {...settings}>
        {motorhome.map((imageSrc, index) => (
          <div key={index}>
            <CustomCard imageSrc={imageSrc} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default CardRow;
