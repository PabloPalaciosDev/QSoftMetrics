import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import ResultChart from "../components/results/ResultChart";

export default function Results() {
  const data2 = {
    labels: [
      "No aplica",
      "Muy en desacuerdo",
      "En desacuerdo",
      "Neutral",
      "De acuerdo",
      "Muy de acuerdo",
    ],
    datasets: [
      {
        label: "General",
        data: [15, 45, 60, 30, 60, 90],
        backgroundColor: [
          "#C0C0C0", // No aplica
          "#FF6347", // Muy en desacuerdo
          "#FFA500", // En desacuerdo
          "#FFDF00", // Neutral
          "#90EE90", // De acuerdo
          "#228B22", // Muy de acuerdo
        ],
        hoverOffset: 4,
      },
    ],
  };
  const data = {
    labels: [
      "No aplica",
      "Muy en desacuerdo",
      "En desacuerdo",
      "Neutral",
      "De acuerdo",
      "Muy de acuerdo",
    ],
    datasets: [
      {
        label: "Completitud Funcional",
        data: [5, 15, 20, 10, 20, 30],
        backgroundColor: [
          "#C0C0C0", // No aplica
          "#FF6347", // Muy en desacuerdo
          "#FFA500", // En desacuerdo
          "#FFDF00", // Neutral
          "#90EE90", // De acuerdo
          "#228B22", // Muy de acuerdo
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <section className="flex flex-row min-h-[100vh] max-w-[100vw] bg-background text-foreground">
      <Navbar page={3} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* titulo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Mis Evaluaciones</h1>
          <p>Mis evaluaciones</p>
        </div>

        {/* graficos */}
        <section className="px-10">
          <ResultChart data={data2} nombre="General - Adecuacion Funcional" />
        </section>
        <section className="grid grid-cols-2 gap-2 p-4 px-20 ">
          <ResultChart data={data} nombre="Completitud Funcional" />
          <ResultChart data={data} nombre="Correcion Funcional" />
          <ResultChart data={data} nombre="Pertinencia Funcional" />
        </section>
      </main>
    </section>
  );
}
