import { useTranslation } from 'react-i18next';
import TableRow from '@mui/material/TableRow';
import { Collapse, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import ColoredScaler from './ColoredScaler';
import React from 'react';
import Magnitude from '../../shared/interfaces/Magnitude';

interface MagnitudesProps {
  magnitudes: Magnitude[];
}

const Magnitudes = (props: MagnitudesProps) => {
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
          {t('star_details.magnitudes.title')}
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
                  <Table className="denseTable">
                    <TableHead>
                      <TableRow>
                        <TableCell>{t('star_details.magnitudes.band')}</TableCell>
                        <TableCell>{t('star_details.magnitudes.value')}</TableCell>
                        <TableCell>{t('star_details.magnitudes.error')}</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          {t('star_details.magnitudes.quality')}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.magnitudes.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.band}</TableCell>
                          <TableCell>{row.value}</TableCell>
                          <TableCell>{row.error}</TableCell>
                          <TableCell style={{ textAlign: 'center' }}>
                            <ColoredScaler
                              type={'char'}
                              best={'A'}
                              worst={'E'}
                              value={row.quality}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Magnitudes;
