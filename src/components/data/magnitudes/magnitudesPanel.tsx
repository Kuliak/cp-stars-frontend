import { useTranslation } from 'react-i18next';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import ColoredScaler from '../ColoredScaler';
import React from 'react';
import { Magnitude } from '../../../libs/cpstars/openapi';

interface MagnitudesProps {
  magnitudes: Magnitude[];
}

const MagnitudesPanel = (props: MagnitudesProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Table aria-label="collapsible table">
        <TableBody>
          <TableRow>
            <TableCell
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={6}>
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
                      <TableCell>{row.name}</TableCell>
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default MagnitudesPanel;
