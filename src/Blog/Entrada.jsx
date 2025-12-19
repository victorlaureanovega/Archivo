import { useNavigate } from "react-router-dom";
import "../CSS/materialize.css";

function Entrada({ titulo, enlace, fecha }) {
    const navigate = useNavigate();

    const visitarEntrada = () => {
        navigate(`/${enlace}`);
    }

    return (
        <div className="card contenedor-general-entrada" onClick={ visitarEntrada } style={{ marginBottom: 20, cursor: 'pointer', padding: 7 }}>
            <div className="card-content">
                <div className="titulo-fecha" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
                    <span className="card-title" style={{ fontWeight: "bold", color: "#EEE", margin: 0 }}>{ titulo }</span>
                    <p style={{ fontWeight: "bold", color: "#AAA" }}>{ fecha }</p>
                </div>
            </div>
        </div>
    );
}

export default Entrada;
