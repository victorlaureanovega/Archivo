import Entrada from "./Entrada";
import Footer from "../Componentes/Footer";
import "../css/sakura.css";

function Blog() {
    return (
        <body style={{ backgroundColor: "#444" }}>
            <main>
                <section id="blog">
                    <div>
                        <h1 style={{ paddingTop: 120, paddingBottom: 100, color: "#EEE" }}> Óbice y antonomasia </h1>
                    </div>
                    <div style={{ paddingBottom: 100 }}>
                        <Entrada titulo="Un prólogo tardío" enlace="blog/un-prologo-tardio" fecha="19/08/2025" />
                        <Entrada titulo="Péndulo a media oscuridad" enlace="blog/pendulo-a-media-oscuridad" fecha="18/01/2025" />
                        <Entrada titulo="Carta a una austriaca" enlace="blog/carta-a-una-austriaca" fecha="04/10/2024" />
                    </div>
                </section>

                <Footer />
            </main>
        </body>
    );
}

export default Blog;
