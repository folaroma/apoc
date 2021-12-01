import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/";
import Header from "./components/Header/";
import About from "./components/About/";
import Sixteenth from "./components/Sixteenth/";
import Nineteenth from "./components/Nineteenth/";
import Contemporary from "./components/Contemporary/";
import Film from "./components/Film/";
import Citation from "./components/Citation/";
import Daniel from "./components/Daniel/";
import David from "./components/David";

const App = () => {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/cite" element={<Citation />} />
            <Route path="/16century" element={<Sixteenth />} />
            <Route path="/19century" element={<Nineteenth />} />
            <Route path="/contemporary" element={<Contemporary />} />
            <Route path="/film" element={<Film />} />
            <Route path="/daniel" element={<Daniel />} />
            <Route path="/david" element={<David />} />
          </Routes> 
        </BrowserRouter>
      </ChakraProvider>

    );
}

export default App;
