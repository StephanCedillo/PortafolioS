import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import InicioSection from "./pages/Inicio/InicioSection";
import TrayectoriaSection from "./pages/Trayectoria/TrayectoriaSection";
import PersonalSection from "./pages/Personal/PersonalSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioSection />} />
        <Route path="/trayectoria" element={<TrayectoriaSection />} />
        <Route path="/personal" element={<PersonalSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
