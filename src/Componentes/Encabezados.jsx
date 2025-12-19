import { useNavigate } from 'react-router-dom';

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
        <div>
            <header style={{ backgroundColor: "#222", textAlign: "center", paddingTop: 90, paddingBottom: 90 }}>
                <h1 style={{ color: "#EEE" }}> Victor Laureano Vega </h1>
            </header>
            <div class="boton-regresar-inicio" style={{ backgroundColor: "#444" }}>
                <p onClick={ () => navigate('/') }
                    style={{ color: "#EEE", padding: 10, textAlign: "center", fontSize: "14px", cursor: "pointer" }}> Regresar a inicio </p>
            </div>
        </div>
    );
}
