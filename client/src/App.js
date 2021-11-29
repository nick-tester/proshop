import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="main py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} exact />
                        <Route path="/product/:product_id" element={<ProductPage />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    )
};

export default App;