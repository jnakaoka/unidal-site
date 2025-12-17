export default function Servicos() {
  const services = [
    {
      title: "Pavimentos Industriais",
      img: "/images/img-industrial-1.jpg",
      desc: "Execução de pavimentos de alta resistência para naves industriais, logística e armazéns, dimensionados para tráfego intenso de empilhadores e cargas pesadas.",
    },
    {
      title: "Betão Desativado",
      img: "/images/img-residencial-1.jpg",
      desc: "Solução decorativa e antiderrapante para zonas exteriores, com agregados à vista e grande durabilidade, ideal para passeios, acessos e zonas de lazer.",
    },
    {
      title: "Betão Impresso",
      img: "/images/img-residencial-1.jpg",
      desc: "Acabamentos com textura e padrão, que reproduzem pedra, madeira ou lajetas, combinando estética e resistência em espaços residenciais e comerciais.",
    },
    {
      title: "Betão Polido / Quartzado",
      img: "/images/img-industrial-2.jpg",
      desc: "Superfícies lisas e resistentes ao desgaste, com excelente planimetria, facilitando a circulação de equipamentos e a limpeza diária.",
    },
    {
      title: "Estacionamentos e Áreas Externas",
      img: "/images/img-residencial-1.jpg",
      desc: "Pavimentos em betão para parques de estacionamento, acessos a condomínios, zonas de carga e descarga e áreas urbanas de grande circulação.",
    },
    {
      title: "Skateparks e Soluções Especiais",
      img: "/images/img-skate-3.jpg",
      desc: "Execução de pistas de skate e formas especiais em betão, com curvas suaves e acabamentos técnicos pensados para segurança e performance.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Serviços de pavimentação em betão
      </h1>
      <div className="h-1 w-20 bg-unidalRed mb-8" />

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
        A UNIDAL é especializada na execução de pavimentos industriais e
        urbanísticos em betão, com soluções adaptadas a ambientes industriais,
        áreas externas e projetos residenciais. Atuamos em Portugal, Espanha e
        França, combinando experiência em obra com equipamentos de última
        geração, como tecnologia Laser Screed.
      </p>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
        Seja para um armazém industrial, um parque de estacionamento ou um
        skatepark completo, a nossa equipa de mais de 60 profissionais está
        preparada para garantir qualidade, durabilidade e segurança em cada
        projeto.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition"
          >
            {/* Imagem do serviço */}
            <div className="h-40 bg-slate-200">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}



// export default function Servicos() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       {/* Título */}
//       <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//         Nossos Serviços
//       </h1>
//       <div className="h-1 w-20 bg-unidalRed mb-8" />

//       {/* Introdução */}
//       <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
//         sagittis, massa at fringilla convallis, nulla orci ultricies nisl,
//         vitae dapibus lorem massa sed nibh. Suspendisse commodo mattis sem,
//         convallis tristique magna vehicula id.
//       </p>

//       {/* Grid de serviços */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//         {[1, 2, 3, 4, 5, 6].map((i) => (
//           <article
//             key={i}
//             className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition"
//           >
//             <div className="h-40 bg-slate-200">
//               <img
//                 src={`https://placehold.co/600x400?text=Servico+${i}`}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="p-4">
//               <h3 className="font-semibold text-lg mb-2">
//                 Serviço {i}
//               </h3>
//               <p className="text-sm text-slate-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Vestibulum interdum felis nec lorem maximus elementum.
//               </p>
//             </div>
//           </article>
//         ))}

//       </div>
//     </div>
//   );
// }

