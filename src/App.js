import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/Inicio.jsx";
import Archivo from "./Inicio/Archivo.jsx";
import Blog from "./Blog/Blog.jsx";
import CartaAustriaca from "./Blog/Entradas/CartaAustriaca.jsx";
import Pendulo from "./Blog/Entradas/Pendulo.jsx";
import PrologoTardio from "./Blog/Entradas/PrologoTardio.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/archivo" element={<Archivo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/carta-a-una-austriaca" element={<CartaAustriaca />} />
        <Route path="/blog/pendulo-a-media-oscuridad" element={<Pendulo />} />
        <Route path="/blog/un-prologo-tardio" element={<PrologoTardio />} />
      </Routes>
    </Router>
  );
}

export default App;
