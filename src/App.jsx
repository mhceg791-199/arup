import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Founders from "./pages/founders/founders";
import Client from "./pages/client/client";
import Sustainability from "./pages/sustainability/sustainability";
import SustainabilityDetails from "./pages/sustainabilityDetails/sustainabilityDetails";
import Projects from "./pages/projects/projects";
import ProjectsDetails from "./pages/projectsDetails/projectsDetails";
import Brian from "./pages/Brian/Brian";
import ContactUs from "./pages/contactUs/contactUs";
import Arup from "./pages/arup/arup";
import Christopher from "./pages/christopher/christopher";
import Career from "./pages/career/career";
import GlobalRecognation from "./pages/globalRecognations/globalRecognations";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/brian" element={<Brian />} />
          <Route path="/arup" element={<Arup />} />
          <Route path="/christopher" element={<Christopher />} />
          <Route path="/services" element={<Services />} />
          <Route path="/globalRecognations" element={<GlobalRecognation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectsDetails />} />
          <Route path="/client" element={<Client />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route
            path="/sustainability/:slug"
            element={<SustainabilityDetails />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

//ay hag