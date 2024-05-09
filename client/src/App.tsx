import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import "./App.css"
// Components

import Card from "./Components/Card"

// Pages
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

function App() {

    return (
        <>
            <div>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
