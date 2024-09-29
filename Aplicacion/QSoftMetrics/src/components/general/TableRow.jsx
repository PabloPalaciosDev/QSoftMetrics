import { Link } from "react-router-dom";

export default function TableRow({
  data,
  index,
  borrarProyecto,
  canDelete = false,
}) {
  const item = data;
  console.log(item);
  switch (item.tipo_software) {
    case "web_app":
      item.tipo_software = "Aplicacion web";
      break;
    case "desktop_app":
      item.tipo_software = "Aplicacion de escritorio";
      break;
    case "mobile_app":
      item.tipo_software = "Aplicacion movil";
      break;
    default:
      break;
  }

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{item.nombre}</td>
      <td>{item.version}</td>
      <td>{item?.tipo_software}</td>
      <td className="max-w-96 text-ellipsis overflow-hidden">
        {item.descripcion}
      </td>
      <td>
        <Link
          to={"/survey/" + item.id_software + "?category=ade_func"}
          className="btn btn-warning bg-[#FFA726] btn-xs"
        >
          Evaluar
        </Link>

        <Link to="/survey" className="btn btn-accent bg-sky-500 btn-xs m-1">
          Ver evaluacion
        </Link>
        {canDelete && (
          <button
            onClick={() => borrarProyecto(item.id_software)}
            className="btn btn-error btn-xs"
          >
            Eliminar
          </button>
        )}
      </td>
    </tr>
  );
}
