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

export function EncabezadoBlog({ titulo }) {
    const navigate = useNavigate();
    
    return(
        <div style={{ backgroundColor: "#444", padding: 20, paddingTop: 130 }}>
            <h1 style={{ color: "#EEE", margin: 0, paddingBottom: 25 }}> { titulo } </h1>
            <p onClick={ () => { navigate('/blog') } }
                style={{cursor: "pointer", color: "#EEE", margin: 0, textDecoration: "underline", fontSize: 14 }} > Ir al blog </p>
        </div>
    );
}
