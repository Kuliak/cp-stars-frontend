import { Route, Routes } from 'react-router-dom';
import { paths } from '../shared/paths';
import { About, Home, Manual } from '../pages/pages';
import Footer from './Footer';
import StarDetails from '../pages/Home/StarDetails';
import React from 'react';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path={paths.home}
          element={<Home />}
        />
        <Route
          path={paths.about}
          // element={<About className="about" />}
          element={<About />}
        />
        <Route
          path={paths.manual}
          element={<Manual />}
        />
        <Route
          path={`${paths.starDetails}/:id`}
          element={<StarDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
