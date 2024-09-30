import SurveyQ from "./SurveyQ";

export default function SurveyPanel({ preguntas, showPanel }) {
  return (
    <>
      {showPanel && (
        <div>
          <div className="p-2">
            <h1 className="text-2xl">{preguntas.nombre}</h1>
            <p className="lowercase">Evaluar {preguntas.nombre} del software</p>
          </div>
          {/* preguntas */}
          <div>
            {preguntas.subcategorias.map((pregunta, index) => (
              <SurveyQ
                key={index}
                index={index}
                pregunta={pregunta.pregunta}
                nombre={pregunta.nombre}
              />
            ))}
          </div>
          <div className="flex p-2 mt-3">
            <button className="btn btn-success  px-6 ms-auto">Enviar</button>
          </div>
        </div>
      )}
    </>
  );
}
