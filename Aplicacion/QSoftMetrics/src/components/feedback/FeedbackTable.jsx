import { Link } from "react-router-dom";

export default function FeedbackTable({ data }) {
  const colores = [
    "#C0C0C080", // No aplica
    "#FF634780", // Muy en desacuerdo
    "#FFA50080", // En desacuerdo
    "#FFDF0080", // Neutral
    "#90EE9080", // De acuerdo
    "#228B2280", // Muy de acuerdo
  ];

  const setearColor = (calificacion) => {
    if (calificacion === 5) return colores[5];
    if (calificacion === 4) return colores[4];
    if (calificacion === 3) return colores[3];
    if (calificacion === 2) return colores[2];
    if (calificacion === 1) return colores[1];
    if (calificacion === 0) return colores[0];
  };

  const setearCalificacion = (calificacion) => {
    if (calificacion === 5) return "Muy de acuerdo";
    if (calificacion === 4) return "De acuerdo";
    if (calificacion === 3) return "Neutral";
    if (calificacion === 2) return "En desacuerdo";
    if (calificacion === 1) return "Muy en desacuerdo";
    if (calificacion === 0) return "No aplica";
  };

  const fixedData = data.map((item) => ({
    ...item,
    calificacion: setearCalificacion(item.calificacion),
    color: setearColor(item.calificacion),
  }));

  console.log(fixedData);

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Tipo de usuario</th>
            <th>Correo</th>
            <th>Comentario</th>
            <th>Calificacion</th>
          </tr>
        </thead>
        <tbody>
          {fixedData.map((item, index) => (
            <tr key={index} style={{ backgroundColor: item.color }}>
              <th>{index + 1}</th>
              <td>{item.nombre}</td>
              <td>{item.tipo}</td>
              <td>{item.correo}</td>
              <td className="max-w-96 text-ellipsis overflow-hidden">
                {item.comentario === "" ? "Sin comentario" : item.comentario}
              </td>
              <td>{item.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
