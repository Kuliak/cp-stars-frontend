import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Home } from './pages/pages';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
      <body>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              exact
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
