import { useState, useEffect } from 'react';
import './App.css';
import HashLoader from "react-spinners/HashLoader";
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './assets/pages/About'
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

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
    <BrowserRouter>
      <div className='flex justify-center items-center h-screen w-full font-space-mono'>
        {
          isLoading ?
          <HashLoader
          color={'#98A59E'}
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
          :
          <div className={`w-full bg-[#98A59E] dark:bg-gray-800 dark:transition-all dark:duration-300 dark:ease-in-out transition-all duration-300 ease-in-out mx-auto px-4`}>
            <NavigationBar theme={theme} toggleMode={toggleMode} />
            <main className='min-h-screen'>
              <Routes>
                <Route path='/' element={<Hero />}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
              </Routes>
            </main>
            <Footer/>
          </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;

const onRouteChange = (path) => {
  window.history.pushState(null, '', path);
};

window.addEventListener('popstate', () => {
  onRouteChange(window.location.pathname);
});

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
    </div>
  );
};