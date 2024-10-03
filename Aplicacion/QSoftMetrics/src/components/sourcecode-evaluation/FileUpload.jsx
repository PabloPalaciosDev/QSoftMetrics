import { useState } from "react";
import PropTypes from "prop-types";

const FileUpload = ({HandleProjectKey}) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setMessage("Por favor selecciona un archivo.");
            return;
        }

        const formData = new FormData();
        formData.append("codeFile", file);

        try {
            setMessage("Analisis Iniciado...");
            const response = await fetch("http://localhost:3000/api/sonarqube/upload-code", {
                method: "POST",
                body: formData,
              });
              console.log(response);      

            if (response.ok) {
                setMessage("¡Analisis terminado!");
                HandleProjectKey("qsoftmetrics");
            } else {
                setMessage("Error al subir el archivo.");
            }
        } catch (error) {
            setMessage("Ocurrió un error: " + error.message);
        }
    };

    return (
        <main className="flex flex-col bg-slate-000 flex-1">
            <div className="max-w-lg  bg-white m-5">
                <h2 className="text-3xl font-bold mb-5">Subir Código Fuente</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <input
                        type="file"
                        name="codeFile"
                        className="file-input file-input-bordered file-input-primary w-full"
                        accept=".zip"
                        onChange={handleFileChange}
                    />
                    <button type="submit" className=" text-2xl font-bold btn btn-primary w-full">
                        Analizar
                    </button>
                </form>
                {message && (
                    <div className="mt-4 alert alert-info">{message}</div>
                )}
            </div>
        </main>
    );
};

export default FileUpload;

FileUpload.propTypes = {
    HandleProjectKey: PropTypes.func.isRequired,
};