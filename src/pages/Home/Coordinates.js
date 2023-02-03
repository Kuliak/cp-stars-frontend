import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Coordinates = ({ icrsRA, icrsDec, galacticLongitude, galacticLatitude }) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      rowSpacing={1}>
      <Grid
        item
        xs={6}>
        <div className="fs-5">
          <div
            className="fw-bold me-2"
            style={{ display: 'inline-block' }}>
            {t('star_details.coordinates.ra')}:
          </div>
          {icrsRA}
        </div>
      </Grid>
      <Grid
        item
        xs={6}>
        <div className="fs-5">
          <div
            className="fw-bold me-2"
            style={{ display: 'inline-block' }}>
            {t('star_details.coordinates.galactic_longitude')}:
          </div>
          {galacticLongitude}
        </div>
      </Grid>
      <Grid
        item
        xs={6}>
        <div className="fs-5">
          <div
            className="fw-bold me-2"
            style={{ display: 'inline-block' }}>
            {t('star_details.coordinates.dec')}:
          </div>
          {icrsDec}
        </div>
      </Grid>
      <Grid
        item
        xs={6}>
        <div className="fs-5">
          <div
            className="fw-bold me-2"
            style={{ display: 'inline-block' }}>
            {t('star_details.coordinates.galactic_latitude')}:
          </div>
          {galacticLatitude}
        </div>
      </Grid>
    </Grid>
  );
};

export default Coordinates;
