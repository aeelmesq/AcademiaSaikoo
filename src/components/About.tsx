"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Equipamentos Modernos",
    description: "Aparelhos de última geração para treinos completos e eficientes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Profissionais Qualificados",
    description: "Equipe de instrutores prontos para guiar seu treino com excelência.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ambiente Motivador",
    description: "Um espaço pensado para inspirar e potencializar seus resultados.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horários Flexíveis",
    description: "Aberto em horários amplos para se adequar à sua rotina.",
  },
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="reveal py-24 lg:py-32 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/foto.png"
                alt="Alunos treinando na Academia Saikoo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
                priority
                className="object-cover"
              />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Sobre nós
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
              Mais que uma academia.{" "}
              <span className="text-primary">Uma experiência.</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              A Academia Saikoo nasceu com a missão de oferecer o melhor em
              estrutura, atendimento e resultados. Nosso espaço foi projetado
              para proporcionar uma experiência completa de treino, com
              equipamentos de alta performance e um ambiente que respira
              motivação.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-dark/50 border border-white/5 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
