import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function ResultChart({ data }) {
  return (
    <div className="flex flex-row border rounded-md shadow-md p-3 bg-white relative">
      <div className="w-5/12">
        <h1 className="text-2xl">Adecuacion funcional</h1>
        <p>Estadistica</p>
        <div className="mt-4 mb-1">
          <p className="text-6xl">100</p>
          <p className="">Total de evaluaciones</p>
        </div>
        <div className="grid grid-rows-4 gap-3">
          <div className="flex items-center p-2 rounded-md bg-[#C0C0C0]/75">
            <p>No Aplica</p>
            <p className="ms-auto me-4 text-xl">5</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#FF6347]/75">
            <p>En Desacuerdo</p>
            <p className="ms-auto me-4 text-xl">35</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#FFDF00]/75">
            <p>Neutro</p>
            <p className="ms-auto me-4 text-xl">10</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#228B22]/75">
            <p>De Acuerdo</p>
            <p className="ms-auto me-4 text-xl">50</p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[20vw]">
        <Pie data={data} />
      </div>
      <p className="text-sm mt-auto absolute bottom-0 right-0 m-3">Ver mas</p>
    </div>
  );
}
