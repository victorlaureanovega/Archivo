'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Entradas } from "../../../Data/Entradas";

/*
En este componente se renderizan todas las entradas del blog (lo cual ocurre en el div con dangerouslySetInnerHTML).
Por lo mismo, todas las entradas comparten el mismo encabezado y, en general, el mismo formato
*/
export default function Entrada() {
  const { entrada: enlace } = useParams();
  const entrada = Entradas.find(e => e.enlace === enlace);
  const [texto, setTexto] = useState("");

  // Se busca el archivo HTML con el mismo nombre de la ruta a la que se accedió
  useEffect(() => {
    if (entrada) {
      fetch(`/EntradasBlog/${entrada.enlace}.html`)
        .then(res => res.text())
        .then(setTexto);
    }
  }, [entrada]);

  return (
    <article>
      {/* Encabezado */}
      <div className="bg-[#444]">
        {/* Título de la entrada */}
        <div className="text-[#EEE] max-w-[55em] mx-8 pt-34 md:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{entrada?.titulo}</h1>
          <p className="text-sm pb-6">Publicado el {entrada?.fecha}</p>
        </div>
      </div>

      {/* Texto */}
      <div className="max-w-[55em] mx-auto pt-[10px] pb-[80px] px-8 md:px-0">
        <div className="text-[14.5px] md:text-[16px] leading-loose mt-10 md:mt-16 space-y-4" dangerouslySetInnerHTML={{ __html: texto }} />
      </div>
    </article>
  );
}
