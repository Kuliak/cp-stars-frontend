import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Home } from './pages/pages';
import Navigation from './components/Navigation';

function App() {
  const { t } = useTranslation();

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
      </body>
    </Router>
  );
}

export default App;
