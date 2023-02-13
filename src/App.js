import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
          <div className="pl-5">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notfound" element={<NotFound />} />
          </Routes>
          
          <Footer />
          </Router>
        </div>
        </ThemeContext.Provider>
      )
    }
    

export default App;
