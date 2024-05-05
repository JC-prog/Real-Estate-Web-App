import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Components

import Card from "./Components/Card/Card"

// Pages
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

function App() {

    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Register" element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
