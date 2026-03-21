'use client';

import { useState } from "react";
import Link from "next/link";
import { Proyectos } from "../Data/Proyectos";

type ArchivoProps = {
  activo: string;
};

export default function Archivo({ activo }: ArchivoProps) {
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
