import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const Dashboardpage = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboardpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
