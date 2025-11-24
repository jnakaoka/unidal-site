import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/banner/img-banner-1.jpg",
    title: "Pavimentos de alta resistência em betão",
    subtitle: "Execução especializada para indústria, logística e grandes superfícies.",
  },
  {
    image: "/images/banner/img-banner-2.jpg",
    title: "Soluções à medida para cada projeto",
    subtitle: "De pistas de skate a parques de estacionamento, entregamos qualidade.",
  },
  {
    image: "/images/banner/img-banner-3.jpg",
    title: "Acabamentos decorativos e funcionais",
    subtitle: "Betão desativado, impresso e polido para valorizar os espaços.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative h-[320px] md:h-[480px] lg:h-[520px] overflow-hidden">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 max-w-6xl mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-xl">
          {slide.title}
        </h1>
        <p className="mt-3 text-sm md:text-base text-slate-100 max-w-lg">
          {slide.subtitle}
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="#servicos"
            className="px-5 py-2.5 rounded-full bg-unidalRed text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Ver Serviços
          </a>
          <a
            href="#contactos"
            className="px-5 py-2.5 rounded-full bg-white text-sm font-semibold text-unidalDark hover:bg-slate-100 transition"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>

      {/* indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-2 w-2 rounded-full ${
              idx === active ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
