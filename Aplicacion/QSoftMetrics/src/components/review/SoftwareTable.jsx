import { Link } from "react-router-dom";

export default function SoftwareTable() {
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
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <Link
                to="/survey"
                className="btn btn-warning bg-[#FFA726] btn-xs"
              >
                Evaluar
              </Link>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>
              <button className="btn btn-warning bg-[#FFA726] btn-xs">
                Evaluar
              </button>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>
              <Link
                to="/survey"
                className="btn btn-warning bg-[#FFA726] btn-xs"
              >
                Evaluar
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
