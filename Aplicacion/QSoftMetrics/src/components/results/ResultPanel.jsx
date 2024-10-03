import ResultChart from "./ResultChart";

export default function ResultPanel({ dataProps, nombre, showPanel = false }) {
  console.log(dataProps);

  const getGeneralValues = () => {
    const values = Object.keys(dataProps).map((key) => {
      const values2 = Object.keys(dataProps[key]).map((key2) => {
        return dataProps[key][key2];
      });

      return values2;
    });

    let result = values[0].map((_, i) =>
      values.reduce((acc, arr) => acc + arr[i], 0)
    );

    return result;
  };

  getGeneralValues();

  const getValues = (key) => {
    const values = Object.keys(dataProps[key]).map((key2) => {
      return dataProps[key][key2];
    });

    return values;
  };

  const resultDataset = Object.keys(dataProps).map((key) => {
    return {
      labels: [
        "No aplica",
        "Muy en desacuerdo",
        "En desacuerdo",
        "Neutral",
        "De acuerdo",
        "Muy de acuerdo",
      ],
      datasets: [
        {
          label: key,
          data: getValues(key),
          backgroundColor: [
            "#C0C0C0", // No aplica
            "#FF6347", // Muy en desacuerdo
            "#FFA500", // En desacuerdo
            "#FFDF00", // Neutral
            "#90EE90", // De acuerdo
            "#228B22", // Muy de acuerdo
          ],
          hoverOffset: 4,
        },
      ],
    };
  });

  const generalData = {
    labels: [
      "No aplica",
      "Muy en desacuerdo",
      "En desacuerdo",
      "Neutral",
      "De acuerdo",
      "Muy de acuerdo",
    ],
    datasets: [
      {
        label: "General",
        data: getGeneralValues(),
        backgroundColor: [
          "#C0C0C0", // No aplica
          "#FF6347", // Muy en desacuerdo
          "#FFA500", // En desacuerdo
          "#FFDF00", // Neutral
          "#90EE90", // De acuerdo
          "#228B22", // Muy de acuerdo
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      {showPanel && (
        <section>
          <section className="px-10">
            <ResultChart
              data={generalData}
              nombre={"General - " + nombre}
              showFeedback={true}
            />
          </section>
          <section className="grid grid-cols-2 gap-2 p-4 px-20 ">
            {resultDataset.map((data, index) => {
              return (
                <ResultChart
                  key={index}
                  data={data}
                  nombre={data.datasets[0].label}
                />
              );
            })}
            {/* <ResultChart data={data} nombre="Completitud Funcional" />
        <ResultChart data={data} nombre="Correcion Funcional" />
        <ResultChart data={data} nombre="Pertinencia Funcional" /> */}
          </section>
        </section>
      )}
    </>
  );
}
