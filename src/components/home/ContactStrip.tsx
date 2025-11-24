export default function ContactStrip() {
  return (
    <section
      id="contactos"
      className="py-10 md:py-14 bg-slate-100 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-[1.1fr,1fr]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Contactos
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Fale connosco para solicitar um orçamento ou esclarecer dúvidas
            sobre o seu projeto de pavimentação.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Morada:</strong> Rua da Construção 123, 4560-000 Cidade
            </li>
            <li>
              <strong>Telefone:</strong> +351 912 345 678
            </li>
            <li>
              <strong>Email:</strong> geral@unidal.pt
            </li>
          </ul>
        </div>

        <form className="bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-unidalRed/70"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-unidalRed/70"
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-unidalRed/70"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto inline-flex justify-center px-5 py-2.5 rounded-full bg-unidalRed text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
