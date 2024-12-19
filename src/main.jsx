import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import ServicesContextProvider from "./context/servicesContext.jsx";
import SustainabilityContextProvider from "./context/sustainabilityContext.jsx";
import ProjectsContextProvider from "./context/projectsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProjectsContextProvider>
      <SustainabilityContextProvider>
        <ServicesContextProvider>
          <App />
        </ServicesContextProvider>
      </SustainabilityContextProvider>
    </ProjectsContextProvider>
  </BrowserRouter>
);
