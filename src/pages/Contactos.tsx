import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormFields = {
  nome: string;
  email: string;
  telefone: string;
  tipoObra: string;
  localObra: string;
  mensagem: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contactos() {
  const [form, setForm] = useState<FormFields>({
    nome: "",
    email: "",
    telefone: "",
    tipoObra: "",
    localObra: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Faltam variáveis de ambiente do EmailJS.");
      setStatus("error");
      setErrorMessage(
        "Não foi possível enviar a mensagem no momento. Tente novamente mais tarde."
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          tipoObra: form.tipoObra,
          localObra: form.localObra,
          mensagem: form.mensagem,
        },
        publicKey
      );

      setStatus("success");
      setForm({
        nome: "",
        email: "",
        telefone: "",
        tipoObra: "",
        localObra: "",
        mensagem: "",
      });
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus("error");
      setErrorMessage(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contactos</h1>
      <div className="h-1 w-20 bg-unidalRed mb-8" />

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
        Fale connosco para solicitar orçamentos, agendar visitas técnicas ou
        esclarecer dúvidas sobre os nossos pavimentos. A nossa equipa terá
        todo o gosto em analisar o seu projeto e propor a solução em betão mais
        adequada às necessidades da sua obra.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Informações de contacto */}
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <strong className="font-semibold">Morada</strong>
            <p className="text-slate-600">
              Rua Principal, Nº 25
              <br />
              Mendes, 3100-563 Pombal
            </p>
          </div>

          <div>
            <strong className="font-semibold">Telefone</strong>
            <p className="text-slate-600">
              <a href="tel:+351918017499" className="hover:text-unidalRed">
                +351 918 017 499
              </a>
            </p>
          </div>

          <div>
            <strong className="font-semibold">Email</strong>
            <p className="text-slate-600">
              <a
                href="mailto:geral@unidal.pt"
                className="hover:text-unidalRed"
              >
                geral@unidal.pt
              </a>
            </p>
          </div>

          <div>
            <strong className="font-semibold">Horário de funcionamento</strong>
            <p className="text-slate-600">Segunda a Sexta, 9h00 às 18h00</p>
          </div>

          <div>
            <strong className="font-semibold">O que pode solicitar</strong>
            <ul className="mt-1 text-slate-600 list-disc list-inside space-y-1">
              <li>Orçamentos para novos pavimentos</li>
              <li>Visitas técnicas ao local da obra</li>
              <li>Consultoria sobre soluções em betão</li>
            </ul>
          </div>
        </div>

        {/* Formulário de contacto */}
        <form
          className="bg-white shadow-sm p-6 rounded-xl space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="telefone"
              >
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                value={form.telefone}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="tipoObra"
            >
              Tipo de obra
            </label>
            <select
              id="tipoObra"
              name="tipoObra"
              value={form.tipoObra}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
            >
              <option value="">Selecione uma opção</option>
              <option>Pavimento industrial</option>
              <option>Estacionamento / área externa</option>
              <option>Residencial / condomínio</option>
              <option>Skatepark</option>
              <option>Outro tipo de obra</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="localObra"
            >
              Local da obra
            </label>
            <input
              id="localObra"
              name="localObra"
              type="text"
              value={form.localObra}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
              placeholder="Cidade, país ou morada aproximada"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="mensagem"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm h-28"
              placeholder="Descreva o tipo de pavimento, área aproximada e prazos desejados."
              required
            />
          </div>

          {/* Mensagens de feedback */}
          {status === "success" && (
            <p className="text-sm text-green-600">
              Mensagem enviada com sucesso! Em breve entraremos em contacto.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600">
              {errorMessage ??
                "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-5 py-2.5 rounded-full bg-unidalRed text-white font-semibold text-sm hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}




// export default function Contactos() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//         Contactos
//       </h1>
//       <div className="h-1 w-20 bg-unidalRed mb-8" />

//       <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
//         Fale connosco para solicitar orçamentos, agendar visitas técnicas ou
//         esclarecer dúvidas sobre os nossos pavimentos. A nossa equipa terá
//         todo o gosto em analisar o seu projeto e propor a solução em betão mais
//         adequada às necessidades da sua obra.
//       </p>

//       <div className="grid gap-10 md:grid-cols-2">
//         {/* Informações de contacto */}
//         <div className="space-y-4 text-sm text-slate-700">
//           <div>
//             <strong className="font-semibold">Morada</strong>
//             <p className="text-slate-600">
//               Rua Principal, Nº 25<br />
//               Mendes, 3100-563 Pombal
//             </p>
//           </div>

//           <div>
//             <strong className="font-semibold">Telefone</strong>
//             <p className="text-slate-600">
//               <a href="tel:+351919732766" className="hover:text-unidalRed">
//                 +351 919 732 766
//               </a>
//             </p>
//           </div>

//           <div>
//             <strong className="font-semibold">Email</strong>
//             <p className="text-slate-600">
//               <a
//                 href="mailto:geral@unidal.pt"
//                 className="hover:text-unidalRed"
//               >
//                 geral@unidal.pt
//               </a>
//             </p>
//           </div>

//           <div>
//             <strong className="font-semibold">Horário de funcionamento</strong>
//             <p className="text-slate-600">Segunda a Sexta, 9h00 às 18h00</p>
//           </div>

//           <div>
//             <strong className="font-semibold">O que pode solicitar</strong>
//             <ul className="mt-1 text-slate-600 list-disc list-inside space-y-1">
//               <li>Orçamentos para novos pavimentos</li>
//               <li>Visitas técnicas ao local da obra</li>
//               <li>Consultoria sobre soluções em betão</li>
//             </ul>
//           </div>
//         </div>

//         {/* Formulário de contacto */}
//         <form
//           className="bg-white shadow-sm p-6 rounded-xl space-y-4"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="nome">
//               Nome
//             </label>
//             <input
//               id="nome"
//               type="text"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//               required
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="telefone">
//                 Telefone
//               </label>
//               <input
//                 id="telefone"
//                 type="tel"
//                 className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="tipoObra">
//               Tipo de obra
//             </label>
//             <select
//               id="tipoObra"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//             >
//               <option value="">Selecione uma opção</option>
//               <option>Pavimento industrial</option>
//               <option>Estacionamento / área externa</option>
//               <option>Residencial / condomínio</option>
//               <option>Skatepark</option>
//               <option>Outro tipo de obra</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="localObra">
//               Local da obra
//             </label>
//             <input
//               id="localObra"
//               type="text"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//               placeholder="Cidade, país ou morada aproximada"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1" htmlFor="mensagem">
//               Mensagem
//             </label>
//             <textarea
//               id="mensagem"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm h-28"
//               placeholder="Descreva o tipo de pavimento, área aproximada e prazos desejados."
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-5 py-2.5 rounded-full bg-unidalRed text-white font-semibold text-sm hover:opacity-90 transition"
//           >
//             Enviar mensagem
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// export default function Contactos() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//         Contactos
//       </h1>
//       <div className="h-1 w-20 bg-unidalRed mb-8" />

//       <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
//         dictum massa sed luctus placerat. Sed neque libero, vestibulum sed
//         arcu sit amet, egestas imperdiet lectus.
//       </p>

//       {/* GRID */}
//       <div className="grid gap-10 md:grid-cols-2">

//         {/* Informações da empresa */}
//         <div className="space-y-4 text-sm text-slate-700">
//           <div>
//             <strong className="font-semibold">Morada:</strong>
//             <p className="text-slate-600">
//               Lorem Ipsum Street 123, Cidade, Portugal
//             </p>
//           </div>

//           <div>
//             <strong className="font-semibold">Telefone:</strong>
//             <p className="text-slate-600">+351 912 345 678</p>
//           </div>

//           <div>
//             <strong className="font-semibold">Email:</strong>
//             <p className="text-slate-600">geral@unidal.pt</p>
//           </div>

//           <div>
//             <strong className="font-semibold">Horário:</strong>
//             <p className="text-slate-600">Seg–Sex, 9h às 18h</p>
//           </div>
//         </div>

//         {/* Formulário */}
//         <form className="bg-white shadow-sm p-6 rounded-xl space-y-3">
//           <div>
//             <label className="block text-sm font-medium mb-1">Nome</label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Mensagem</label>
//             <textarea
//               className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-unidalRed focus:outline-none text-sm h-24"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="px-5 py-2.5 rounded-full bg-unidalRed text-white font-semibold text-sm hover:opacity-90 transition"
//           >
//             Enviar mensagem
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }
