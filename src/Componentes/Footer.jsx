import "../css/Footer.css";

function Footer() {
    return (
        <footer className="contenedor-general-footer" style={{ padding: 40, backgroundColor: "#222", color: "#fff" }}>
            <nav className="enlaces" style={{ boxShadow: "none" }}>
                <img src="instagram.svg" alt="Logo de Instagram" className="invertir"
                    onClick={ () => window.open("https://www.instagram.com/victorlaureanovega", "_blank")}
                    style={{ marginLeft: 0 }}
                />
                <img src="github.svg" alt="Logo de Github"
                    onClick={() => window.open("https://github.com/victorlaureanovega", "_blank")}
                />
            </nav>
            <br /><br />
            <p style={{ fontSize: 12 }}>
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