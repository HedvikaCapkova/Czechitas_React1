import React from "react";
import { createRoot } from "react-dom/client";
import { Palette } from "./Palette/Palette.jsx";
import { palettes } from "./palettes.js";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Barevné palety</h1>
        </header>
      </div>
      <main>
      {palettes.map((palette) => ( <Palette key={palette.name} paletteData={palette}/> ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
