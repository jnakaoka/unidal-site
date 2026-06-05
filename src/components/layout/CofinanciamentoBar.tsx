// components/CofinanciamentoBar.tsx

export default function CofinanciamentoBar() {
    return (
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col items-center justify-center gap-2">
            <img
                src="/images/barra-cofinanciamento.png"
                alt="Financiado pela União Europeia"
                className="h-16 md:h-20 w-auto object-contain"
            />

            <a
                href="/docs/cartaz-projeto.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 none"
            >
                Consultar cartaz do projeto
            </a>
        </div>
      </div>
    );
  }