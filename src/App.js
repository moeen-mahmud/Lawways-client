import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetails from "./components/Services/ServiceDetails";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import PlaceBooking from "./Pages/PlaceBooking/PlaceBooking";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/place-booking/:id" element={<PlaceBooking />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
