
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';
import ThemeContext from './context/ThemeContext';
import React, { useContext } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'dark' ? 'bg-dark' : 'bg-light'}>
      <BrowserRouter>
        <PayPalScriptProvider options={{"client-id": "AUqSX85gAQAmj9VsFdcLb9z8kCeTQQUlF8AwshH8mv0FHwZCUIFafdPtjiexTPuYo8WQ5mqyHYx-VWtZ"}}>
          <Navbar />
          <AppRouter>
          </AppRouter>
          <Footer />
        </PayPalScriptProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
