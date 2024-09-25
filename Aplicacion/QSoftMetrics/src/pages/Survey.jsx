import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SurveyQ from "../components/survey/SurveyQ";
import { useParams, useSearchParams } from "react-router-dom";

export default function Survey() {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const myParam = searchParams.get("category");
  const cate = [
    "ade_func",
    "efi_des",
    "comp",
    "cap_ite",
    "fia",
    "seg",
    "mant",
    "flex",
    "prot",
  ];
  const findCategory = () => {
    return cate.forEach((element, index) => {
      if (element === myParam) {
        return index + 3;
      }
    });
  };
  const number = findCategory();
  console.log(number);
  return (
    <section className="flex flex-row min-h-[100vh] max-w-[100vw] bg-background text-foreground">
      <Navbar page={3} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="p-2">
            <h1 className="text-2xl">Lista de evaluaciones: {id}</h1>
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
