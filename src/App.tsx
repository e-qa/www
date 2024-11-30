import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div className="px-4 text-white font-roboto">
      <div className="flex-1">
        <Router>
          <div className="flex align-center justify-center py-3 sticky top-0">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1 className="  text-white">NO</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
