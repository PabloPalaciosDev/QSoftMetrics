import { Link } from "react-router-dom";
import { Check, Braces, Info } from "lucide-react";

export default function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-md space-y-8 ">
        <div>
          <div className="flex items-center justify-center">
            <Check size={32} strokeWidth={3} />
            <h2 className="ml-2 text-3xl font-bold tracking-tight text-foreground">
              Registrarse
            </h2>
          </div>
          <p className="mt-2 text-center text-muted-foreground">
            Únete a nuestra plataforma de evaluación de calidad de software.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <div className="space-y-2">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                placeholder="Juan Pérez"
                className="input input-bordered"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="juan@ejemplo.com"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              required
              className="input input-bordered"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="role">Rol</label>
            <select name="" id="" className="select select-bordered w-full">
              <option value="developer">Desarrollador</option>
              <option value="manager">Gerente</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div>
            <button type="submit" className="w-full btn bg-[#FFA726]">
              Registrarse
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <div>¿Ya tienes una cuenta?</div>
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Iniciar sesión
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Info size={40} />
          <Braces size={40} />
          <Check size={40} />
        </div>
      </div>
    </div>
  );
}
