import './App.css';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './pages/ContactMe';

function App() {
  return (
        <div className='kola'>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
          </Routes>
          </Router>
        </div>
      )
    }
    

export default App;
