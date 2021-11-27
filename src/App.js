import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/";
import Header from "./components/Header/";
import About from "./components/About/";

const App = () => {
    return (
      <ChakraProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
          </Routes> 
        </BrowserRouter>
      </ChakraProvider>

    );
}

export default App;
