import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { CircularProgress, TableCell } from '@mui/material';
import IdentifiersList from '../../../../components/data/IdentifiersList';
import ApiCaller from '../../../../services/ApiCaller';
import { paths } from '../../../../shared/paths';
import BackButton from '../../../../components/buttons/BackButton';
import { Identifier } from '../../../../libs/cpstars/openapi';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';

const StarDetailsIdentifiers = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [externalLoading, setExternalLoading] = useState(true);

  const [identifiers, setIdentifiers] = useState<Identifier[] | null>(null);
  const [externalAliases, setExternalAliases] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      setLoading(false);
      return;
    }

    ApiCaller.starsController.getStarIdentifiers({ starId: Number(id) }).then((data) => {
      setIdentifiers(data);
      setLoading(false);

      if (data.length > 0) {
        let name = data[0].datasource.name + data[0].name;
        if (name) {
          ApiCaller.externalServicesController.getIdentifiers({ name: name }).then((data) => {
            setExternalAliases(data);
            setExternalLoading(false);
          });
        }
      }
    });
  }, [id]);

  return (
    <div className="content-page">
      <BackButton navigateTo={`${paths.starDetails.general}/${id}`} />
      <div className="fs-5 mb-5">
        <Typography
          variant="h4"
          component="div">
          {t('star_details.identifiers.title')}
        </Typography>
      </div>
      {loading && <CircularProgress />}
      {!loading && identifiers && (
        <Table className="denseTable">
          <TableHead>
            <TableRow>
              <TableCell>{t('star_details.identifiers.datasource')}</TableCell>
              <TableCell>{t('star_details.identifiers.name')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {identifiers.map((identifier) => (
              <TableRow key={identifier.id}>
                <TableCell>{identifier.datasource?.name}</TableCell>
                <TableCell>{identifier.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {externalLoading && <CircularProgress />}
      {!externalLoading && externalAliases && <IdentifiersList identifiers={externalAliases} />}
    </div>
  );
};

export default StarDetailsIdentifiers;
