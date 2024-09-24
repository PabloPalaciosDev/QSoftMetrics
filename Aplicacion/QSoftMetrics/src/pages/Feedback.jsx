import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

export default function Feedback() {
  return (
    <section className="flex flex-row min-h-[100vh] min-w-[100vw] bg-background text-foreground">
      <Navbar page={1} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* titulo */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Feedback</h1>
          <p>Dejanos tu opinion</p>
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="p-2">
            <h1 className="text-2xl">Feedback</h1>
            <p>Dejanos tu opinion</p>
          </div>

          <SoftwareTable />
        </section>
      </main>
    </section>
  );
}
