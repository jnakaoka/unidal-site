// src/pages/EticaEmpresarialPrevencaoCorrupcao.tsx

export default function EticaEmpresarialPrevencaoCorrupcao() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Ética Empresarial e Prevenção da Corrupção
        </h1>
        <p className="text-sm md:text-base text-slate-700">
          A Unidal assume um compromisso claro com a integridade, a transparência e a
          prevenção de riscos de corrupção e infrações conexas. Nesta página pode
          consultar os documentos que estruturam o nosso sistema de ética e
          compliance interno.
        </p>
      </header>

      {/* Código de Ética e Conduta */}
      <section className="border rounded-2xl p-5 md:p-6 bg-white shadow-sm space-y-3">
        <h2 className="text-lg md:text-xl font-semibold">
          Código de Ética e Conduta
        </h2>
        <p className="text-sm md:text-base text-slate-700">
          O Código de Ética e Conduta define os valores, princípios e regras de
          comportamento que devem orientar a atuação de todos os colaboradores,
          dirigentes, prestadores de serviços e parceiros da Unidal. Estabelece
          deveres gerais de conduta, enumera condutas proibidas (como corrupção,
          fraude, uso indevido de informação, conflitos de interesse) e regula o
          funcionamento do Canal Interno de Denúncia e a proteção do denunciante.
        </p>
        <p className="text-xs md:text-sm text-slate-600">
          Documento aprovado pela Gerência, em conformidade com o Regime Geral de
          Prevenção da Corrupção e o Regime Geral de Proteção de Denunciantes.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/docs/codigo-etica-conduta-unidal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
          >
            Ver PDF
          </a>
          <a
            href="/docs/codigo-etica-conduta-unidal.pdf"
            download
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Descarregar
          </a>
        </div>
      </section>

      {/* Plano de Prevenção de Riscos */}
      <section className="border rounded-2xl p-5 md:p-6 bg-white shadow-sm space-y-3">
        <h2 className="text-lg md:text-xl font-semibold">
          Plano de Prevenção de Riscos de Corrupção e Infrações Conexas
        </h2>
        <p className="text-sm md:text-base text-slate-700">
          O Plano de Prevenção de Riscos de Corrupção e Infrações Conexas identifica e
          avalia as principais áreas de risco na atividade da Unidal (contratação,
          gestão financeira, recursos humanos, execução de obras, relações
          internacionais, entre outras) e define medidas organizacionais e
          operacionais para prevenir, mitigar e controlar esses riscos.
        </p>
        <p className="text-sm md:text-base text-slate-700">
          O plano enquadra-se no Regime Geral de Prevenção da Corrupção, prevê o
          funcionamento do Canal Interno de Denúncia, ações de formação e
          sensibilização, bem como mecanismos de monitorização e revisão periódica.
        </p>
        <p className="text-xs md:text-sm text-slate-600">
          Documento aplicável a todos os colaboradores, parceiros e entidades que
          atuem em nome ou por conta da Unidal, em Portugal e no estrangeiro.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/docs/plano-prevencao-riscos-corrupcao-unidal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-900 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
          >
            Ver PDF
          </a>
          <a
            href="/docs/plano-prevencao-riscos-corrupcao-unidal.pdf"
            download
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Descarregar
          </a>
        </div>
      </section>

      <section className="border rounded-2xl p-4 md:p-5 bg-slate-50 text-xs md:text-sm text-slate-600 space-y-2">
        <p>
          Estes documentos integram o sistema de governação, ética e compliance da
          Unidal - Construção e Pavimentos, Lda., e são complementares ao Canal de
          Denúncias disponível neste site.
        </p>
        <p>
          Para comunicar suspeitas de infrações, utilize o Portal de Denúncias. Para
          reclamações enquanto cliente/consumidor, utilize o Livro de Reclamações
          eletrónico.
        </p>
      </section>
    </div>
  );
}
