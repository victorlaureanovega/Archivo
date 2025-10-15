import { useNavigate } from "react-router-dom";
import "../css/materialize.css";

function Entrada({ titulo, enlace, fecha }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${enlace}`);
    }

    return (
        <div className="card" onClick={ handleClick } style={{ marginBottom: 20, cursor: 'pointer', color: "#EEE", backgroundColor: "#222" }}>
            <div className="card-content" style={{ backgroundColor: "#222" }}>
                <span className="card-title" style={{ fontWeight: 500, fontWeight: "bold" }}>{ titulo }</span>
                <p>{ fecha }</p>
            </div>
        </div>
    );
}
export default Entrada;
