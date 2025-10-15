import { EncabezadoArchivo } from "../Componentes/Encabezados";
import Footer from "../Componentes/Footer";
import "../css/sakura.css";

function Archivo() {
    return (
        <main>
            <EncabezadoArchivo />

            <section id="archivo" style={{ paddingTop: 100, paddingBottom: 100, lineHeight: 2 }}>
                <div>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2023 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://www.amazon.com.mx/dp/B0CKKTS121", "_blank")} }
                                style={{ cursor: "pointer" }}> Túneles </li>
                        </ul>
                    </div>
                </div>

                <div style={{ paddingTop: 30 }}>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2024 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://el-cielo-de-laika.vercel.app/", "_blank")} }
                                style={{ cursor: "pointer" }}> El cielo de Laika </li>

                            <li onClick={ () => {window.open("https://www.amazon.com.mx/dp/B0DDG41VF1", "_blank")} }
                                style={{ cursor: "pointer" }}> Ciudades de treinta minutos </li>

                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Un_juego", "_blank")} }
                                style={{ cursor: "pointer" }}> Un juego </li>

                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Ordenamiento_HRH", "_blank")} }
                                style={{ cursor: "pointer" }}> Ordenamiento HRH </li>
                        </ul>

                    </div>
                </div>

                <div style={{ paddingTop: 30 }}>
                    <h3 style={{ paddingBottom: 15, backgroundColor: "#444", color: "#EEE", borderRadius: 6, padding: 10 }}> 2025 </h3>
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            <li onClick={ () => {window.open("https://youtu.be/z6mUjEQjh_g", "_blank")} }
                                style={{ cursor: "pointer" }}> Péndulo a media oscuridad </li>
                            
                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Convertidor", "_blank")} }
                                style={{ cursor: "pointer" }}> Convertidor </li>
                            
                            <li onClick={ () => {window.open("https://github.com/victorlaureanovega/Katia_y_la_muerte", "_blank")} }
                                style={{ cursor: "pointer" }}> Katia y la muerte </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Archivo;
