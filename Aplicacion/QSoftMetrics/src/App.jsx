import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

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
      path: "/main",
      element: <MainPage />,
      name: "Login",
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
