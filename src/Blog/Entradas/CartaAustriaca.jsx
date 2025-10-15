import Indice from "../Indice";
import "../../css/sakura.css";

function CartaAustriaca() {
    return (
        <main>
            <div className="entrada-blog" style={{ paddingBottom: 80 }}>
                <div className="contenedor-encabezado">
                    <Indice titulo="Carta a una austriaca" />
                </div>
                <p style={{ fontSize: 17 }}>
                    (También publicado en <span onClick={() => window.open("https://revista-theoria.github.io/#/visualizar/1", "_blank")}
                        style={{ textDecoration: "underline", cursor: "pointer" }}>
                        <span style={{ fontStyle: "italic" }}>Theoria</span>, No. 1: Inicios</span>, el 14 de junio de 2025)
                </p>
                <br /><br /><br /><br />
                <p>
                    En ocasiones me pregunto por qué nadie ha escrito un manual para mirar por la ventana. Si para Marker la imagen de la felicidad es la que se muestra al comienzo de <span style={{ fontStyle: "italic" }}>Sans soleil</span>, mi imagen de la tristeza, igual de simple, consiste en una ventana que da a un lugar abierto: los árboles son personas, y estas tan sólo sombras de algo que no vale la pena anticipar. Me gusta perderme en cosas sencillas, pensar en cartas extensas y jugar a conocer o reconocer personas. Creo que sólo las ventanas y las palabras me permiten hacerlo sin reservas, quizás porque casi nadie las comprende.
                </p>
                <p>
                    Escribirte esta carta responde únicamente a eso que podríamos llamar «desajuste», una suerte de necesidad de lluvia e imágenes inciertas. Este es mi intento de arrojar una botella al mar, porque sólo refugiado en los inexorables vértices o curvas de las letras y las cifras, soy capaz de interrogarme y de aventurar una conversación imposible con ciertos matices de verosimilitud y razonabilidad.
                </p>
                <p>
                    Aunque intente convencerme de lo contrario, estas páginas tratan sobre mí; te convierto en una sombra escurridiza que justifica no sólo esta carta, sino la vacilación, el pudor y el afecto con que la escribo. ¿Por qué buscarte directamente y no ensayar cualquier otro texto donde capturar una resonancia emocional más fiel a lo que quiero decir, a lo que en verdad me motiva a sentarme al escritorio, a dar innumerables vueltas alrededor de él creyendo que no miro por una ventana?
                </p>
                <p>
                    Para ti, la literatura parece ser una suerte de espejo profundo que intenta comprendernos, más o menos de la misma forma en que uno se demora en mirar hacia allá. Intentaré ser claro: en ti y en la relación que estableces entre la literatura y el cambio encontré un curioso objeto de melancolía: un tipo de libertad que precede al conflicto con las cosas permanentes, ese abismo entre ilusión y realidad, distancia y deseo. Nada pierdo con reconocer que soy terriblemente sentimental e indeciso. Quizás ahora puedas empezar a comprender mi imagen de la tristeza. Me gusta pensar que poco a poco he superado el miedo a vivir en conflicto, pero no a la soledad, porque sé que personas como yo no sobrevivirán allá afuera.
                </p>
                <p>
                    En el último año, no sé con qué suerte, he publicado algunos textos que tal vez han agradado a amigos y conocidos. He vuelto la escritura un acto de letargo y vergüenza, poco más que una rutina, pero es a través de esas páginas, de esos libros, que puedo reconocerme, explicar y justificar no sólo mis días, sino las cosas que escapan a mi materialidad y a mis sueños. He escrito sobre la noche y una vereda que cruzo todas las tardes, sobre espejos tersando la oscuridad o la recurrente sombra de alguien; he intentado escribir sobre torres e imágenes vacías. Los temas no son el arma, sino otra fotografía que espera en la cómoda, junto al ventanal de esta habitación desde donde te escribo, aquello que me hace preguntarme día con día si he tomado las decisiones correctas. Nunca he dado a los espejos ese tratamiento literario que expresas con tanta solemnidad y grisura: para mí, no han sido más que lo que son en el mundo de acá.
                </p>
                <p>
                    En ese territorio de muros inciertos buscamos una oportunidad para repasar las sombras que contienen y configuran todo lo que nos rodea. Este acto fuera de todo tiempo parece terminar cuando alguien o algo se lo apropia, cuando uno encuentra la forma de escribir o leer fechas e imágenes como esas que le persiguen. Y, a pesar de todo, es probable que algún día termine despreciándolas u olvidándolas.
                </p>
                <br />
                <p style={{ textAlign: "right", fontStyle: "italic" }}>
                    Zapopan, Jalisco, 21 de agosto de 2024
                </p>
            </div>
        </main>
    );
}

export default CartaAustriaca;
