import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import { Footer, Header } from "./Components";
import Info from "./pages/Info";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Vote from "./pages/Vote";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
        <div className="App">
            <Header />
            <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/vote" element={<Vote/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
