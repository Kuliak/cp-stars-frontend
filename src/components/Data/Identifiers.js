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

const Identifiers = ({ identifiers, objectName }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [externalOpen, setExternalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [externalAliases, setExternalAliases] = useState([]);

  useEffect(() => {
    let name;
    if (objectName) {
      name = objectName;
    } else if (identifiers.dm) {
      name = identifiers.dm;
    } else if (identifiers.hd) {
      name = identifiers.hd;
    } else if (identifiers.hip) {
      name = identifiers.hip;
    } else if (identifiers.tyc) {
      name = identifiers.tyc;
    }

    getAllAliases(name).then((data) => {
      setExternalAliases(data);
      setLoading(false);
    });
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

export default Identifiers;
