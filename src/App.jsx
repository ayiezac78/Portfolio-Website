import { useState, useEffect } from 'react';
import './App.css';
import HashLoader from "react-spinners/HashLoader";
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './assets/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // set delay to 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <HashLoader
            color="#98A59E"
            loading={isLoading}
            size={50}
            css="
              display: inline-block;
              animation: spin 1s ease-in-out infinite;
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            "
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={`w-full h-screen bg-[#98A59E] dark:bg-gray-800 dark:transition-all dark:duration-300 dark:ease-in-out transition-all duration-300 ease-in-out font-space-mono mx-auto px-4 py-4`}>
          <NavigationBar theme={theme} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
