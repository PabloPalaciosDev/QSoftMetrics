import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";

export default function ResultChart({ data, nombre, showFeedback = false }) {
  const total = data.datasets[0].data.reduce((acc, curr) => acc + curr);
  const noAplica = data.datasets[0].data[0];
  const enDesacuerdo = data.datasets[0].data[1] + data.datasets[0].data[2];
  const neutro = data.datasets[0].data[3];
  const deAcuerdo = data.datasets[0].data[4] + data.datasets[0].data[5];

  return (
    <div className="flex flex-row border rounded-md shadow-md p-3 bg-white relative">
      <div className="w-5/12">
        <h1 className="text-2xl">{nombre}</h1>
        <p>Estadistica</p>
        <div className="mt-4 mb-1">
          <p className="text-6xl">{total}</p>
          <p className="">Total de evaluaciones</p>
        </div>
        <div className="grid grid-rows-4 gap-3">
          <div className="flex items-center p-2 rounded-md bg-[#C0C0C0]/75">
            <p>No Aplica</p>
            <p className="ms-auto me-4 text-xl">{noAplica}</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#FF6347]/75">
            <p>En Desacuerdo</p>
            <p className="ms-auto me-4 text-xl">{enDesacuerdo}</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#FFDF00]/75">
            <p>Neutro</p>
            <p className="ms-auto me-4 text-xl">{neutro}</p>
          </div>
          <div className="flex items-center p-2 rounded-md bg-[#228B22]/75">
            <p>De Acuerdo</p>
            <p className="ms-auto me-4 text-xl">{deAcuerdo}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[20vw]">
        <Pie data={data} />
      </div>
      {showFeedback && (
        <Link
          to="feedback?category=Adecuación Funcional"
          className="text-sm mt-auto absolute bottom-0 right-0 m-3 text-blue-600 hover:text-sky-400"
        >
          Ver mas
        </Link>
      )}
    </div>
  );
}
