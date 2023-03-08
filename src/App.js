import logo from './logo.svg';
import './App.css'
import AboutPage from './pages/about';
// import { useState } from 'react';
import { Routes, Route,} from 'react-router-dom';
import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import nav from './components/nav';
import Navbar from './components/Navbar'
import Button from 'react-bootstrap/Button'


function App() {
  // test call to a route route
  // const testFunction = async () => {
  //   const response = await fetch("/test_route")
  // }
  // testFunction()

  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Home></Home> */}
       {/* <h1>Trade Criteria Checklist</h1> */}
       {/* <nav /> */}
       <Navbar/>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
