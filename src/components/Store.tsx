"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Suplementos",
    description: "Whey Protein, Creatina, BCAA, Pré-treinos e muito mais para potencializar seus resultados.",
    tag: "Nutrição",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Roupas Fitness",
    description: "Camisetas, leggings, shorts e bermudas com a marca Saikoo. Treine com estilo.",
    tag: "Moda",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    title: "Acessórios de Treino",
    description: "Luvas, cintos, straps, shakers e tudo que você precisa para um treino completo.",
    tag: "Acessórios",
  },
];

export default function Store() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="loja"
      ref={sectionRef}
      className="reveal py-24 lg:py-32 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Loja Saikoo
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black">
            Tudo para o seu <span className="text-primary">treino</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Além dos treinos, a Saikoo oferece os melhores produtos para
            complementar sua jornada fitness.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-hover group bg-dark-card border border-white/5 rounded-2xl p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {product.icon}
              </div>

              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                {product.tag}
              </span>

              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os produtos da loja Saikoo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
          >
            Fale conosco para encomendar
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
