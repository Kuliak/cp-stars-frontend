import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, TextField } from '@mui/material';
import {
  DEFAULT_RESET_DEC,
  DEFAULT_RESET_RA,
  DEFAULT_RESET_RADIUS,
  PAGING,
} from '../../shared/Constants';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../shared/paths';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'icrsRightAscension',
    numeric: true,
    disablePadding: false,
    label: 'ICRS RA',
  },
  {
    id: 'icrsDeclination',
    numeric: true,
    disablePadding: false,
    label: 'ICRS Dec',
  },
  {
    id: 'galacticLongitude',
    numeric: true,
    disablePadding: false,
    label: 'Gal. long.',
  },
  {
    id: 'galacticLatitude',
    numeric: true,
    disablePadding: false,
    label: 'Gal. lat.',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box
                  component="span"
                  sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div">
          {/*CP Stars*/}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const BasicInfoStarsTable = ({ originalRows }) => {
  const navigate = useNavigate();

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState(originalRows);

  const [searched, setSearched] = useState('');
  const [filterRA, setFilterRA] = useState(DEFAULT_RESET_RA);
  const [filterDec, setFilterDec] = useState(DEFAULT_RESET_DEC);
  const [filterRadius, setFilterRadius] = useState(DEFAULT_RESET_RADIUS);

  const resetFilter = () => {
    setSearched('');
    setFilterRA(DEFAULT_RESET_RA);
    setFilterDec(DEFAULT_RESET_DEC);
    setFilterRadius(DEFAULT_RESET_RADIUS);
    applyFilter('', DEFAULT_RESET_RA, DEFAULT_RESET_DEC, DEFAULT_RESET_RADIUS);
  };

  const applyFilter = (name, ra, dec, radius) => {
    let filteredRows = originalRows;
    console.log(`FILTER: ${name} ${ra} ${dec} ${radius}`);

    if (ra !== DEFAULT_RESET_RA && dec !== DEFAULT_RESET_DEC && radius !== DEFAULT_RESET_RADIUS) {
      filteredRows = filteredRows.filter((row) => {
        return (row.icrsRightAscension - ra) ** 2 + (row.icrsDeclination - dec) ** 2 < radius ** 2;
      });
    }

    filteredRows = filteredRows.filter((row) => {
      // console.log('    NAME: ', row.name);
      return row.name.toLowerCase().includes(name.toLowerCase());
    });

    setRows(filteredRows);
  };

  const updateName = (value) => {
    setSearched(value);
    applyFilter(value, filterRA, filterDec, filterRadius);
  };

  const updateRA = (value) => {
    setFilterRA(value);
    applyFilter(searched, value, filterDec, filterRadius);
  };

  const updateDec = (value) => {
    setFilterDec(value);
    applyFilter(searched, filterRA, value, filterRadius);
  };

  const updateRadius = (value) => {
    setFilterRadius(value);
    applyFilter(searched, filterRA, filterDec, value);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleCheckboxClick = (event, name) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <h1 className="mb-5">Chemically Peculiar Stars</h1>
      <>
        {rows && (
          <>
            <Box
              alignItems={'flex-end'}
              justifyContent={'flex-start'}
              display={'flex'}
              sx={{ marginBottom: '10px' }}>
              <Button
                variant="contained"
                endIcon={<ClearIcon />}
                onClick={resetFilter}
                sx={{ bottom: 0, marginRight: '10px', padding: '12px 16px 12px 16px' }}>
                <div>Reset</div>
              </Button>
              <TextField
                id="search-stars-input"
                label="Search"
                type="search"
                autoComplete="search-stars"
                variant="filled"
                value={searched}
                sx={{ marginRight: '25px' }}
                size={'small'}
                onChange={(searchVal) => updateName(searchVal.target.value)}
              />
              <TextField
                id="filter-stars-ra"
                label="RA"
                type="search"
                autoComplete="filter-stars-ra"
                variant="filled"
                value={filterRA === DEFAULT_RESET_RA ? '' : filterRA}
                sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
                size={'small'}
                onChange={(searchVal) => updateRA(searchVal.target.value)}
              />
              <TextField
                id="filter-stars-dec"
                label="Dec"
                type="search"
                autoComplete="filter-stars-dec"
                variant="filled"
                value={filterDec === DEFAULT_RESET_DEC ? '' : filterDec}
                sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
                size={'small'}
                onChange={(searchVal) => updateDec(searchVal.target.value)}
              />
              <TextField
                id="filter-stars-radius"
                label="Radius"
                type="search"
                autoComplete="filter-stars-radius"
                variant="filled"
                value={filterRadius === DEFAULT_RESET_RADIUS ? '' : filterRadius}
                sx={{ width: 80, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
                size={'small'}
                onChange={(searchVal) => updateRadius(searchVal.target.value)}
              />
            </Box>

            <Box
              alignItems={'flex-end'}
              justifyContent={'flex-start'}
              display={'flex'}>
              <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}>
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={() => navigate(`${paths.starDetails}/${row.id}`)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                              style={{ cursor: 'pointer' }}>
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    'aria-labelledby': labelId,
                                  }}
                                  onClick={(event) => handleCheckboxClick(event, row.id)}
                                />
                              </TableCell>
                              <TableCell align="left">{row.id}</TableCell>
                              <TableCell align="left">{row.name}</TableCell>
                              <TableCell align="left">{row.icrsRightAscension}</TableCell>
                              <TableCell align="left">{row.icrsDeclination}</TableCell>
                              <TableCell align="left">{row.galacticLongitude}</TableCell>
                              <TableCell align="left">{row.galacticLatitude}</TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={PAGING.DEFAULT}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </>
        )}
      </>
      <FormControlLabel
        control={
          <Switch
            checked={dense}
            onChange={handleChangeDense}
          />
        }
        label="Dense padding"
      />
    </Box>
  );
};

export default BasicInfoStarsTable;
