export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-10">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start text-left"
        >
          <div>
            <h2 className="text-lg font-semibold mb-2">Unidal</h2>
            <p className="text-sm text-slate-300">
              Plataforma de Gestão Operacional
            </p>
            <p className="text-xs text-slate-500 mt-4">
              © 2025 Unidal. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Informações da Empresa</h2>
            <p className="text-sm text-slate-300">
              Unidal Construção e Pavimentos Lda.<br />
              Leiria, Portugal
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Documentação</h2>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>
                <a href="/privacidade" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              {/* <li>
                <a href="/termos" className="hover:text-white">
                  Termos de Serviço
                </a>
              </li> */}
              <li>
                <a href="/cookies" className="hover:text-white">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="/etica-empresarial-prevencao-corrupcao" className="hover:text-white">
                  Ética Empresarial e Prevenção da Corrupção
                </a>
              </li>
              <li>
                <a href="https://www.pepdata.com/whistleblower_channel/184e61bfec917363" 
                   target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white"
                >
                  Portal de Denúncias
                </a>
              </li>
              <li>
                {/* Livro de Reclamações eletrónico */}
                <a
                  href="https://www.livroreclamacoes.pt/Pedido/Reclamacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Livro de Reclamações
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}
