import { useState } from "react";
import FileUpload from "../components/sourcecode-evaluation/FileUpload";
import SonarQubeResults from "../components/sourcecode-evaluation/SonarQubeResults";
import Navbar from "../components/Navbar";
import InfoNav from "../components/InfoNav";

const App = () => {
    const [projectKey, setProjectKey] = useState(null);

    const handleFileUploadSuccess = (projectKey) => {
        setProjectKey(projectKey);
    };

    return (
        <section className="flex flex-row min-h-[100vh] min-w-[100vw] bg-background text-foreground">
            <Navbar page={2} />

            <main className="flex flex-col bg-slate-100 flex-1">
                <div className="p-2">
                    <InfoNav />
                </div>

                <section className="border rounded-md shadow-md p-3 bg-white m-3">
                    <div className="p-2">
                        <h1 className="text-4xl font-bold">Evaluación de Código Fuente con SonarQube</h1>
                    </div>

                    <FileUpload HandleProjectKey={handleFileUploadSuccess} />

                    {projectKey && (
                        
                            <SonarQubeResults projectKey={projectKey} />
                    )}
                </section>
            </main>
        </section>
    );
};

export default App;
