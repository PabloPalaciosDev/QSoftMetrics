import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";
import SurveyPanel from "../components/survey/SurveyPanel";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Survey() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("Adecuación Funcional");
  const [preguntas, setPreguntas] = useState([]);
  const [software, setSoftware] = useState();

  const fetchPreguntas = async () => {
    const res = await fetch("http://localhost:3000/api/preguntas");
    const data = await res.json();
    setPreguntas(data);
  };

  const fetchSoftware = async () => {
    const res = await fetch("http://localhost:3000/api/software/" + id);
    const data = await res.json();
    console.log(data);
    setSoftware(data);
  };

  useEffect(() => {
    const myParam = searchParams.get("category");
    findCategory(myParam);
  }, [searchParams]);

  useEffect(() => {
    fetchPreguntas();
    fetchSoftware();
  }, []);

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
    if (myParam === "ade_func") setCategory("Adecuación Funcional");
    if (myParam === "efi_des") setCategory("Eficiencia de Desempeño");
    if (myParam === "comp") setCategory("Compatibilidad");
    if (myParam === "cap_ite") setCategory("Capacidad de Interacción");
    if (myParam === "fia") setCategory("Fiabilidad");
    if (myParam === "seg") setCategory("Seguridad");
    if (myParam === "mant") setCategory("Mantenibilidad");
    if (myParam === "flex") setCategory("Flexibilidad");
    if (myParam === "prot") setCategory("Protección");
  };

  return (
    <section className="flex flex-row min-h-[100vh] max-w-[100vw] bg-background text-foreground">
      <Navbar softwareCategories={software?.categorias_a_evaluar} />

      <main className="flex flex-col bg-slate-100 flex-1">
        <div className="p-2">
          <InfoNav />
        </div>

        {/* contenido */}
        {preguntas.length > 0 && (
          <section className="border rounded-md shadow-md p-3 bg-white m-3">
            {preguntas.map((pregunta, index) => {
              return (
                <SurveyPanel
                  preguntas={pregunta}
                  showPanel={category === pregunta.nombre}
                />
              );
            })}
          </section>
        )}
      </main>
    </section>
  );
}
