import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SurveyQ from "../components/survey/SurveyQ";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Survey() {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const [number, setNumber] = useState(3);

  useEffect(() => {
    const myParam = searchParams.get("category");
    if (!myParam) return;
    setNumber((prv) => findCategory(myParam));
  }, [searchParams]);

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
  const findCategory = (myParam) => {
    if (myParam === "ade_func") return 3;
    if (myParam === "efi_des") return 4;
    if (myParam === "comp") return 5;
    if (myParam === "cap_ite") return 6;
    if (myParam === "fia") return 7;
    if (myParam === "seg") return 8;
    if (myParam === "mant") return 9;
    if (myParam === "flex") return 10;
    if (myParam === "prot") return 11;
  };

  return (
    <section className="flex flex-row min-h-[100vh] max-w-[100vw] bg-background text-foreground">
      <Navbar page={number} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* contenido */}
        <section className="border rounded-md shadow-md p-3 bg-white m-3">
          <div className="p-2">
            <h1 className="text-2xl">Adecuacion Funcional</h1>
            <p>Lista de mis evaluaciones de software</p>
          </div>
          {/* preguntas */}
          <div>
            <SurveyQ
              question="Completitud Fucional: El producto de software cumple con los estándares de calidad requeridos
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
