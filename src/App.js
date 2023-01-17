import './App.css';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ContactMe from './pages/ContactMe';
import Footer from "./components/Footer";
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react'; 
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext("null");

function App() {
  const [theme, SetTheme] = useState("dark");

  const toggleTheme = () => {
    SetTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value = {{ theme, toggleTheme }}>
        <div className="App" id={theme} > 
          <Router>
          <Navbar />
          <div className="pl-10 text-xl">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contactme" element={<ContactMe />} />
              <Route path="/notfound" element={<NotFound />} />
          </Routes>
          <Footer />
          </Router>
        </div>
        </ThemeContext.Provider>
      )
    }
    

export default App;
