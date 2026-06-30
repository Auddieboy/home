import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/pages/about/About";
import { Contact } from "./components/pages/contact/Contact";
import { Design } from "./components/pages/design/Design";
import { Pottery } from "./components/pages/pottery/Pottery";
import { TopBar } from "./components/TopBar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="App">
      <div className="flex flex-col text-text-dark">
        <HashRouter>
          <TopBar isMenuOpen={isMenuOpen} />
          <div className="flex items-stretch min-h-[calc(100vh-75px)]">
            <Routes>
              <Route path="about" element={<About />} />
              <Route path="pottery" element={<Pottery />} />
              <Route path="design" element={<Design />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/" element={<About />} />
              <Route path="*" element={<About />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
