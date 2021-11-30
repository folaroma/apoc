import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/";
import Header from "./components/Header/";
import About from "./components/About/";
import Sixteenth from "./components/Sixteenth/";

const App = () => {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/16century" element={<Sixteenth />} />
          </Routes> 
        </BrowserRouter>
      </ChakraProvider>

    );
}

export default App;
