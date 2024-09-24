import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Review from "./pages/Review";
import Signup from "./pages/Signup";
import MyProjects from "./pages/MyProjects";
import MyReviews from "./pages/MyReviews";
import Survey from "./pages/Survey";
import NewProjects from "./pages/NewProjects";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";
import ResultFeedback from "./pages/ResultFeedback";

function App() {
  const navRoutes = [
    {
      path: "/",
      element: <Home />,
      name: "Inicio",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/login",
      element: <Login />,
      name: "Login",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/signup",
      element: <Signup />,
      name: "Registro",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/review",
      element: <Review />,
      name: "evaluacion",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/my-projects",
      element: <MyProjects />,
      name: "mi proyectos",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/my-projects/new",
      element: <NewProjects />,
      name: "nuevo proyectos",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/my-reviews",
      element: <MyReviews />,
      name: "mis evaluaciones",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/survey/:id",
      element: <Survey />,
      name: "encuesta",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/results",
      element: <Results />,
      name: "resultados",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/results/feedback",
      element: <ResultFeedback />,
      name: "Resultado de la retroalimentación",
      icon: "../../public/icons/home.png",
    },

    {
      path: "*",
      element: <NotFound />,
      name: "encuesta",
      icon: "../../public/icons/home.png",
    },
  ];

  return (
    <>
      <>
        <div className="min-h-screen flex flex-col">
          <BrowserRouter>
            <Routes>
              {navRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </>
  );
}

export default App;
