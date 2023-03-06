import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { CircularProgress, Collapse, Grid, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Key, useEffect, useState } from 'react';
import React from 'react';
import { ExternalServicesControllerApi, Identifiers } from '../../libs/cpstars/openapi';

interface IdentifiersListProps {
  id2009AANDA498961R: string | undefined;
  identifiers: Identifiers | undefined;
}

const IdentifiersList = (props: IdentifiersListProps) => {
  const { t } = useTranslation();

  const [externalServicesController] = useState(() => new ExternalServicesControllerApi());

  const [open, setOpen] = useState(false);
  const [externalOpen, setExternalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [externalAliases, setExternalAliases] = useState<String[]>([]);

  useEffect(() => {
    let name;
    if (props.id2009AANDA498961R) {
      name = 'Renson' + props.id2009AANDA498961R;
    } else if (props.identifiers) {
      if (props.identifiers.hd) {
        name = 'HD' + props.identifiers.hd;
      } else if (props.identifiers.hip) {
        name = 'HIP' + props.identifiers.hip;
      } else if (props.identifiers.tyc) {
        name = 'TYC' + props.identifiers.tyc;
      } else if (props.identifiers.gaiaDR2) {
        name = 'Gaia DR2' + props.identifiers.gaiaDR2;
      } else if (props.identifiers.gaiaDR3) {
        name = 'Gaia DR3' + props.identifiers.gaiaDR3;
      }
    }

    if (!name) {
      setLoading(false);
      return;
    }

    externalServicesController.getIdentifiers({ name: name }).then((data) => {
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
                    {props.identifiers && (
                      <>
                        <Grid item>
                          <b>HD:</b> {props.identifiers.hd}
                        </Grid>
                        <Grid item>
                          <b>HIP:</b> {props.identifiers.hip}
                        </Grid>
                        <Grid item>
                          <b>TYC:</b> {props.identifiers.tyc}
                        </Grid>
                        <Grid item>
                          <b>DR2:</b> {props.identifiers.gaiaDR2}
                        </Grid>
                        <Grid item>
                          <b>DR3:</b> {props.identifiers.gaiaDR3}
                        </Grid>
                      </>
                    )}
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
                                      key={alias as Key}
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
