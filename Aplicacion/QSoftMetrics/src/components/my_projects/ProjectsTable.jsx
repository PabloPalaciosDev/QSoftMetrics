import { Link } from "react-router-dom";
import TableRow from "../general/TableRow";

export default function ProjectsTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Version</th>
            <th>Tipo de software</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>2.5</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <Link
                to="/survey/1"
                className="btn btn-warning bg-[#FFA726] btn-xs"
              >
                Evaluar
              </Link>

              <Link
                to="/survey"
                className="btn btn-accent bg-sky-500 btn-xs m-1"
              >
                Ver evaluacion
              </Link>
              <Link to="/survey" className="btn btn-error btn-xs">
                Eliminar
              </Link>
            </td>
          </tr>
          {/* row 2 */}
          {data.map((item, index) => (
            <TableRow data={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
