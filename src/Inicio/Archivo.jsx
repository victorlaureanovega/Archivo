import { EncabezadoArchivo } from "../Componentes/Encabezados";
import Footer from "../Componentes/Footer";
import "../CSS/sakura.css";

function Archivo() {
    return (
        <main>
            <EncabezadoArchivo />

            <section id="archivo" style={{ paddingTop: 50, paddingBottom: 50, lineHeight: 2 }}>
                <div>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2023 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://www.amazon.com.mx/dp/B0CKKTS121", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Túneles </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ paddingTop: 10 }}>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2024 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://el-cielo-de-laika.vercel.app/", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> El cielo de Laika </span>
                            </li>

                            <li onClick={ () => {window.open("https://www.amazon.com.mx/dp/B0DDG41VF1", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Ciudades de treinta minutos </span>
                            </li>

                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Un_juego", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Un juego </span>
                            </li>

                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Ordenamiento_HRH", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Ordenamiento HRH </span>
                            </li>
                        </ul>

                    </div>
                </div>

                <div style={{ paddingTop: 10 }}>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2025 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://youtu.be/z6mUjEQjh_g", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Péndulo a media oscuridad </span>
                            </li>
                            
                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Convertidor", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Convertidor </span>
                            </li>
                            
                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Katia_y_la_muerte", "_blank")} }>
                                <span style={{ cursor: "pointer" }}> Katia y la muerte </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Archivo;
