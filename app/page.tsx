'use client';

import { useState } from "react";
import Archivo from "../Componentes/Archivo";
import Blog from "../Componentes/Blog";
import Diario from "../Componentes/Diario";
import NavegacionPanel from "../Componentes/NavegacionPanel";
import NavegacionEnlaces from "@/Componentes/NavegacionEnlaces";

export default function Home() {
  const [activo, setActivo] = useState("archivo");

  return (
    <main className="flex flex-col md:grid md:grid-cols-[1fr_0.4fr] md:h-screen">
      <div className="md:grid md:grid-rows-[2fr_1fr]">
        {/* Destacado */}
        <section className="bg-neutral-700 p-8 md:p-6 overflow-hidden flex items-center justify-center md:py-8">
          <iframe src="https://www.youtube.com/embed/z6mUjEQjh_g"
            title="Cortometraje de Péndulo a media oscuridad"
            allowFullScreen className="h-full w-[100%] md:w-[75%]"
          />
        </section>

        {/* Noticia */}
        <Diario />
      </div>

      <section className="bg-black p-6 flex flex-col overflow-hidden">
        {/* Navegación entre el archivo y el blog */}
        <NavegacionPanel activo={activo} setActivo={setActivo} />

        <div className="flex-1 overflow-auto">
          <Archivo activo={activo} />
          <Blog activo={activo} />
        </div>

        {/* Enlaces */}
        <NavegacionEnlaces />
      </section>
    </main>
  );
}
