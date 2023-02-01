import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import DrawerMenu from './components/Drawer/DrawerMenu';

function App() {
  return (
    <>
      <Router>
        <DrawerMenu />
      </Router>
    </>
  );
}

export default App;
