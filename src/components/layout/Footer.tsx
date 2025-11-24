export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">
            UNIDAL - Construção e Pavimentos Lda
          </p>
          <p className="text-sm text-slate-500">
            Pavimentos industriais e decorativos em betão de alta resistência.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Unidal. Todos os direitos reservados.
        </p>
      </div>
      <div className="h-1 w-full bg-unidalRed" />
    </footer>
  );
}
