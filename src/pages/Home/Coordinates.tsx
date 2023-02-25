import { Grid, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import React from 'react';

interface CoordinatesProps {
  icrsRA: number;
  icrsRAError: number;
  icrsDec: number;
  icrsDecError: number;
  galacticLongitude: number;
  galacticLatitude: number;
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
        rowSpacing={1}>
        <Grid
          item
          xs={6}>
          <div className="fs-5">
            <Paper>
              <Table className="denseTable">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: 10, width: 'fit-content' }} />
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      <b>{t('star_details.coordinates.value')} [deg]</b>
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      <b>{t('star_details.coordinates.error')} [mas]</b>
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      <b>{t('star_details.coordinates.ra')}</b>
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      {props.icrsRA}
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      {props.icrsRAError}
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }} />
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      <b>{t('star_details.coordinates.dec')}</b>
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      {props.icrsDec}
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }}>
                      {props.icrsDecError}
                    </TableCell>
                    <TableCell style={{ padding: 10, width: 'fit-content' }} />
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Grid>
        <Grid
          item
          xs={6}>
          <div className="fs-5">
            <Paper>
              <Table className="denseTable">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: 10 }} />
                    <TableCell style={{ padding: 10 }}>
                      <b>{t('star_details.coordinates.value')} [deg]</b>
                    </TableCell>
                    <TableCell style={{ padding: 10 }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <b>{t('star_details.coordinates.galactic_longitude')}</b>
                    </TableCell>
                    <TableCell>{props.galacticLongitude}</TableCell>
                    <TableCell />
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <b>{t('star_details.coordinates.galactic_latitude')}</b>
                    </TableCell>
                    <TableCell>{props.galacticLatitude}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Coordinates;
