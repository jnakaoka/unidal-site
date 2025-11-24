import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-10 md:py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Nossos Serviços
        </h2>
        <div className="h-1 w-16 bg-unidalRed mb-6" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="h-32 md:h-36 lg:h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 flex-1">
                  {service.description}
                </p>
                <a
                  href="/servicos"
                  className="mt-4 text-sm font-semibold text-unidalRed hover:underline"
                >
                  Saber mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
