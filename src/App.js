import GameTheme from './components/GameTheme.jsx';
import Home from './components/Home.jsx';
import Office from './components/Office.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/gaming" element={<GameTheme />} />
      <Route path="/office" element={<Office />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>

  );

}

export default App;
