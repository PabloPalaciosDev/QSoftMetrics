import { Link } from "react-router-dom";

export default function TableRow({ data, index }) {
  const item = data;
  switch (item.software_type) {
    case "web_app":
      item.software_type = "Aplicacion web";
      break;
    case "desktop_app":
      item.software_type = "Aplicacion de escritorio";
      break;
    case "mobile_app":
      item.software_type = "Aplicacion movil";
      break;
    default:
      break;
  }

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.version}</td>
      <td>{item?.software_type}</td>
      <td className="max-w-96 text-ellipsis overflow-hidden">{item.desc}</td>
      <td>
        <Link to="/survey" className="btn btn-warning bg-[#FFA726] btn-xs">
          Evaluar
        </Link>

        <Link to="/survey" className="btn btn-accent bg-sky-500 btn-xs m-1">
          Ver evaluacion
        </Link>
        <Link to="/survey" className="btn btn-error btn-xs">
          Eliminar
        </Link>
      </td>
    </tr>
  );
}
