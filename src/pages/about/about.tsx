import { Grid } from '@mui/material';
import CategoryCard from '../../components/cards/CategoryCard';
import { paths } from '../../shared/paths';
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="content-page">
      <h3>{t('about.title')}</h3>
      <Grid
        container
        direction="row"
        spacing={3}
        rowSpacing={1}
        className="mt-5">
        <Grid item>
          <CategoryCard
            cardTitle={t('about.project.title')}
            imagePath={require('../../assets/img/project.jpg')}
            navigatePath={`${paths.about.general + paths.about.project}`}
          />
        </Grid>
        <Grid item>
          <CategoryCard
            cardTitle={t('about.datasources.title')}
            imagePath={require('../../assets/img/datasources.jpg')}
            navigatePath={`${paths.about.general + paths.about.datasources}`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
