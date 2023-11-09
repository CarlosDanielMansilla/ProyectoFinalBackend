import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Productos from "./routes/Productos";
import Produ from "./routes/Produ";
import Recomendados from "./routes/Recomendados";
import Contacto from "./routes/Contacto";
import Footer from "./components/Footer";
import "./App.css";
import Administrador from "./routes/Administrador";
import RegistroProducto from "./routes/RegistroProducto";
import AgregarImagen from "./components/AgregarImagen";
import RegistroCuenta from "./routes/RegistroCuenta";
import ListarProductos from "./routes/ListarProductos";
import RegistroCategoria from "./routes/RegistroCategoria";
import ListarCategorias from "./routes/ListarCategorias";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/producto/:nombre" element={<Produ />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/recomendados" element={<Recomendados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/administrador" element={<Administrador />} />
          <Route path="/registrarProducto" element={<RegistroProducto />} />
          <Route path="/agregarImagen" element={<AgregarImagen />} />
          <Route path="/registrar" element={<RegistroCuenta />} />
          <Route path="/listarProducto" element={<ListarProductos />} />
          <Route path="/agregarCategoria" element={<RegistroCategoria />} />
          <Route path="/listarCategorias" element={<ListarCategorias />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
