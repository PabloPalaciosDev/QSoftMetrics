import { useState } from "react";

export default function SurveyQ({ nombre, pregunta, index }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div className="p-2 my-6 flex border-b pb-6">
      <h1 className="text-xl max-w-80">
        <span className="font-bold">
          {index + 1}.{nombre}
        </span>
        : {pregunta}
      </h1>
      {/* opciones */}
      <div className="grid grid-cols-3 mt-3 md:gap-6">
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(0)}
          style={{ backgroundColor: selected === 0 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">0</p>
          <p className="text-lg">No aplica</p>
        </div>
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(1)}
          style={{ backgroundColor: selected === 1 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">1</p>
          <p className="text-lg">Muy en desacuerdo</p>
        </div>
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(2)}
          style={{ backgroundColor: selected === 2 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">2</p>
          <p className="text-lg">En desacuerdo</p>
        </div>
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(3)}
          style={{ backgroundColor: selected === 3 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">3</p>
          <p className="text-lg">Neutral</p>
        </div>
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(4)}
          style={{ backgroundColor: selected === 4 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">4</p>
          <p className="text-lg">De acuerdo</p>
        </div>
        <div
          className="border rounded-md flex flex-col justify-center items-center p-2 mx-4 transition-colors hover:cursor-pointer hover:bg-[#ffa8268c]"
          onClick={() => handleSelect(5)}
          style={{ backgroundColor: selected === 5 ? "#FFA726" : "" }}
        >
          <p className="text-2xl font-bold">5</p>
          <p className="text-lg">Muy de acuerdo</p>
        </div>
      </div>
      {/* comentario */}
      <div>
        <p className="text-xl">Comentario - opcional</p>
        <textarea
          className="input input-bordered min-w-96 min-h-40"
          placeholder="Agregar Comentario"
        ></textarea>
      </div>
    </div>
  );
}
