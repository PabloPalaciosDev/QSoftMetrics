import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "chart.js/auto";
import { FaCheck, FaTimes, FaCircle } from "react-icons/fa"; // Importamos react-icons

const SonarQubeResults = ({ projectKey }) => {
    const [results, setResults] = useState(null);
    const [fetchTriggered, setFetchTriggered] = useState(false);
    const [showOnlyBest, setShowOnlyBest] = useState(false); // Filtrar por mejores valores

    // Función para obtener los resultados de SonarQube
    const fetchResults = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/sonarqube/results`,
                {
                    method: "GET",
                }
            );
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error(
                "Error al obtener los resultados de SonarQube:",
                error
            );
        }
    }, []); // Sin dependencias dinámicas para evitar el bucle infinito

    // Función para disparar la carga de resultados
    const handleFetchResults = () => {
        setFetchTriggered(true);
        fetchResults();
    };

    // Mapeo de nombres de métricas a español
    const mapMetricsToSpanish = (metric) => {
        const metricMapping = {
            file_complexity: "Complejidad de Archivos",
            cognitive_complexity: "Complejidad Cognitiva",
            security_hotspots: "Puntos Críticos de Seguridad",
            security_rating: "Calificación de Seguridad",
            vulnerabilities: "Vulnerabilidades",
            bugs: "Errores (Bugs)",
            reliability_rating: "Calificación de Confiabilidad",
            duplicated_lines_density: "Líneas Duplicadas (%)",
            duplicated_blocks: "Bloques Duplicados",
            sqale_rating: "Calificación de Mantenibilidad",
            new_technical_debt: "Deuda Técnica Nueva",
        };
        return metricMapping[metric] || metric;
    };

    // Descripción de cada métrica
    const getMetricDescription = (metric) => {
        const descriptionMapping = {
            file_complexity:
                "Mide la complejidad de un archivo en base al número de funciones o métodos.",
            cognitive_complexity:
                "Mide la dificultad de entender el flujo del código.",
            security_hotspots:
                "Identifica áreas del código donde podría haber riesgos de seguridad.",
            security_rating: "Calificación general de la seguridad del código.",
            vulnerabilities:
                "Cantidad de vulnerabilidades detectadas en el código.",
            bugs: "Errores o fallos encontrados en el código que deben corregirse.",
            reliability_rating:
                "Calificación de cuán confiable es el código en su ejecución.",
            duplicated_lines_density:
                "Porcentaje de líneas duplicadas en el código.",
            duplicated_blocks:
                "Cantidad de bloques de código que se encuentran duplicados.",
            sqale_rating: "Calificación de la mantenibilidad del código.",
            new_technical_debt:
                "Mide la deuda técnica nueva generada por el código.",
        };
        return descriptionMapping[metric] || "Sin descripción disponible.";
    };

    // Renderizar símbolos para el "Mejor Valor"
    const renderBestValueSymbol = (bestValue) => {
        if (bestValue === true) return <FaCheck className="text-green-600" />; // Gancho verde
        if (bestValue === false) return <FaTimes className="text-red-600" />; // Equis roja
        return <FaCircle className="text-gray-400" />; // Círculo gris
    };

    // Calcular el puntaje de salud del código con dos decimales
    const calculateHealthScore = () => {
        if (!results) return "0.00"; // Añadimos protección si results es null
        const relevantMetrics = getRelevantMetrics(); // Mover el cálculo aquí
        const totalMetrics = relevantMetrics.length;
        const bestMetrics = relevantMetrics.filter((m) => m.bestValue).length;
        return ((bestMetrics / totalMetrics) * 100).toFixed(2); // Redondear a dos decimales
    };

    // Filtrar métricas relevantes para la ISO 25001
    const getRelevantMetrics = () => {
        return (
            results?.component.measures.filter((measure) =>
                [
                    "file_complexity",
                    "cognitive_complexity",
                    "security_hotspots",
                    "security_rating",
                    "vulnerabilities",
                    "bugs",
                    "reliability_rating",
                    "duplicated_lines_density",
                    "duplicated_blocks",
                    "sqale_rating",
                    "new_technical_debt",
                ].includes(measure.metric)
            ) || []
        );
    };

    const relevantMetrics = getRelevantMetrics();

    // Filtrar métricas si se selecciona mostrar solo mejores valores
    const filteredMetrics = showOnlyBest
        ? relevantMetrics.filter((measure) => measure.bestValue === true)
        : relevantMetrics;

    useEffect(() => {
        if (fetchTriggered) {
            fetchResults();
        }
    }, [fetchTriggered, fetchResults]);

    // Función para renderizar las filas de la tabla
    const renderTableRow = (label, value, bestValue, description) => (
        <tr key={label} className="border-b hover:bg-gray-100">
            <td className="px-6 py-4 text-left" data-tip={description}>
                {label}
            </td>
            <td className="px-6 py-4 text-center">{value}</td>
            <td className="px-20 py-4 text-center">
                {renderBestValueSymbol(bestValue)}
            </td>
            <td className="px-6 py-4 text-left">{description}</td>
        </tr>
    );
    if (projectKey && !results) {
        return (
            <div className="text-center">
                <button
                    onClick={handleFetchResults}
                    disabled={!projectKey}
                    className="btn bg-green-600 hover:bg-green-500 text-white font-bold px-6 rounded-lg w-64 text-2xl mx-auto"
                >
                    {projectKey
                        ? "Cargar Resultados"
                        : "Esperando Project Key..."}
                </button>
                <div className="mt-4 text-gray-500">
                    No se han cargado resultados aún.
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
                Resultados del Análisis de SonarQube
            </h2>

            {/* Indicador de salud del código */}
            <div className="mb-6">
                <h3 className="text-xl font-bold">
                    Salud del Código: {calculateHealthScore()}%
                </h3>
                <progress
                    value={calculateHealthScore()}
                    max="100"
                    className="w-full"
                ></progress>
            </div>
            {/* Filtro para mostrar solo mejores valores */}
            <div className="mb-4">
                <label>
                    <input
                        type="checkbox"
                        checked={showOnlyBest}
                        onChange={() => setShowOnlyBest(!showOnlyBest)}
                    />
                    Mostrar solo mejores valores
                </label>
            </div>
                <div className="table-container max-h-96 overflow-y-auto">
                    <table className="min-w-full bg-white border-collapse rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-6 py-4 text-left text-gray-600 font-bold">
                                    Métrica
                                </th>
                                <th className="px-6 py-4 text-center text-gray-600 font-bold">
                                    Valor
                                </th>
                                <th className="px-6 py-4 text-center text-gray-600 font-bold">
                                    Calificación
                                </th>
                                <th className="px-6 py-4 text-left text-gray-600 font-bold">
                                    Descripción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMetrics.map((measure) =>
                                renderTableRow(
                                    mapMetricsToSpanish(measure.metric),
                                    measure.period?.value || measure.value,
                                    measure.bestValue !== undefined
                                        ? measure.bestValue
                                        : measure.period?.bestValue,
                                    getMetricDescription(measure.metric)
                                )
                            )}
                        </tbody>
                    </table>
                </div>

            {/* Áreas críticas a mejorar */}
            <div className="mt-8">
                <h3 className="text-red-500 font-bold">
                    Áreas Críticas a Mejorar
                </h3>
                <ul>
                    {relevantMetrics
                        .filter((m) => m.bestValue === false)
                        .map((m) => (
                            <li key={m.metric} className="text-red-600">
                                {mapMetricsToSpanish(m.metric)}: {m.value}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default SonarQubeResults;

SonarQubeResults.propTypes = {
    projectKey: PropTypes.string.isRequired,
};
