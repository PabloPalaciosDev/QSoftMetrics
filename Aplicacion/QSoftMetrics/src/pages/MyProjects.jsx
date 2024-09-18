import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SoftwareTable from "../components/review/SoftwareTable";

export default function MyProjects() {
  return (
    <section className="flex flex-row min-h-[100vh] min-w-[100vw] bg-background text-foreground">
      <Navbar page={1} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* titulo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Mi Proyectos</h1>
          <p>Mi softwares agregado para evaluacion</p>
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="grid grid-cols-2">
            <div className="p-2">
              <h1 className="text-2xl">Lista de proyectos</h1>
              <p>Lista de proyectos por evaluar</p>
            </div>
            <div className="me-4  ms-auto">
              <button className="btn btn-success">Agregar Proyecto</button>
            </div>
          </div>
          <SoftwareTable />
        </section>
      </main>
    </section>
  );
}
