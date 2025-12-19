import { useNavigate } from 'react-router-dom';
import "../CSS/materialize.css";

export default function Encabezado() {
    return (
        <header style={{ backgroundColor: "#222", textAlign: "center", paddingTop: 90, paddingBottom: 90 }}>
            <h1 style={{ color: "#EEE" }}> Victor Laureano Vega </h1>
        </header>
    );
}

export function EncabezadoArchivo() {
    const navigate = useNavigate();

    return (
        <header>
            <div style={{ backgroundColor: "#222", textAlign: "center", paddingTop: 90, paddingBottom: 90 }}>
                <h1 style={{ color: "#EEE" }}> Victor Laureano Vega </h1>
            </div>
            <div class="boton-regresar-inicio" style={{ backgroundColor: "#333" }}>
                <p onClick={ () => navigate('/') }
                    style={{ color: "#EEE", padding: 10, textAlign: "center", fontSize: "14px", cursor: "pointer" }}> Regresar a inicio </p>
            </div>
        </header>
    );
}
