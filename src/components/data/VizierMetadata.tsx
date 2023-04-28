import { useTranslation } from 'react-i18next';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import React from 'react';
import { VizierTable } from '../../libs/cpstars/openapi';

interface VizierMetadataProps {
  vizierTables: VizierTable[];
}

const VizierMetadata = (props: VizierMetadataProps) => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          <TableRow>
            <TableCell
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={6}>
              <Table className="denseTable">
                <TableHead>
                  <TableRow>
                    <TableCell>{t('star_details.vizier_metadata.name')}</TableCell>
                    <TableCell>{t('star_details.vizier_metadata.description')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.vizierTables.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name ? row.name : ''}</TableCell>
                      <TableCell>{row.description ? row.description : ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VizierMetadata;
