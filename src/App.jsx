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
    // enrutador (configurado para pillan)
    <BrowserRouter basename="/~vrivera/desarrollo_web/landing-sky/">
    {/* <BrowserRouter> */}
    <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;