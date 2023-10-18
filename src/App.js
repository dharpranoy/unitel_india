import GameTheme from './components/GameTheme.jsx';
import Home from './components/Home.jsx';
import Office from './components/Office.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/gaming" element={<GameTheme />} />
      <Route path="/office" element={<Office />} />

    </Routes>

  );

}

export default App;
