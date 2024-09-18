import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SoftwareTable from "../components/review/SoftwareTable";

export default function MyReviews() {
  return (
    <section className="flex flex-row min-h-[100vh] min-w-[100vw] bg-background text-foreground">
      <Navbar page={2} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* titulo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Mis Evaluaciones</h1>
          <p>Mis evaluaciones</p>
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="p-2">
            <h1 className="text-2xl">Lista de evaluaciones</h1>
            <p>Lista de mis evaluaciones de software</p>
          </div>

          <SoftwareTable />
        </section>
      </main>
    </section>
  );
}
