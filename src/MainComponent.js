import React from "react";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/HomePage/Home";
import About from "./Component/Pages/AboutPage/About";
import Product from "./Component/Product/Product";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";
import CartPage from "./Component/Pages/CartPage";
import NoFound from "./Component/Pages/NoFound";
import ScrollToTop from "./Component/ScrollToTop";
import Sidebar from "./Component/Sidebar";
import PaymentPage from "./Component/Pages/PaymentPage";

function MainComponent() {
  const { toPayPrice, currentUser } = useAuth();
  return (
    <BrowserRouter>
      <main>
        <Sidebar />
        <Nav />
        <div className="main">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/:anyPages" element={<NoFound />} />
              <Route path="/cart" element={<CartPage />} />
              {currentUser && (
                <Route path="/cart/payment" element={<PaymentPage />} />
              )}
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default MainComponent;
