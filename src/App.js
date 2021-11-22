import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetails from "./components/Services/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PlaceBooking from "./Pages/PlaceBooking/PlaceBooking";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <main>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/place-booking/:id" element={<PlaceBooking />} />
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
