import { TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const IdSearch = () => {
  const { t } = useTranslation();

  return (
    <>
      <TextField
        id="id"
        label={t('home.input_form.id')}
        variant="filled"
        required
        sx={{ color: 'white', backgroundColor: 'white' }}
        focused
      />
    </>
  );
};

export default IdSearch;
