import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Productos from "./routes/Productos";
import Recomendados from "./routes/Recomendados";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import "./App.css";
import Administrador from "./routes/Administrador";
import ListarMotorHome from "./routes/ListarMotorHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/recomendados" element={<Recomendados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/listarMotorHome" element={<ListarMotorHome />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
