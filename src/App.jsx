import { useState, useEffect } from 'react';
import './App.css';
import HashLoader from "react-spinners/HashLoader";
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './assets/pages/About'
import Footer from './components/Footer';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import NavTabs from './components/NavTabs';
import Blog from './assets/pages/Blog';
import Contact from './assets/pages/Contact';
import { StyledEngineProvider } from '@mui/material';


function App() {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },3000)
  },[])

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <div className="flex justify-center items-center h-screen w-full font-space-mono">
          {isLoading ? (
            <HashLoader
              color={"#98A59E"}
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <div
              className={`w-full bg-[#98A59E] dark:bg-gray-800 dark:transition-all dark:duration-300 dark:ease-in-out transition-all duration-300 ease-in-out mx-auto px-4`}
            >
              <NavigationBar theme={theme} toggleMode={toggleMode} />
              <main className="min-h-screen">
                <Routes>
                  <Route exact path="/" element={<Hero />} />
                  <Route exact path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route exact path="/experience" element={<NavTabs />} />
                  <Route exact path="/blogs" element={<Blog />} />
                  <Route exact path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          )}
        </div>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;