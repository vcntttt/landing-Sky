import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App