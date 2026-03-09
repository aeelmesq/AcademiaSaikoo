"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  {
    src: "/gym-interior.jpg",
    alt: "Interior da academia - Área de musculação",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gym-equipment.jpg",
    alt: "Equipamentos modernos",
    span: "",
  },
  {
    src: "/gym-people.jpg",
    alt: "Alunos treinando",
    span: "",
  },
];

export default function Gallery() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="galeria" ref={sectionRef} className="reveal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Galeria
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">
            Conheça nosso <span className="text-primary">espaço</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Veja por que a Saikoo é referência em estrutura e qualidade.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid md:grid-cols-3 md:grid-rows-2 gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className={`${image.span} group relative overflow-hidden rounded-2xl aspect-[4/3]`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
