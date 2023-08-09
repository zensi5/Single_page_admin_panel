import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Contact />} />
        </Routes>
    );
};

export default AppRoute;