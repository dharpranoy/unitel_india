import GameTheme from './components/GameTheme.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Office from './components/Office.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Contact from './components/Contact.jsx';
import StoreLocator from './components/StoreLocator.jsx';
import Shop from './components/Shop.jsx';
import ProductDetails from './components/ProductDetails.jsx';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/gaming" element={<GameTheme />} />
      <Route path="/office" element={<Office />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/stores" element={<StoreLocator />} />
      <Route path="/shopall" element={<Shop />} />
      <Route path="/productDetails" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>

  );

}

export default App;
