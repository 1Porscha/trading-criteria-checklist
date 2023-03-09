import logo from './logo.svg';
import './App.css'
import AboutPage from './pages/about';
import { Routes, Route,} from 'react-router-dom';
import HomePage from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Button from 'react-bootstrap/Button'


function App() {
  //create paths for pages

  return (
    
    <div className="App">
    
       <Navbar/>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
    
  );
}

export default App;
