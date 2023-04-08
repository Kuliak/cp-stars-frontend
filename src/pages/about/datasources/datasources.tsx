import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ApiCaller from '../../../services/ApiCaller';
import { DataSourceBasicInfo } from '../../../libs/cpstars/openapi';
import { CircularProgress, Paper, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../shared/paths';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import BackButton from '../../../components/buttons/BackButton';

const Datasources = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isLoading, setLoading] = useState(true);
  const [datasources, setDatasources] = useState<DataSourceBasicInfo[]>([]);

  useEffect(() => {
    ApiCaller.datasourcesController.getAllDatasourcesBasicInfo().then((data) => {
      setDatasources(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="content-page">
      <BackButton navigateTo={paths.about.general} />
      <h3>{t('about.datasources.title')}</h3>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bolder' }}>
                  {t('about.datasources.name')}
                </TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>
                  {t('about.datasources.year')}
                </TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>
                  {t('about.datasources.bibcode')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datasources.map((datasource) => (
                <TableRow
                  hover
                  role="checkbox"
                  style={{ cursor: 'pointer', height: 40 }}
                  key={datasource.id}
                  onClick={() =>
                    navigate(`${paths.about.general + paths.about.datasources}/${datasource.id}`)
                  }>
                  <TableCell>{datasource.name}</TableCell>
                  <TableCell>{datasource.year === -1 ? '' : datasource.year}</TableCell>
                  <TableCell>{datasource.bibcode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default Datasources;
