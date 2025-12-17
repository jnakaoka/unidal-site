import React from "react";

const Cookies: React.FC = () => {
  return (
    <main className="w-full px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white/70 dark:bg-slate-900/70 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Política de Cookies
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Última atualização: 08-12-2025
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <div>
            <h2 className="font-semibold text-base mb-2">
              1. O que são cookies?
            </h2>
            <p>
              Cookies são pequenos ficheiros de texto armazenados no seu
              dispositivo quando visita um website ou utiliza uma aplicação.
              Permitem reconhecer o dispositivo e recordar determinadas
              informações sobre as suas ações ou preferências.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Como utilizamos cookies
            </h2>
            <p>
              A Plataforma Unidal e o nosso website utilizam principalmente
              cookies técnicos e de sessão, necessários para:
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Permitir o início e manutenção de sessões autenticadas</li>
              <li>Reforçar a segurança do acesso</li>
              <li>
                Assegurar o correto funcionamento de funcionalidades básicas da
                Plataforma
              </li>
            </ul>
            <p className="mt-2">
              Não utilizamos, por defeito, cookies de marketing ou perfis
              publicitários.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Tipos de cookies que podemos utilizar
            </h2>
            <h3 className="font-medium">3.1 Cookies estritamente necessários</h3>
            <p>
              Essenciais para o funcionamento do website e da Plataforma. Sem
              estes cookies, alguns serviços, como o login seguro, podem não
              funcionar corretamente.
            </p>

            <h3 className="font-medium mt-3">
              3.2 Cookies de desempenho e analíticos (se ativados)
            </h3>
            <p>
              Podem ser utilizados para recolher informação agregada sobre o uso
              da Plataforma (por exemplo, páginas mais visitadas ou erros de
              carregamento), ajudando-nos a melhorar a performance e a
              usabilidade.
            </p>

            <h3 className="font-medium mt-3">
              3.3 Cookies de funcionalidade (se utilizados)
            </h3>
            <p>
              Permitem memorizar certas preferências do utilizador, como idioma
              ou opções de visualização, proporcionando uma experiência mais
              personalizada.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              4. Gestão de cookies
            </h2>
            <p>
              O utilizador pode, a qualquer momento, controlar e/ou apagar
              cookies através das definições do navegador. Pode:
            </p>
            <ul className="list-disc list-inside mt-1">
              <li>Bloquear todos os cookies</li>
              <li>Apagar cookies já armazenados</li>
              <li>
                Configurar o navegador para o notificar antes de aceitar
                cookies
              </li>
            </ul>
            <p className="mt-2">
              A desativação de cookies estritamente necessários poderá afetar o
              funcionamento correto da Plataforma e impedir o acesso a áreas que
              exigem autenticação.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              5. Alterações a esta Política de Cookies
            </h2>
            <p>
              Podemos atualizar esta política sempre que necessário,
              nomeadamente quando introduzirmos novos tipos de cookies ou
              alterarmos tecnologias utilizadas. A versão atualizada será sempre
              publicada nesta página.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">6. Contacto</h2>
            <p>
              Se tiver dúvidas sobre a utilização de cookies no nosso website ou
              na Plataforma Unidal, contacte-nos através de:{" "}
              <a
                href="mailto:geral@unidal.pt"
                className="text-blue-600 hover:underline"
              >
                geral@unidal.pt
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cookies;
