import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SurveyQ from "../components/survey/SurveyQ";

export default function Survey() {
  return (
    <section className="flex flex-row min-h-[100vh] max-w-[100vw] bg-background text-foreground">
      <Navbar />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="p-2">
            <h1 className="text-2xl">Lista de evaluaciones</h1>
            <p>Lista de mis evaluaciones de software</p>
          </div>
          {/* preguntas */}
          <div>
            <SurveyQ
              question="El producto de software cumple con los estándares de calidad requeridos
        según la norma ISO 25010?."
            />
            <SurveyQ
              question="El producto de software cumple con los estándares de calidad requeridos
        según la norma ISO 25010?."
            />
            <SurveyQ
              question="El producto de software cumple con los estándares de calidad requeridos
        según la norma ISO 25010?."
            />
            <SurveyQ
              question="El producto de software cumple con los estándares de calidad requeridos
        según la norma ISO 25010?."
            />
          </div>
          <div className="flex p-2 mt-3">
            <button className="btn btn-success  px-6 ms-auto">Enviar</button>
          </div>
        </section>
      </main>
    </section>
  );
}
