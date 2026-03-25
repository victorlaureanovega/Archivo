'use client';

import { useState } from "react";
import Link from "next/link";
import { Proyectos } from "../Data/Proyectos";
import type { ArchivoBlog } from "../Data/Interfaces"

/*
Este componente es el archivo de proyectos, donde se muestra una tarjeta de acordeón por cada año, junto con los proyectos
que fueron publicados en el curso de este
*/
export default function Archivo({ activo }: ArchivoBlog) {
    const [archivoTarjeta, setArchivoTarjeta] = useState<number | null>(null);

    return (
        <main>
            {activo === "archivo" &&
                <article className="flex flex-col gap-4">
                    {Proyectos.map((item) => {
                        const abierta = archivoTarjeta === item.anio;

                        return (
                            <div key={item.anio} className="bg-[#DDD] p-4 hover:cursor-pointer rounded-lg"
                                onClick={() => setArchivoTarjeta(abierta ? null : item.anio)}
                            >
                                {/* Encabezado */}
                                <h3>{item.anio}</h3>

                                {/* Contenido */}
                                {abierta && (
                                    <div className="flex flex-col gap-3 text-sm pt-5">
                                        {item.proyectos.map((proyecto, index) => (
                                            <p key={index}>
                                                <Link href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                    {proyecto.nombre}
                                                </Link>
                                            </p>
                                        ))}
                                    </div>)}
                            </div>
                        );
                    })}
                </article>}
        </main>
    );
}
