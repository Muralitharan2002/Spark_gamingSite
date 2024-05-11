import HomePage from "./Pages/Home_page";
import "./style/style.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
