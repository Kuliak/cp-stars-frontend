import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ApiCaller from '../../../services/ApiCaller';
import { DataSource } from '../../../libs/cpstars/openapi';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { paths } from '../../../shared/paths';
import BackButton from '../../../components/buttons/BackButton';

const DataSourceDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<DataSource | null>(null);

  useEffect(() => {
    setLoading(true);
    ApiCaller.datasourcesController.getDatasource({ id: Number(id) }).then((data) => {
      setDetails(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="content-page">
      <BackButton navigateTo={paths.about.general + paths.about.datasources} />
      {loading && <CircularProgress />}
      {!loading && (
        <>
          <h3>
            {details?.fullName} {details?.year === -1 ? '' : `(${details?.year})`}
          </h3>
          <p>
            <b>{t('datasource_details.bibcode')}:</b> {details?.bibcode}
          </p>
          {details?.description}
        </>
      )}
    </div>
  );
};

export default DataSourceDetails;
