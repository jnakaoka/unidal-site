import React from "react";

const Privacidade: React.FC = () => {
  return (
    <main className="w-full px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white/70 dark:bg-slate-900/70 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Política de Privacidade
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Última atualização: 08-12-2025
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <div>
            <h2 className="font-semibold text-base mb-2">1. Introdução</h2>
            <p>
              A Unidal Tecnologia Lda. (&quot;Unidal&quot;, &quot;nós&quot;,
              &quot;nossa&quot;) valoriza a proteção dos dados pessoais dos
              utilizadores da nossa plataforma de gestão operacional
              (&quot;Plataforma Unidal&quot;) e do nosso website.
            </p>
            <p className="mt-2">
              Esta Política de Privacidade explica como recolhemos, utilizamos,
              armazenamos e protegemos os seus dados pessoais, bem como os
              direitos que lhe assistem ao abrigo do Regulamento Geral sobre a
              Proteção de Dados (RGPD) e da legislação nacional aplicável.
            </p>
            <p className="mt-2">
              Ao utilizar o nosso website ou a Plataforma Unidal, está a
              aceitar os termos desta Política de Privacidade.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Responsável pelo Tratamento
            </h2>
            <p>
              O responsável pelo tratamento dos dados é:
              <br />
              <strong>Unidal Tecnologia Lda.</strong>
              <br />
              Sede: Leiria, Portugal
              <br />
              Email de contacto:{" "}
              <a
                href="mailto:geral@unidal.pt"
                className="text-blue-600 hover:underline"
              >
                geral@unidal.pt
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Que dados pessoais recolhemos
            </h2>
            <h3 className="font-medium">3.1 Dados de identificação e autenticação</h3>
            <ul className="list-disc list-inside mt-1">
              <li>Nome</li>
              <li>Email profissional</li>
              <li>Nome de utilizador (username)</li>
              <li>Palavra-passe (armazenada de forma encriptada)</li>
            </ul>

            <h3 className="font-medium mt-3">3.2 Dados de utilização da plataforma</h3>
            <ul className="list-disc list-inside mt-1">
              <li>Registos de ações realizadas na plataforma (logs)</li>
              <li>Data e hora de acesso, endereço IP, navegador e dispositivo</li>
              <li>
                Informação relacionada com projetos, equipas e atividades
                associadas ao seu perfil
              </li>
            </ul>

            <h3 className="font-medium mt-3">3.3 Dados de contacto</h3>
            <ul className="list-disc list-inside mt-1">
              <li>Email e, quando aplicável, telefone profissional</li>
            </ul>

            <h3 className="font-medium mt-3">
              3.4 Outros dados fornecidos pelo cliente
            </h3>
            <p>
              Em contexto B2B, poderemos tratar dados pessoais adicionais de
              colaboradores dos nossos clientes, estritamente necessários para a
              execução dos serviços contratados.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              4. Finalidades e fundamento jurídico
            </h2>
            <h3 className="font-medium">
              4.1 Prestação do serviço e gestão da Plataforma Unidal
            </h3>
            <p>
              Permitir o acesso autenticado, gerir perfis e permissões de
              utilizadores e registar informação operacional.
            </p>
            <p className="mt-1">
              <span className="italic">Fundamento jurídico:</span> execução de
              contrato ou interesse legítimo em contexto B2B.
            </p>

            <h3 className="font-medium mt-3">4.2 Suporte e comunicação</h3>
            <p>
              Responder a pedidos de suporte técnico e comunicar alterações
              relevantes à plataforma ou à presente política.
            </p>

            <h3 className="font-medium mt-3">
              4.3 Melhoria contínua e segurança
            </h3>
            <p>
              Monitorização de logs para fins de segurança, prevenção de abuso
              e melhoria do serviço.
            </p>

            <h3 className="font-medium mt-3">
              4.4 Cumprimento de obrigações legais
            </h3>
            <p>
              Cumprimento de obrigações fiscais, contabilísticas ou outras
              impostas por lei.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              5. Partilha de dados pessoais
            </h2>
            <p>
              Não vendemos os seus dados pessoais. Podemos partilhá-los com:
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Fornecedores de serviços de alojamento e infraestrutura de TI</li>
              <li>Prestadores de serviços de suporte e manutenção técnica</li>
              <li>Entidades públicas, quando tal seja obrigatório por lei</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              6. Transferências internacionais de dados
            </h2>
            <p>
              Caso utilizemos serviços alojados fora do EEE, asseguraremos
              mecanismos adequados de proteção (por exemplo, Cláusulas
              Contratuais-Tipo) e um nível de proteção equivalente ao exigido
              pelo RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              7. Prazo de conservação
            </h2>
            <ul className="list-disc list-inside">
              <li>
                Dados de autenticação e perfil: enquanto a conta estiver ativa
                ou a relação contratual se mantiver.
              </li>
              <li>
                Logs de acesso e atividade: por períodos compatíveis com boas
                práticas de segurança e requisitos legais.
              </li>
              <li>
                Dados de faturação e documentação legal: pelo prazo exigido por
                lei.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              8. Direitos dos titulares dos dados
            </h2>
            <p>Nos termos do RGPD, o titular dos dados tem direito a:</p>
            <ul className="list-disc list-inside mt-1">
              <li>Acesso</li>
              <li>Retificação</li>
              <li>Apagamento</li>
              <li>Limitação do tratamento</li>
              <li>Oposição</li>
              <li>Portabilidade (quando aplicável)</li>
            </ul>
            <p className="mt-2">
              Para exercer estes direitos, contacte-nos através de:{" "}
              <a
                href="mailto:geral@unidal.pt"
                className="text-blue-600 hover:underline"
              >
                geral@unidal.pt
              </a>
              .
            </p>
            <p className="mt-2">
              Tem ainda o direito de apresentar reclamação à Comissão Nacional
              de Proteção de Dados (CNPD).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizativas adequadas para proteger
              os dados pessoais contra acesso não autorizado, perda ou
              alteração, incluindo controlo de acesso, encriptação de
              palavras-passe e registo de operações relevantes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              10. Dados de menores
            </h2>
            <p>
              A Plataforma Unidal não se destina a menores de 18 anos. Se tiver
              conhecimento de que um menor nos forneceu dados pessoais,
              contacte-nos para procedermos à sua eliminação.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              11. Alterações a esta Política
            </h2>
            <p>
              Podemos atualizar esta política sempre que necessário. A versão
              atualizada será publicada nesta página, com indicação da data da
              última atualização.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Privacidade;
