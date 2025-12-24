import Entrada from "./Entrada";
import Entradas from "../Data/Entradas";
import Footer from "../Componentes/Footer";
import "../CSS/sakura.css";

function Blog() {
    return (
        <body style={{ backgroundColor: "#444" }}>
            <main>
                <section id="blog">
                    <div>
                        <h1 style={{ paddingTop: 120, paddingBottom: 100, color: "#EEE" }}> Óbice y antonomasia </h1>
                    </div>
                    <div style={{ paddingBottom: 100 }}>
                        {Entradas.map((entrada) => (
                            <Entrada key={entrada.titulo} titulo={entrada.titulo} enlace={entrada.enlace} fecha={entrada.fecha} />
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </body>
    );
}

export default Blog;
