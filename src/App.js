import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/pages/contact/Contact";
import { Design } from "./components/pages/design/Design";
import { Pottery } from "./components/pages/pottery/Pottery";
import { TopBar } from "./components/TopBar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="App">
      <div className="flex flex-col text-cobalt">
        <HashRouter>
          <TopBar isMenuOpen={isMenuOpen} />
          <div className="flex items-stretch min-h-[calc(100vh-75px)]">
            <Routes>
              <Route path="pottery/*" element={<Pottery />} />
              <Route path="design" element={<Design />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/" element={<Pottery />} />
              <Route path="*" element={<Pottery />} />
            </Routes>
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
