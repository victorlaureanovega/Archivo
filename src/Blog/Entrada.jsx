import { useNavigate } from "react-router-dom";
import "../css/materialize.css";

function Entrada({ titulo, enlace, fecha }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${enlace}`);
    }

    return (
        <div class="card" onClick={ handleClick } style={{ marginBottom: 20, cursor: 'pointer', color: "#EEE" }}>
            <div class="card-content">
                <span class="card-title" style={{ fontWeight: 500, fontWeight: "bold" }}>{ titulo }</span>
                <p>{ fecha }</p>
            </div>
        </div>
    );
}
export default Entrada;
