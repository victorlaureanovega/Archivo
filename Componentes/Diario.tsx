import { Noticias } from "../Data/Noticias";

// Este componente muestra la noticia más reciente del arreglo Noticias. Estas son ficticias y se refieren a algún suceso ocurrido en Oztotlán
export default function Diario() {
    const noticia = Noticias[0];
    
    return (
        <article className="bg-[#EEE] py-18 md:py-6 px-8 md:px-28 flex items-center">
          <div className="font-[Antic-Didon]">
            <h2 className="text-[#5e2129] font-bold mb-6 border-b-2 uppercase text-xl">Diario de Oztotlán</h2>
            <h3 className="text-md font-bold mb-2">{noticia.titulo}</h3>
            <p className="text-sm leading-relaxed">{noticia.contenido}</p>
          </div>
        </article>
    );
}