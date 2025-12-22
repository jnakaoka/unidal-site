// src/pages/PortalDenuncias.tsx
import { useState } from "react";

export default function PortalDenuncias() {
  const [anonima, setAnonima] = useState(true);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Formulário submetido (placeholder). Depois ligamos ao EmailJS ou API.");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Canal de Denúncias</h1>

      <p className="text-slate-700 mb-8">
        Utilize este formulário para comunicar, de forma segura e confidencial,
        situações que possam constituir infrações à lei ou às normas internas da
        Unidal. A denúncia pode ser feita de forma anónima ou identificada.
      </p>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* ====================== */}
        {/* 1. TIPO DE DENÚNCIA */}
        {/* ====================== */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Tipo de Denúncia</h2>

          <div>
            <label className="block text-sm font-medium mb-1">
              Categoria da infração *
            </label>
            <select
              className="w-full border rounded-lg px-3 py-2"
              required
            >
              <option value="">Selecione...</option>
              <option value="corrupcao">Corrupção / Fraude</option>
              <option value="protecao_dados">Proteção de dados / Privacidade</option>
              <option value="seguranca">Segurança e saúde no trabalho</option>
              <option value="assedio">Assédio / Discriminação</option>
              <option value="outra">Outra infração</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              A sua relação com a Unidal
            </label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option value="">Selecione...</option>
              <option value="trabalhador">Trabalhador(a)</option>
              <option value="ex_trabalhador">Ex-trabalhador(a)</option>
              <option value="prestador">Prestador de serviços / Fornecedor</option>
              <option value="cliente">Cliente</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </section>

        {/* ====================== */}
        {/* 2. DESCRIÇÃO DOS FACTOS */}
        {/* ====================== */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Descrição dos factos</h2>

          <div>
            <label className="block text-sm font-medium mb-1">
              Descrição detalhada dos factos *
            </label>
            <textarea
              required
              className="w-full border rounded-lg px-3 py-2 min-h-[160px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Quando ocorreram os factos?
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Ex: Janeiro de 2024, ou uma data aproximada"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Onde ocorreram os factos?
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Ex: Obra X, escritório de Leiria, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Pessoas envolvidas
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 min-h-[80px]"
              placeholder="Nomes, funções ou áreas envolvidas"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Testemunhas (se aplicável)
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 min-h-[80px]"
            />
          </div>
        </section>

        {/* ====================== */}
        {/* 3. ANONIMA OU IDENTIFICADA */}
        {/* ====================== */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Identificação do denunciante</h2>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={anonima}
              onChange={() => setAnonima(!anonima)}
            />
            Quero apresentar a denúncia de forma anónima
          </label>

          {!anonima && (
            <div className="space-y-3 border rounded-lg p-4 bg-slate-50">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nome completo *
                </label>
                <input
                  className="w-full border rounded-lg px-3 py-2"
                  required={!anonima}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2"
                  required={!anonima}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Contacto telefónico (opcional)
                </label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
          )}
        </section>

        {/* ====================== */}
        {/* 4. DECLARAÇÕES FINAIS */}
        {/* ====================== */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Declarações finais</h2>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            Declaro que as informações prestadas são verdadeiras de boa-fé.
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            Li e compreendi a informação sobre o tratamento dos dados pessoais.
          </label>
        </section>

        {/* BOTÃO */}
        <button
          type="submit"
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-black transition font-medium"
        >
          Submeter denúncia
        </button>
      </form>
    </div>
  );
}



// // src/pages/PortalDenuncias.tsx
// export default function PortalDenuncias() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
//       <header className="space-y-2">
//         <h1 className="text-2xl md:text-3xl font-semibold">
//           Canal de Denúncias
//         </h1>
//         <p className="text-sm md:text-base text-slate-600">
//           A Unidal disponibiliza este Canal de Denúncias para que qualquer
//           pessoa possa comunicar, de forma segura e confidencial, situações
//           que possam constituir infrações à lei ou às normas internas da
//           organização.
//         </p>
//       </header>

//       <section className="space-y-3">
//         <h2 className="text-lg font-semibold">Quem pode denunciar?</h2>
//         <p className="text-sm md:text-base text-slate-700">
//           Podem utilizar este canal, nomeadamente:
//         </p>
//         <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
//           <li>Trabalhadores da Unidal;</li>
//           <li>Prestadores de serviços, subcontratados e fornecedores;</li>
//           <li>
//             Sócios, membros de órgãos sociais e pessoas que exerçam funções de
//             direção ou supervisão;
//           </li>
//           <li>Estagiários, voluntários e candidatos a emprego;</li>
//           <li>
//             Ex-trabalhadores e outras pessoas que tenham tido uma relação
//             profissional com a Unidal.
//           </li>
//         </ul>
//       </section>

//       <section className="space-y-3">
//         <h2 className="text-lg font-semibold">
//           Que situações podem ser denunciadas?
//         </h2>
//         <p className="text-sm md:text-base text-slate-700">
//           Devem ser comunicadas através deste canal situações que possam
//           constituir, por exemplo:
//         </p>
//         <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
//           <li>Violação de normas legais ou regulamentares aplicáveis;</li>
//           <li>Corrupção, fraude, abuso de poder ou conflito de interesses;</li>
//           <li>
//             Infrações em matéria de proteção de dados pessoais e segurança da
//             informação;
//           </li>
//           <li>Infrações em matéria de saúde e segurança no trabalho;</li>
//           <li>
//             Práticas discriminatórias ou assédio, quando integrem infrações
//             legais relevantes;
//           </li>
//           <li>
//             Outras condutas que possam afetar gravemente o interesse público
//             ou os interesses da Unidal, dos seus colaboradores, clientes ou
//             parceiros.
//           </li>
//         </ul>
//         <p className="text-xs md:text-sm text-slate-600">
//           Este canal não se destina a reclamações de clientes/consumidores.
//           Para esse efeito deverá ser utilizado o Livro de Reclamações.
//         </p>
//       </section>

//       <section className="space-y-3">
//         <h2 className="text-lg font-semibold">
//           Como pode apresentar uma denúncia?
//         </h2>
//         <p className="text-sm md:text-base text-slate-700">
//           Neste momento, as denúncias podem ser apresentadas por escrito,
//           através de correio eletrónico dedicado:
//         </p>
//         <div className="border rounded-xl p-4 bg-slate-50">
//           <p className="text-sm md:text-base text-slate-700">
//             <span className="font-semibold">E-mail do Canal de Denúncias:</span>{" "}
//             <a
//               href="mailto:canaldenuncias@unidal.pt"
//               className="text-blue-600 hover:underline"
//             >
//               canaldenuncias@unidal.pt
//             </a>
//           </p>
//           <p className="mt-2 text-xs md:text-sm text-slate-600">
//             Na mensagem, descreva de forma tão detalhada quanto possível os
//             factos, datas, locais, pessoas envolvidas e quaisquer elementos
//             de prova de que disponha.
//           </p>
//         </div>
//         <p className="text-xs md:text-sm text-slate-600">
//           Este endereço é acedido apenas por pessoas autorizadas e sujeitas a
//           dever de sigilo, garantindo a confidencialidade da informação
//           recebida.
//         </p>
//       </section>

//       <section className="space-y-3">
//         <h2 className="text-lg font-semibold">
//           Garantias dadas ao denunciante
//         </h2>
//         <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-1">
//           <li>
//             Confidencialidade da identidade do denunciante e das pessoas
//             envolvidas;
//           </li>
//           <li>
//             Possibilidade de apresentação de denúncias identificadas ou
//             anónimas;
//           </li>
//           <li>
//             Proibição de atos de retaliação contra quem efetue uma denúncia de
//             boa-fé;
//           </li>
//           <li>
//             Tratamento da informação apenas por pessoas autorizadas e
//             sujeitas a dever de sigilo;
//           </li>
//           <li>
//             Registo e conservação da denúncia apenas pelo período necessário ao
//             cumprimento das obrigações legais.
//           </li>
//         </ul>
//       </section>

//       <section className="space-y-3">
//         <h2 className="text-lg font-semibold">
//           Proteção de dados e confidencialidade
//         </h2>
//         <p className="text-sm md:text-base text-slate-700">
//           Os dados pessoais recolhidos no âmbito deste canal são tratados pela
//           Unidal, na qualidade de responsável pelo tratamento, exclusivamente
//           para as finalidades de receção, análise e tratamento de denúncias,
//           cumprimento de obrigações legais e defesa de direitos em processos
//           judiciais ou administrativos.
//         </p>
//         <p className="text-xs md:text-sm text-slate-600">
//           O tratamento de dados é efetuado nos termos do Regulamento Geral
//           sobre a Proteção de Dados (RGPD) e da legislação nacional aplicável.
//           Para mais informações, consulte a nossa Política de Privacidade.
//         </p>
//       </section>
//     </div>
//   );
// }
