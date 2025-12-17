import HeroCarousel from "../components/home/HeroCarousel";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      {/* <section
        className="relative w-full h-[65vh] md:h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img-skate-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight">
            Pavimentos de alta resistência em betão para indústria, logística e espaços urbanos.
          </h1>

          <p className="mt-4 text-sm md:text-lg max-w-xl text-slate-100">
            Execução especializada de pavimentos industriais, estacionamentos, áreas exteriores
            e skateparks em Portugal, Espanha e França.
          </p>

          <a
            href="/servicos"
            className="px-5 py-2.5 rounded-full bg-unidalRed text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Ver Serviços
          </a>
          <a
            href="/contactos"
            className="px-5 py-2.5 rounded-full bg-white text-sm font-semibold text-unidalDark hover:bg-slate-100 transition"
          >
            Pedir Orçamento
          </a>
        </div>
      </section> */}

      <HeroCarousel />

      {/* PORQUE ESCOLHER A UNIDAL */}
      {/* <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Por que escolher a UNIDAL?
        </h2>
        <div className="h-1 w-20 bg-unidalRed mb-10" />

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Experiência e confiança</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Desde 2020, executamos pavimentos industriais e urbanísticos com rigor técnico,
              atendendo clientes industriais, residenciais e obras de espaço público.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Tecnologia Laser Screed</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utilizamos tecnologia Laser Screed para garantir planimetria, rapidez de execução
              e acabamentos de excelência em grandes superfícies de betão.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Equipa especializada</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Uma equipa de 68 profissionais focados em qualidade, segurança e cumprimento de prazos
              em cada projeto.
            </p>
          </div>
        </div>
      </section> */}

      {/* SERVIÇOS EM DESTAQUE */}
      <ServicesSection />
      {/* <section className="bg-slate-50 py-14">
        
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Nossos Serviços
          </h2>
          <div className="h-1 w-20 bg-unidalRed mb-10" />

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Pavimentos Industriais",
                img: "/images/img-industrial-1.jpg",
              },
              {
                title: "Betão Polido / Quartzado",
                img: "/images/img-industrial-2.jpg",
              },
              {
                title: "Betão Desativado / Impresso",
                img: "/images/img-residencial-1.jpg",
              },
              {
                title: "Estacionamentos e áreas externas",
                img: "/images/img-residencial-1.jpg",
              },
              {
                title: "Skateparks",
                img: "/images/img-skate-3.jpg",
              },
              {
                title: "Obras exteriores em betão",
                img: "/images/img-skate-2.jpg",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition"
              >
                <div className="h-40 bg-slate-200">
                  <img
                    src={s.img}
                    className="w-full h-full object-cover"
                    alt={s.title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <a
                    href="/servicos"
                    className="text-unidalRed text-sm hover:underline"
                  >
                    Saber mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* PROJETOS EM DESTAQUE */}
      <ProjectsSection />
      {/* <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Projetos em Destaque
        </h2>
        <div className="h-1 w-20 bg-unidalRed mb-10" />

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Pavimento industrial em armazém",
              location: "Portugal",
              img: "/images/img-industrial-2.jpg",
            },
            {
              title: "Acesso exterior em betão desativado",
              location: "França",
              img: "/images/img-residencial-1.jpg",
            },
            {
              title: "Skatepark em betão",
              location: "Europa",
              img: "/images/img-skate-4.jpg",
            },
          ].map((p) => (
            <article
              key={p.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition"
            >
              <div className="h-40 bg-slate-200">
                <img
                  src={p.img}
                  className="w-full h-full object-cover"
                  alt={p.title}
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{p.location}</p>
                <a
                  href="/projetos"
                  className="text-unidalRed text-sm hover:underline"
                >
                  Ver mais projetos →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* CTA FINAL */}
      <section className="bg-unidalRed py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Pronto para iniciar o seu projeto?
          </h2>

          <p className="text-slate-100 mb-6 max-w-2xl mx-auto">
            Solicite um orçamento ou agende uma visita técnica. A UNIDAL acompanha
            todo o processo, desde a preparação da base até ao acabamento final do pavimento.
          </p>

          <a
            href="/contactos"
            className="bg-white text-unidalRed px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Pedir Orçamento
          </a>
        </div>
      </section>
    </div>
  );
}



// import HeroCarousel from "../components/home/HeroCarousel";
// import ServicesSection from "../components/home/ServicesSection";
// import ProjectsSection from "../components/home/ProjectsSection";
// import ContactStrip from "../components/home/ContactStrip";

// export default function Home() {
//   return (
//     <>
//       <HeroCarousel />
//       <ServicesSection />
//       <ProjectsSection />
//       <ContactStrip />
//     </>
//   );
// }
