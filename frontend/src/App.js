import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home';
import CreateLetter from './pages/CreateLetter';
import EditLetter from './pages/EditLetter';
import MyLetters from './pages/MyLetters';
import About from './pages/About';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateLetter />} />
            <Route path="/edit/:id" element={<EditLetter />} />
            <Route path="/my-letters" element={<MyLetters />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
