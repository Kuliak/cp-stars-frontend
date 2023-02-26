import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Collapse, Grid, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getAllAliases } from '../../services/ExternalService';
import React from 'react';
import Identifiers from '../../shared/interfaces/Identifiers';

interface IdentifiersListProps {
  objectName: string;
  identifiers: Identifiers;
}

const IdentifiersList = (props: IdentifiersListProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [externalOpen, setExternalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [externalAliases, setExternalAliases] = useState([]);

  useEffect(() => {
    let name;
    if (props.objectName) {
      name = props.objectName;
    } else if (props.identifiers.dm) {
      name = props.identifiers.dm;
    } else if (props.identifiers.hd) {
      name = props.identifiers.hd;
    } else if (props.identifiers.hip) {
      name = props.identifiers.hip;
    } else if (props.identifiers.tyc) {
      name = props.identifiers.tyc;
    }

    if (!name) {
      setLoading(false);
      return;
    }

    getAllAliases(name).then((data) => {
      setExternalAliases(data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setExternalAliases]);

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
                style={{ paddingBottom: open ? 16 : 0, paddingTop: open ? 16 : 0 }}
                colSpan={6}>
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit>
                  <Grid>
                    <Grid item>
                      <b>DM:</b> {props.identifiers.dm}
                    </Grid>
                    <Grid item>
                      <b>HD:</b> {props.identifiers.hd}
                    </Grid>
                    <Grid item>
                      <b>HIP:</b> {props.identifiers.hip}
                    </Grid>
                    <Grid item>
                      <b>TYC:</b> {props.identifiers.tyc}
                    </Grid>
                  </Grid>
                  <div
                    style={{ alignItems: 'flex-start', cursor: 'pointer' }}
                    className="mt-4"
                    onClick={() => setExternalOpen(!externalOpen)}>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      color="info">
                      {externalOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      {t('star_details.identifiers.external')}
                    </IconButton>
                  </div>
                  {loading && <CircularProgress />}
                  {!loading && (
                    <TableContainer component={Paper}>
                      <Table aria-label="collapsible table">
                        <TableBody>
                          <TableRow>
                            <TableCell
                              style={{
                                paddingBottom: externalOpen ? 16 : 0,
                                paddingTop: externalOpen ? 16 : 0,
                              }}
                              colSpan={6}>
                              <Collapse
                                in={externalOpen}
                                timeout="auto"
                                unmountOnExit>
                                <Grid
                                  container
                                  direction="row"
                                  spacing={3}
                                  rowSpacing={1}>
                                  {externalAliases.map((alias) => (
                                    <Grid
                                      key={alias}
                                      item
                                      xs={6}>
                                      {alias}
                                    </Grid>
                                  ))}
                                </Grid>
                              </Collapse>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default IdentifiersList;
