import { Route, Routes } from 'react-router-dom';
import { paths } from '../shared/paths';
import { About, Home, Manual } from '../pages/pages';
import Footer from './Footer';

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
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
