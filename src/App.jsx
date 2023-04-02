import { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState();

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

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    

    <div className={`w-full h-screen bg-[#98A59E] dark:bg-gray-800 dark:transition-all dark:duration-300 dark:ease-in-out transition-all duration-300 ease-in-out font-space-mono container mx-auto px-4`}>
      <NavigationBar theme={theme} toggleMode={toggleMode} />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
