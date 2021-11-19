import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
