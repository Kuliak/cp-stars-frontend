import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import CoordinatesPairTable from './coordinates-pair-table';

interface CoordinatesProps {
  alpha?: string | null;
  delta?: string | null;
  icrsRA?: number;
  icrsRAError?: number;
  icrsDec?: number;
  icrsDecError?: number;
  galacticLongitude?: number;
  galacticLatitude?: number;
}

const Coordinates = (props: CoordinatesProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="fs-5 fw-bold mb-3">Coordinates</div>
      <Grid
        container
        direction="row"
        spacing={3}
        rowSpacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}>
          <CoordinatesPairTable
            coordinates={[
              {
                name: t('star_details.coordinates.ra'),
                value: props.icrsRA,
                error: props.icrsRAError,
              },
              {
                name: t('star_details.coordinates.dec'),
                value: props.icrsDec,
                error: props.icrsDecError,
              },
            ]}
            displayedColumns={['value', 'error']}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}>
          <CoordinatesPairTable
            coordinates={[
              {
                name: t('star_details.coordinates.galactic_longitude'),
                value: props.galacticLongitude,
              },
              {
                name: t('star_details.coordinates.galactic_latitude'),
                value: props.galacticLatitude,
              },
            ]}
            displayedColumns={['value']}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}>
          <CoordinatesPairTable
            coordinates={[
              {
                name: t('star_details.coordinates.alpha'),
                value: props.alpha ? props.alpha : undefined,
              },
              {
                name: t('star_details.coordinates.delta'),
                value: props.delta ? props.delta : undefined,
              },
            ]}
            displayedColumns={['value']}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Coordinates;
