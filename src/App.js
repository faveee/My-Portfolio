import './App.css';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ContactMe from './pages/ContactMe';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <div className='kola'>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
          </Routes>
          <Footer />
          </Router>
        </div>
      )
    }
    

export default App;
