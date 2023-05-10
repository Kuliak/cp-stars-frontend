import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Coordinates from './coordinates/Coordinates';
import Paper from '@mui/material/Paper';
import CategoryCard from '../../../components/cards/CategoryCard';
import { paths } from '../../../shared/paths';
import ApiCaller from '../../../services/ApiCaller';
import { ExternalDetails, Star } from '../../../libs/cpstars/openapi';

const StarDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<Star | null>(null);
  const [externalData, setExternalData] = useState<ExternalDetails | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController.getStar({ id: Number(id) }).then((data) => {
      setDetails(data);
      ApiCaller.externalServicesController
        .getSimbadExternalDetails({ name: 'Renson ' + data.renson })
        .then((external) => {
          setExternalData(external);
          setLoading(false);
        });
    });
  }, [id]);

  return (
    <div className="content-page">
      {details && (
        <>
          <Paper className="p-4">
            <table className="mb-4 fs-5">
              <tr>
                <th className="fw-bold">{t('star_details.cp_stars')}:</th>
                <th className="fw-normal ps-2">{details.id}</th>
              </tr>
              <tr>
                <th className="fw-bold">{t('star_details.id_2009_A_AND_A_498_961_R')}:</th>
                <th className="fw-normal ps-2">{details.renson}</th>
              </tr>
            </table>

            <div className="fs-6">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.category_probability')}:
              </div>
              {details.consideredCategoryAffiliationProbabilityFlag}
            </div>
            <div className="fs-6 mb-3">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.binary_system_component')}:
              </div>
              {details.binarySystemComponent}
            </div>
            <div className="fs-6">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.redshift')}:
              </div>
              {loading && <CircularProgress size="1rem" />}
              {externalData?.redshift}
            </div>
            <div className="fs-6 mb-3">
              <div
                className="fw-bold me-2"
                style={{ display: 'inline-block' }}>
                {t('star_details.effective_temperature')}:
              </div>
              {loading && <CircularProgress size="1rem" />}
              {externalData?.effectiveTemperature}{' '}
              {externalData?.effectiveTemperatureUnit ? externalData?.effectiveTemperatureUnit : ''}
            </div>
            <Coordinates
              alpha={details.alpha}
              delta={details.delta}
              icrsRA={details.icrsRightAscension}
              icrsRAError={details.icrsRightAscensionError}
              icrsDec={details.icrsDeclination}
              icrsDecError={details.icrsDeclinationError}
              galacticLongitude={details.galacticLongitude}
              galacticLatitude={details.galacticLatitude}
            />
          </Paper>

          <Grid
            container
            direction="row"
            spacing={3}
            rowSpacing={1}
            className="mt-3">
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.magnitudes.title')}
                imagePath={require('../../../assets/img/magnitudes.png')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.magnitudes}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.motions.title')}
                imagePath={require('../../../assets/img/Parallax_and_proper_motion_pillars.jpg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.motions}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.radial_velocities.title')}
                imagePath={require('../../../assets/img/doppler_spectroscopy.png')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.radial_velocities}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.identifiers.title')}
                imagePath={require('../../../assets/img/numbers.jpg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.identifiers}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.star_datasource_attributes.title')}
                imagePath={require('../../../assets/img/attributes.jpg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.star_datasource_attributes}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.vizier_metadata.title')}
                imagePath={require('../../../assets/img/vizier.jpeg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.vizier_metadata}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.light_curve.title')}
                imagePath={require('../../../assets/img/vizier.jpeg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.light_curve}`}
              />
            </Grid>
            <Grid item>
              <CategoryCard
                cardTitle={t('star_details.spectrum.title')}
                imagePath={require('../../../assets/img/spectrum.jpg')}
                navigatePath={`${paths.starDetails.general}/${id}${paths.starDetails.spectrum}`}
              />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default StarDetails;
