import { Route, Routes } from 'react-router-dom';
import { paths } from '../shared/paths';
import { About, Home, Manual } from '../pages/pages';
import Footer from './Footer';
import StarDetails from '../pages/Home/StarDetails';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path={paths.home}
          element={<Home />}
        />
        <Route
          exact
          path={paths.about}
          element={<About className="about" />}
        />
        <Route
          exact
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
