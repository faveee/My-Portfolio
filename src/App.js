import './App.css';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import DarkTheme from './components/DarkTheme';

function App() {
  return (
        <div className='kola'>
          <Router>
          <Navbar />
          <DarkTheme />
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
