import {
  Accessibility,
  TimerReset,
  MonitorCog,
  Pointer,
  Copy,
  ServerCog,
  UnfoldHorizontal,
  Shield,
  Lock,
  ListTodo,
  Folder,
  ScrollText,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <div className="flex min-h-[100dvh] bg-background text-foreground ">
      <nav className="hidden w-60 flex-col  bg-card md:flex">
        <div className="bg-[#FFA726] flex justify-center content-center h-20">
          <h1 className="text-2xl font-bold my-auto tracking-wider">
            QSoftMetrics
          </h1>
        </div>
        <div className="p-4 md:flex ">
          <div className="space-y-2">
            <Link
              to="/review"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726] w-52"
              style={{ backgroundColor: page === 0 && "#FFA726" }}
            >
              <ListTodo />
              Evaluar
            </Link>
            <Link
              to="/my-projects"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
              style={{ backgroundColor: page === 1 && "#FFA726" }}
            >
              <Folder />
              Mis Proyectos
            </Link>
            <Link
              to="/my-reviews"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
              style={{ backgroundColor: page === 2 && "#FFA726" }}
            >
              <ScrollText />
              Mis Evaluaciones
            </Link>

            {page >= 0 && (
              <div>
                <div className="divider text-xs font-bold">ISO25010</div>
                <Link
                  to="?category=ade_func"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                  style={{ backgroundColor: page === 3 && "#FFA726" }}
                >
                  <Accessibility />
                  Adecuación Funcional
                </Link>
                <Link
                  to="?category=efi_des"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <TimerReset />
                  Eficiencia de Desempeño
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <MonitorCog />
                  Compatibilidad
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <Pointer />
                  Capacidad de Interacción
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <Copy />
                  Fiabilidad
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <Lock />
                  Seguridad
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <ServerCog />
                  Mantenibilidad
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <UnfoldHorizontal />
                  Flexibilidad
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#FFA726]"
                >
                  <Shield />
                  Protección
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
