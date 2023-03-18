import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Coordinate {
  name: string;
  value: number | string | undefined;
  error?: number;
}

interface CoordinatesPairTableProps {
  coordinates: Coordinate[];
  displayedColumns: string[];
  valueUnit?: string;
  errorUnit?: string;
}

const CoordinatesPairTable = (props: CoordinatesPairTableProps) => {
  const { t } = useTranslation();

  return (
    <div className="fs-5">
      <Paper elevation={4}>
        <Table className="denseTable">
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: 10, width: 'fit-content' }} />
              {props.displayedColumns.includes('value') && (
                <TableCell style={{ padding: 10, width: 'fit-content' }}>
                  <b>
                    {t('star_details.coordinates.value')}{' '}
                    {props.valueUnit ? '[' + props.valueUnit + ']' : '[deg]'}
                  </b>
                </TableCell>
              )}
              {props.displayedColumns.includes('error') && (
                <TableCell style={{ padding: 10, width: 'fit-content' }}>
                  <b>
                    {t('star_details.coordinates.error')}{' '}
                    {props.errorUnit ? '[' + props.errorUnit + ']' : '[mas]'}
                  </b>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.coordinates &&
              props.coordinates.map((coordinate) => {
                return (
                  <TableRow>
                    <TableCell
                      style={{ padding: 10, width: 'fit-content' }}
                      key={coordinate.name}>
                      <b>{coordinate.name}</b>
                    </TableCell>
                    {props.displayedColumns.includes('value') && (
                      <TableCell style={{ padding: 10, width: 'fit-content' }}>
                        {coordinate.value}
                      </TableCell>
                    )}
                    {props.displayedColumns.includes('error') && (
                      <TableCell style={{ padding: 10, width: 'fit-content' }}>
                        {coordinate.error}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CoordinatesPairTable;
