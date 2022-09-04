import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Router;