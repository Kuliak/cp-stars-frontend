import { TextField } from '@mui/material';
import { DEFAULT_RESET_RADIUS } from '../../shared/Constants';
import { useTranslation } from 'react-i18next';
import React from 'react';

const CoordinatesSearch = () => {
  const { t } = useTranslation();

  return (
    <>
      <TextField
        id="ra"
        label={t('home.input_form.coordinates.ra')}
        variant="filled"
        required
        sx={{ color: 'white', backgroundColor: 'white' }}
        focused
      />
      <TextField
        id="dec"
        label={t('home.input_form.coordinates.dec')}
        variant="filled"
        required
        sx={{ color: 'white', backgroundColor: 'white' }}
        focused
      />
      <TextField
        id="radius"
        label={t('home.input_form.coordinates.radius')}
        value={DEFAULT_RESET_RADIUS}
        variant="filled"
        required
        sx={{ color: 'white', backgroundColor: 'white' }}
        focused
      />
    </>
  );
};

export default CoordinatesSearch;
