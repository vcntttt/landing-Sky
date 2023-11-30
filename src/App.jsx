import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;