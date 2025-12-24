import { EncabezadoArchivo } from "../Componentes/Encabezados";
import Footer from "../Componentes/Footer";
import Proyectos from "../Data/Proyectos";
import "../CSS/sakura.css";

function Archivo() {
    return (
        <main>
            <EncabezadoArchivo />

            <section id="archivo" style={{ paddingTop: 40, paddingBottom: 50, lineHeight: 2 }}>
                {Proyectos.map((proyecto) => (
                    <div key={proyecto.año}>
                        <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> {proyecto.año} </h3>

                        {proyecto.proyectos.map((item) => (
                            <ul key={item.nombre} style={{ listStyleType: "none", margin: 0 }}>
                                <li onClick={() => { window.open(item.enlace, "_blank") }}>
                                    <span style={{ cursor: "pointer" }}> {item.nombre} </span>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}

export default Archivo;
