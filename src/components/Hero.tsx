"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/gym-interior.jpg"
          alt="Interior da Academia Saikoo"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wider uppercase mb-6">
              A melhor academia da região
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Transforme seu corpo.{" "}
            <span className="text-primary">Supere seus limites.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            Na Academia Saikoo, você encontra o ambiente perfeito para alcançar
            seus objetivos. Equipamentos modernos, profissionais qualificados e
            uma energia que transforma.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="btn-primary animate-pulse-glow px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider text-center"
            >
              Comece agora
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider text-center border-2 border-white/20 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Conheça a academia
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { number: "500+", label: "Alunos ativos" },
              { number: "10+", label: "Anos de história" },
              { number: "100+", label: "Equipamentos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-black text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
