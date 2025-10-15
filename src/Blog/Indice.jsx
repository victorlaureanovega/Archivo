import { useNavigate } from "react-router-dom"

function Indice({ titulo }) {
    const navigate = useNavigate();

    return(
        <div style={{ backgroundColor: "#444", padding: 20, paddingTop: 130 }}>
            <h1 style={{ color: "#EEE", margin: 0, paddingBottom: 25 }}> { titulo } </h1>
            <p onClick={ () => { navigate('/blog') } }
                style={{cursor: "pointer", color: "#EEE", margin: 0, textDecoration: "underline", fontSize: 14 }} > Ir al blog </p>
        </div>
    );
}

export default Indice;
