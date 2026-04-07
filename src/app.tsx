import { useState } from "react";
import { Option } from "./common/models/option.model";
import { OptionButton } from "./common/components";
import { MessageModal } from "./common/components";

const isOpcion3Enabled = import.meta.env.VITE_FEATURE_OPCION_3 === "true";

const OPTIONS: Option[] = [
  {
    id: 1,
    title: "Opción 1",
    description: "Commits",
    message:
      "Todo repositorio empieza con un commit. Un commit es una foto de tu código en un momento dado.",
    featureFlag: false,
  },
  {
    id: 2,
    title: "Opción 2",
    description: "Ramas y merges",
    message:
      "Una rama es como una línea de tiempo alternativa de tu código. Puedes experimentar, cometer errores y fusionar solo lo que funciona, sin afectar nunca a main.",
    featureFlag: false,
  },
  {
    id: 3,
    title: "Opción 3",
    description: "Forks",
    message:
      "Un fork es una copia de un repositorio en tu cuenta. Puedes proponer cambios al original mediante un Pull Request.",
    featureFlag: true,
  },
  // Añade aquí la Opción 4 durante la clase:
  // {
  //   id: 4,
  //   title: 'Opción 4',
  //   description: 'Descripción corta',
  //   message: 'Escribe aquí el mensaje de la Opción 4.',
  //   featureFlag: false,
  // },
];

export default function App() {
  const [selected, setSelected] = useState<Option | null>(null);

  const visibleOptions = OPTIONS.filter(
    (opt) => !opt.featureFlag || isOpcion3Enabled,
  );

  return (
    <div className="min-h-screen bg-base-300 flex flex-col items-center px-4">
      <header className="w-full max-w-3xl pt-16 pb-10 text-center">
        <div className="badge badge-primary badge-outline mb-4 text-xs tracking-widest uppercase">
          Curso Git
        </div>
        <h1 className="text-5xl font-extrabold text-base-content mb-3">
          Proyecto <span className="text-primary">Demo</span>
        </h1>
        <p className="text-base-content/50 text-lg max-w-md mx-auto">
          Elige una opción para descubrir un concepto clave de Git.
        </p>
      </header>
      <main className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
        {visibleOptions.map((opt) => (
          <OptionButton
            key={opt.id}
            option={opt}
            onClick={() => setSelected(opt)}
          />
        ))}
      </main>

      <MessageModal option={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
