import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import Projetos from "./pages/Projetos";
import Contactos from "./pages/Contactos";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Cookies from "./pages/Cookies";
import PortalDenuncias from "./pages/PortalDenuncias";
import EticaEmpresarialPrevencaoCorrupcao from "./pages/EticaEmpresarialPrevencaoCorrupcao";

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
      { path: "privacidade", element: <Privacidade /> },
      { path: "termos", element: <Termos /> },
      { path: "cookies", element: <Cookies /> },
      { path: "portal-denuncias", element: <PortalDenuncias /> },
      { path: "etica-empresarial-prevencao-corrupcao", element: <EticaEmpresarialPrevencaoCorrupcao /> },
    ],
  },
]);
