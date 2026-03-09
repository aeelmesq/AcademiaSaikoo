"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  "Acesso completo à academia",
  "Equipamentos modernos",
  "Ambiente motivador",
  "Treinos livres",
  "Acompanhamento profissional",
  "Vestiários equipados",
];

export default function Plans() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="planos" ref={sectionRef} className="reveal py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nossos planos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">
            Invista no seu <span className="text-primary">melhor</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Escolha o plano ideal e comece sua transformação hoje mesmo.
          </p>
        </div>

        {/* Plan Card */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-400 rounded-3xl blur-lg opacity-30" />

            <div className="relative bg-dark-card border border-white/10 rounded-3xl p-8 sm:p-10">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Mais popular
                </span>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold">Plano Mensal</h3>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <span className="text-gray-400 text-lg">R$</span>
                  <span className="text-6xl font-black text-primary">120</span>
                  <span className="text-gray-400 text-lg">/mês</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de me matricular na Academia Saikoo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 w-full py-4 rounded-xl text-lg font-bold uppercase tracking-wider block text-center"
              >
                Matricule-se agora
              </a>

              <p className="text-center text-gray-500 text-sm mt-4">
                Sem taxa de matrícula. Cancele quando quiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
