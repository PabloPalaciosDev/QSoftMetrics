import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function InfoNav() {

    

    return (
        <div className="navbar bg-base-100 rounded-md">
            <div className="flex-1">
                <a className="text-xl font-bold">
                    Bienvenido, Pablo!
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Opciones</a>
                        </li>
                        <li>
                            <Link to="/logout">Salir</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
