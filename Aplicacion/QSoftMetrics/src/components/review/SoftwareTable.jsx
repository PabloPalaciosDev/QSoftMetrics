import { Link } from "react-router-dom";
import TableRow from "../general/TableRow";

export default function SoftwareTable({ data }) {
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Tipo de software</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {/* row 2 */}
          {data.map((item, index) => (
            <TableRow data={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
