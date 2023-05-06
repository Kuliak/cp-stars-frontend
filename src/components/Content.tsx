import { Route, Routes } from 'react-router-dom';
import { paths } from '../shared/paths';
import { About, Home, Manual, Project } from '../pages/pages';
import Footer from './Footer';
import StarDetails from '../pages/details/star/StarDetails';
import React from 'react';
import StarDetailsMagnitudes from '../pages/details/star/magnitudes/StarDetailsMagnitudes';
import StarDetailsMotions from '../pages/details/star/motions/StarDetailsMotions';
import StarDetailsIdentifiers from '../pages/details/star/identifiers/StarDetailsIdentifiers';
import StarDetailsRadialVelocities from '../pages/details/star/radialvelocities/StarDetailsRadialVelocities';
import StarDetailsDatasourceAttributes from '../pages/details/star/attributes/StarDetailsDatasourceAttributes';
import Datasources from '../pages/about/datasources/datasources';
import DataSourceDetails from '../pages/details/datasouce/DataSourceDetails';
import StarDetailsVizierMetadata from '../pages/details/star/vizier/StarDetailsVizierMetadata';
import StarDetailsSpectrum from '../pages/details/star/spectrum/StarDetailsSpectrum';
import StarDetailsLightCurve from '../pages/details/star/lightcurves/StarDetailsLightCurve';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path={paths.home}
          element={<Home />}
        />
        <Route
          path={paths.about.general}
          element={<About />}
        />
        <Route
          path={paths.about.general + paths.about.project}
          element={<Project />}
        />
        <Route
          path={paths.about.general + paths.about.datasources}
          element={<Datasources />}
        />
        <Route
          path={`${paths.about.general + paths.about.datasources}/:id`}
          element={<DataSourceDetails />}
        />
        <Route
          path={paths.manual}
          element={<Manual />}
        />
        <Route
          path={`${paths.starDetails.general}/:id`}
          element={<StarDetails />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.magnitudes}`}
          element={<StarDetailsMagnitudes />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.motions}`}
          element={<StarDetailsMotions />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.radial_velocities}`}
          element={<StarDetailsRadialVelocities />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.identifiers}`}
          element={<StarDetailsIdentifiers />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.star_datasource_attributes}`}
          element={<StarDetailsDatasourceAttributes />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.vizier_metadata}`}
          element={<StarDetailsVizierMetadata />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.light_curve}`}
          element={<StarDetailsLightCurve />}
        />
        <Route
          path={`${paths.starDetails.general}/:id${paths.starDetails.spectrum}`}
          element={<StarDetailsSpectrum />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Content;
