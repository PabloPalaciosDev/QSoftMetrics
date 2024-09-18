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

export default function Navbar() {
  return (
    <div className="flex min-h-[100dvh] bg-background text-foreground">
      <nav className="hidden w-60 flex-col border-r bg-card md:flex">
        <div className="bg-[#FFA726] flex justify-center content-center h-16">
          <h1 className="text-2xl font-bold my-auto tracking-wider">
            QSoftMetrics
          </h1>
        </div>
        <div className="p-4 md:flex">
          <div className="space-y-2">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <ListTodo />
              Evaluar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Folder />
              Mis Proyectos
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <ScrollText />
              Mis Evaluaciones
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Accessibility />
              Adecuación Funcional
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <TimerReset />
              Eficiencia de Desempeño
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <MonitorCog />
              Compatibilidad
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Pointer />
              Capacidad de Interacción
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Copy />
              Fiabilidad
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Lock />
              Seguridad
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <ServerCog />
              Mantenibilidad
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <UnfoldHorizontal />
              Flexibilidad
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              prefetch={false}
            >
              <Shield />
              Protección
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
