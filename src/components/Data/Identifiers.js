import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { Collapse, Grid, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Identifiers = ({ identifiers }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{ alignItems: 'flex-start', cursor: 'pointer' }}
        onClick={() => setOpen(!open)}>
        <IconButton
          aria-label="expand row"
          size="small"
          color="info">
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          {t('star_details.identifiers.title')}
        </IconButton>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}>
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit>
                  <Grid>
                    <Grid item>
                      <b>DM:</b> {identifiers.dm}
                    </Grid>
                    <Grid item>
                      <b>HD:</b> {identifiers.hd}
                    </Grid>
                    <Grid item>
                      <b>HIP:</b> {identifiers.hip}
                    </Grid>
                    <Grid item>
                      <b>TYC:</b> {identifiers.tyc}
                    </Grid>
                  </Grid>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Identifiers;
