import SurveyQ from "./SurveyQ";

export default function SurveyPanel({
  preguntas,
  showPanel,
  addAnswer,
  submitAnswer,
}) {
  const handleSubmit = () => {
    submitAnswer();
  };
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
                pregunta={pregunta}
                nombre={preguntas.nombre}
                initValue={pregunta.respuesta}
                addAnswer={addAnswer}
              />
            ))}
          </div>
          <div className="flex p-2 mt-3">
            <button
              className="btn btn-success  px-6 ms-auto"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
