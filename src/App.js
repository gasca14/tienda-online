
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter>

        </AppRouter>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
