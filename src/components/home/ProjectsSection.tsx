import { useState } from "react";
import { projectFilters, projects } from "../../data/projects";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos");

  const filtered = projects.filter((p) =>
    filter === "Todos" ? true : p.type === filter
  );

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Nossos Projetos
        </h2>
        <div className="h-1 w-16 bg-unidalRed mb-6" />

        <div className="flex flex-wrap gap-2 mb-6">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm border ${
                f === filter
                  ? "bg-unidalRed text-white border-unidalRed"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="h-28 md:h-32 lg:h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-slate-500 mb-1">{project.type}</p>
                <h3 className="text-sm font-semibold">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/projetos"
            className="inline-flex px-5 py-2.5 rounded-full text-sm font-semibold border border-unidalRed text-unidalRed hover:bg-unidalRed hover:text-white transition"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
}
