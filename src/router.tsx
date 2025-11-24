import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import Projetos from "./pages/Projetos";
import Contactos from "./pages/Contactos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre-nos", element: <SobreNos /> },
      { path: "servicos", element: <Servicos /> },
      { path: "projetos", element: <Projetos /> },
      { path: "contactos", element: <Contactos /> },
    ],
  },
]);
