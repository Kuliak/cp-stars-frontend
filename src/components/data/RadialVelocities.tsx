import { RadialVelocity } from '../../libs/cpstars/openapi';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface RadialVelocitiesProps {
  radialVelocities: RadialVelocity[];
}

const RadialVelocities = (props: RadialVelocitiesProps) => {
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
                    <TableCell>{t('star_details.radial_velocities.datasource')}</TableCell>
                    <TableCell>{t('star_details.radial_velocities.radial_velocity')}</TableCell>
                    <TableCell>
                      {t('star_details.radial_velocities.radial_velocity_error')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.radialVelocities.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.datasource ? row.datasource.name : ''}</TableCell>
                      <TableCell>{row.radialVelocity}</TableCell>
                      <TableCell>{row.radialVelocityError}</TableCell>
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

export default RadialVelocities;
