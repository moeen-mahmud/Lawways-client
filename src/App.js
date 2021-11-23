import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetails from "./components/Services/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PlaceBooking from "./Pages/PlaceBooking/PlaceBooking";
import Register from "./Pages/Register/Register";
import Private from "./Pages/Private/Private";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import UserOrder from "./Pages/Dashboard/User/UserOrder/UserOrder";
import Payment from "./Pages/Dashboard/User/Payment/Payment";
import UserReview from "./Pages/Dashboard/User/UserReview/UserReview";
import Profile from "./Pages/Dashboard/Profile/Profile";

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
            <Route
              path="/place-booking/:id"
              element={
                <Private>
                  <PlaceBooking />
                </Private>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Private>
                  <DashboardHome />
                </Private>
              }
            >
              <Route path=":user" element={<Profile />} />
              <Route path="user-orders" element={<UserOrder />} />
              <Route path="payment" element={<Payment />} />
              <Route path="user-review" element={<UserReview />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
