import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <p className="text-2xl text-gray-700 mt-4">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-400 text-white text-lg rounded-full hover:bg-orange-500 transition duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
