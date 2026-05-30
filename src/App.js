import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar එක import කරන්න
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <BrowserRouter >
      <Navbar /> {/* මෙතනින් Navbar එක දාන්න */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;