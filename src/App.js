import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Restaurant from './Components/Restaurant/Restaurant';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
