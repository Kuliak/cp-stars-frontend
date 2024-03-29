import { Motion } from '../../libs/cpstars/openapi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

interface MotionsListProps {
  motions: Motion[];
}

const MotionsList = (props: MotionsListProps) => {
  const { t } = useTranslation();

  return (
    <>
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
                      <TableCell>{t('star_details.motions.datasource')}</TableCell>
                      <TableCell>{t('star_details.motions.parallax')}</TableCell>
                      <TableCell>{t('star_details.motions.parallax_error')}</TableCell>
                      <TableCell>{t('star_details.motions.pmra')}</TableCell>
                      <TableCell>{t('star_details.motions.pmra_error')}</TableCell>
                      <TableCell>{t('star_details.motions.pmdec')}</TableCell>
                      <TableCell>{t('star_details.motions.pmdec_error')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.motions.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.datasource ? row.datasource.name : ''}</TableCell>
                        <TableCell>{row.parallax}</TableCell>
                        <TableCell>{row.parallaxError}</TableCell>
                        <TableCell>{row.properMotionRa}</TableCell>
                        <TableCell>{row.properMotionRaError}</TableCell>
                        <TableCell>{row.properMotionDec}</TableCell>
                        <TableCell>{row.properMotionDecError}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MotionsList;
