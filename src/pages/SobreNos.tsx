export default function SobreNos() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Sobre a UNIDAL
      </h1>
      <div className="h-1 w-20 bg-unidalRed mb-8" />

      {/* Introdução */}
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
        A UNIDAL é uma empresa especializada na execução de pavimentos
        industriais e urbanísticos em betão, atuando em Portugal, Espanha e
        França. Com uma equipa de 68 profissionais altamente qualificados e
        tecnologia avançada, como o sistema Laser Screed, garantimos
        pavimentos com precisão, durabilidade e acabamento superior.
      </p>

      {/* História */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">A nossa história</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          A UNIDAL nasceu em 2020 através de um desafio entre amigos que
          decidiram empreender na área dos pavimentos em betão. Desde o início,
          o objetivo sempre foi claro: oferecer soluções de alta qualidade,
          combinando técnica, inovação e uma equipa comprometida com o rigor
          profissional.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Hoje, a empresa atua em vários setores — industrial, residencial e
          espaços públicos — mantendo o mesmo compromisso: entregar obras
          duráveis, seguras e executadas com excelência.
        </p>
      </section>

      {/* Missão */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Missão</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          A missão da UNIDAL assenta na execução e aplicação de pavimentos
          industriais e urbanísticos em betão, com garantia de qualidade e
          satisfação dos seus clientes, respeitando critérios de segurança,
          sustentabilidade, ambiente e responsabilidade social.
        </p>
      </section>

      {/* Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Valores</h2>

        <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
          <li>
            <strong className="font-medium text-slate-800">Confiança:</strong>{" "}
            Construímos relações transparentes e duradouras com clientes,
            fornecedores e colaboradores.
          </li>
          <li>
            <strong className="font-medium text-slate-800">Seriedade:</strong>{" "}
            Atuamos com responsabilidade, rigor técnico e respeito por cada
            projeto e compromisso.
          </li>
          <li>
            <strong className="font-medium text-slate-800">
              Profissionalismo:
            </strong>{" "}
            Equipa experiente e dedicada, focada em entregar resultados de alto
            nível.
          </li>
          <li>
            <strong className="font-medium text-slate-800">Competência:</strong>{" "}
            Conhecimento técnico aliado a práticas de obra eficientes,
            garantindo pavimentos de elevada qualidade.
          </li>
          <li>
            <strong className="font-medium text-slate-800">Qualidade:</strong>{" "}
            Rigor no processo de execução, equipamentos modernos e materiais de
            confiança que asseguram pavimentos duráveis.
          </li>
        </ul>

        <p className="mt-4 text-slate-600 text-sm md:text-base">
          É com base nesses valores que a UNIDAL construiu uma cultura sólida,
          capaz de enfrentar desafios cada vez mais exigentes no setor da
          construção.
        </p>
      </section>

      {/* Atuação geográfica */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Onde atuamos</h2>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Atuamos em três países europeus, em diferentes tipologias de obra:
        </p>

        <ul className="list-disc list-inside text-slate-600 mt-3 text-sm md:text-base">
          <li>Portugal</li>
          <li>Espanha</li>
          <li>França</li>
        </ul>

        <p className="mt-4 text-slate-600 text-sm md:text-base">
          Independentemente da localização, garantimos a mesma qualidade e
          compromisso em cada projeto executado.
        </p>
      </section>

      {/* Equipa */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">A nossa equipa</h2>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          A UNIDAL é formada por uma equipa de <strong>68 trabalhadores</strong>,
          incluindo técnicos especializados, operadores experientes e equipas de
          obra que trabalham diariamente para entregar resultados fiéis às
          expectativas dos nossos clientes.
        </p>
      </section>

      {/* Tecnologia */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tecnologia e inovação</h2>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
          Um dos destaques da nossa operação é a utilização da tecnologia{" "}
          <strong>Lasercreed</strong>, que permite alcançar planimetria
          superior, rapidez de execução e acabamentos de excelência em grandes
          áreas de pavimentação.
        </p>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Esta tecnologia, aliada à experiência da nossa equipa, coloca a UNIDAL
          entre as empresas de referência na aplicação de pavimentos industriais
          e urbanísticos.
        </p>
      </section>
    </div>
  );
}


// export default function SobreNos() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-semibold mb-4">Sobre Nós</h1>
//       <p className="text-sm text-slate-700 leading-relaxed">
//         A Unidal é uma empresa especializada em pavimentos em betão de alta
//         resistência, atuando em projetos industriais, comerciais e decorativos.
//         Aqui depois colocamos o texto institucional completo, fotos da equipa,
//         missão, visão e valores.
//       </p>
//     </div>
//   );
// }