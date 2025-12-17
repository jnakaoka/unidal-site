import { useState } from "react";

type ProjectType = "Industriais" | "Exteriores" | "Espaços Urbanos";

interface Project {
  id: number;
  title: string;
  location: string;
  type: ProjectType;
  image: string;
}

const filters = ["Todos", "Industriais", "Exteriores", "Espaços Urbanos"] as const;
type FilterType = (typeof filters)[number];

export default function Projetos() {
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Pavimento industrial – execução noturna",
      location: "Armazém industrial, Europa",
      type: "Industriais",
      image: "/images/img-industrial-1.jpg",
    },
    {
      id: 2,
      title: "Pavimento industrial – acabamento polido",
      location: "Centro logístico, Europa",
      type: "Industriais",
      image: "/images/img-industrial-2.jpg",
    },
    {
      id: 3,
      title: "Acesso exterior em betão",
      location: "Zona residencial, França",
      type: "Exteriores",
      image: "/images/img-residencial-1.jpg",
    },
    {
      id: 4,
      title: "Bowl em betão para skatepark",
      location: "Skatepark, Europa",
      type: "Espaços Urbanos",
      image: "/images/img-skate-1.jpg",
    },
    {
      id: 5,
      title: "Skatepark – áreas de street",
      location: "Skatepark, Europa",
      type: "Espaços Urbanos",
      image: "/images/img-skate-2.jpg",
    },
    {
      id: 6,
      title: "Skatepark – obstáculos e rampas",
      location: "Skatepark, Europa",
      type: "Espaços Urbanos",
      image: "/images/img-skate-3.jpg",
    },
    {
      id: 7,
      title: "Skatepark – vista geral",
      location: "Skatepark, Europa",
      type: "Espaços Urbanos",
      image: "/images/img-skate-4.jpg",
    },
    {
      id: 8,
      title: "Skatepark – circuito completo",
      location: "Skatepark, Europa",
      type: "Espaços Urbanos",
      image: "/images/img-skate-5.jpg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.type === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Nossos Projetos
      </h1>
      <div className="h-1 w-20 bg-unidalRed mb-8" />

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
        Conheça alguns dos projetos executados pela UNIDAL em pavimentos
        industriais, exteriores e skateparks. Cada obra é planeada para garantir
        resistência, funcionalidade e integração com o espaço envolvente.
      </p>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => {
          const isActive = f === activeFilter;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={[
                "px-4 py-1.5 text-sm rounded-full border transition",
                isActive
                  ? "bg-unidalRed text-white border-unidalRed"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100",
              ].join(" ")}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Lista de projetos */}
      {filteredProjects.length === 0 ? (
        <p className="text-sm text-slate-500">
          Nenhum projeto encontrado para o filtro selecionado.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="h-40 bg-slate-200">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-xs text-slate-500 mb-1">{p.type}</p>
                <h3 className="text-sm font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-slate-600">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
