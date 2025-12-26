import IconoEnlaces from "./IconoEnlaces";
import Enlaces from "../Data/Enlaces";

function Footer() {
    return (
        <footer className="contenedor-general-footer" style={{ padding: 30, paddingTop: 40, backgroundColor: "#222", display: "flex", flexDirection: "column",color: "#FFF" }}>
            <nav className="enlaces" style={{ boxShadow: "none", backgroundColor: "#222",display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                {Enlaces.map((enlace) => (
                    <IconoEnlaces key={enlace.nombre} nombre={enlace.nombre} enlace={enlace.enlace} />
                ))}
            </nav>
            <br /><br />
            <p style={{ fontSize: 12, margin: 0, padding: 0, color: "#EEE" }}>
                Este sitio utiliza estilos de
                <span onClick={() => window.open("https://github.com/oxalorg/sakura/")}
                    style={{ cursor: "pointer", textDecoration: "underline" }}> Sakura </span>
                y
                <span onClick={() => window.open("https://materializeweb.com")}
                    style={{ cursor: "pointer", textDecoration: "underline" }}> Materialize </span>
            </p>
        </footer>
    );
}

export default Footer;