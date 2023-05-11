import React from 'react';
import './styles/App.css';
import './styles/MUI.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DrawerMenu from './components/drawer/DrawerMenu';

function App() {
  return (
    <Router>
      <DrawerMenu />
    </Router>
  );
}

export default App;
