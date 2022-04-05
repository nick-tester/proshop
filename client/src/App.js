import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import * as Page from "./pages";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="main py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<Page.Home />} />
                        <Route path="/product/:id" element={<Page.Product />} />
                        <Route path="/cart" element={<Page.Cart />}>
                            <Route path=":id" element={<Page.CartQuery />} />
                        </Route>
                        <Route path="/auth">
                            <Route path="login" element={<Page.Login />} />
                            <Route path="register" element={<Page.Register />} />
                        </Route>
                        <Route path="/profile" element={<Page.Profile />} />
                        <Route path="/test" element={<Page.Test />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    )
};

export default App;