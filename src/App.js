import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
        <div className='kola'>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
          </Routes>
          </Router>
        </div>
      )
    }
    

export default App;
