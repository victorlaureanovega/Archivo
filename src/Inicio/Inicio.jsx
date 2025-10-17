import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezados";
import Footer from "../Componentes/Footer";
import Noticias from "./noticias.json";
import "../css/materialize.css";
import "../css/sakura.css";

function Home() {
    const navigate = useNavigate();
    const noticia = Noticias[0];

    return (
        <main>
            <Encabezado />

            <section id="destacado" style={{ paddingTop: 100, paddingBottom: 100 }}>
                <div className="card" style={{ backgroundColor: "#111" }}>
                    <div className="card-image" style={{ backgroundColor: "#111" }}>
                        <iframe 
                            title="Cortometraje de Péndulo a media oscuridad"
                            src="https://www.youtube.com/embed/z6mUjEQjh_g"
                            allowFullScreen
                            style={{ width: "100%", height: 400 }}
                        />
                    </div>
                    <div className="card-content" style={{ backgroundColor: "#111" }}>
                        <p style={{ color: "#EEE" }}>
                            Cortometraje de
                            <span style={{ fontStyle: "italic" }}> Péndulo a media oscuridad </span>
                        </p>
                    </div>
                </div>
            </section>

            <section id="archivo-blog" style={{ display: "flex", flexDirection: "row", gap: 10, paddingBottom: 100 }}>
                <div className="archivo" style={{ flex: 1 }}>
                    <button style={{ width: "100%", height: 50 }} onClick={ () => navigate("/archivo") }> Archivo </button>
                </div>
                <div className="blog" style={{ flex: 1 }}>
                    <button style={{ width: "100%", height: 50 }} onClick={ () => window.open("/blog", "_blank") }> Blog </button>
                </div>
            </section>

            <section id="noticia" style={{ borderTop: "2px solid  #5e2129" }}>
                <h2 style={{ textTransform: "uppercase", color: "#5e2129" }}> Diario de Oztotlán </h2>
                <article>
                    <h4 style={{ color: "black" }}> {noticia.titulo} </h4>
                    <p style={{ fontSize: 16 }}> {noticia.autor} </p>
                    <p style={{ paddingBottom: 25 }}> {noticia.contenido} </p>
                </article>
            </section>

            <Footer />
        </main>
    );
}

export default Home;
