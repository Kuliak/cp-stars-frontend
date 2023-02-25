import * as React from 'react';
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
import StarBasicInfo from '../../shared/interfaces/StarBasicInfo';
import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_RESET_DEC, DEFAULT_RESET_RA, DEFAULT_RESET_RADIUS } from '../../shared/Constants';
import { paths } from '../../shared/paths';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { pointsDistance } from '../../services/MathUtils';
import { getComparator, Order, stableSort, useDebounce } from '../../services/DataUtils';

interface HeadCell {
  id: keyof StarBasicInfo;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    label: 'Id',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'icrsRightAscension',
    label: 'ICRS RA',
  },
  {
    id: 'icrsDeclination',
    label: 'ICRS Dec',
  },
  {
    id: 'galacticLongitude',
    label: 'Gal. long.',
  },
  {
    id: 'galacticLatitude',
    label: 'Gal. lat.',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof StarBasicInfo) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof StarBasicInfo) => (event: React.MouseEvent<unknown>) => {
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
            padding="normal"
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

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
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
          CP Stars
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

interface BasicInfoStarsTableProps {
  originalRows: StarBasicInfo[];
}

export default function BasicInfoStarsTable(props: BasicInfoStarsTableProps) {
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof StarBasicInfo>('id');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rows, setRows] = useState<StarBasicInfo[]>(props.originalRows);

  const [searched, setSearched] = useState('');
  const [filterRA, setFilterRA] = useState(DEFAULT_RESET_RA);
  const [filterDec, setFilterDec] = useState(DEFAULT_RESET_DEC);
  const [filterRadius, setFilterRadius] = useState(DEFAULT_RESET_RADIUS);

  const debouncedSearchTerm = useDebounce(searched, 200);
  const debouncedRATerm = useDebounce(filterRA, 200);
  const debouncedDecTerm = useDebounce(filterDec, 200);
  const debouncedRadiusTerm = useDebounce(filterRadius, 200);

  const resetFilter = () => {
    setSearched('');
    setFilterRA(DEFAULT_RESET_RA);
    setFilterDec(DEFAULT_RESET_DEC);
    setFilterRadius(DEFAULT_RESET_RADIUS);
    applyFilter('', DEFAULT_RESET_RA, DEFAULT_RESET_DEC, DEFAULT_RESET_RADIUS);
  };

  const applyFilter = useCallback(
    (name: string, ra: string, dec: string, radius: string) => {
      let filteredRows = props.originalRows;

      if (ra !== DEFAULT_RESET_RA && dec !== DEFAULT_RESET_DEC && radius !== DEFAULT_RESET_RADIUS) {
        filteredRows = filteredRows.filter((row) => {
          return (
            pointsDistance(row.icrsRightAscension, row.icrsDeclination, ra, dec) < Number(radius)
          );
        });
      }

      filteredRows = filteredRows.filter((row) => {
        return row.name.toLowerCase().includes(name.toLowerCase());
      });

      setRows(filteredRows);
    },
    [props.originalRows]
  );

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof StarBasicInfo) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleCheckboxClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    applyFilter(debouncedSearchTerm, debouncedRATerm, debouncedDecTerm, debouncedRadiusTerm);
  }, [debouncedSearchTerm, debouncedRadiusTerm, debouncedDecTerm, debouncedRATerm, applyFilter]);

  return (
    <Box sx={{ width: '100%' }}>
      <h1 className="mb-5">Chemically Peculiar Stars</h1>
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
              label="Search"
              type="search"
              autoComplete="search-stars"
              variant="filled"
              value={searched}
              sx={{ marginRight: '25px' }}
              size={'small'}
              onChange={(searchVal) => setSearched(searchVal.target.value)}
            />
            <TextField
              label="RA"
              type="number"
              autoComplete="filter-stars-ra"
              variant="filled"
              value={filterRA === DEFAULT_RESET_RA ? '' : filterRA}
              sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
              size={'small'}
              onChange={(searchVal) => setFilterRA(searchVal.target.value)}
            />
            <TextField
              label="Dec"
              type="number"
              autoComplete="filter-stars-dec"
              variant="filled"
              value={filterDec === DEFAULT_RESET_DEC ? '' : String(filterDec)}
              sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
              size={'small'}
              onChange={(searchVal) => setFilterDec(searchVal.target.value)}
            />
            <TextField
              label="Radius"
              type="number"
              autoComplete="filter-stars-radius"
              variant="filled"
              value={filterRadius === DEFAULT_RESET_RADIUS ? '' : filterRadius}
              sx={{ width: 80, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
              size={'small'}
              onChange={(searchVal) => setFilterRadius(searchVal.target.value)}
            />
          </Box>
          <Box>
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
                                onClick={(event) => handleCheckboxClick(event, row.id)}
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
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
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
}

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: string | number | symbol) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }
//
// function EnhancedTableHead(props: EnhancedTableProps) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler =
//     (property: string | number | symbol) => (event: React.MouseEvent<unknown, MouseEvent>) => {
//       onRequestSort(event, property);
//     };
//
//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align="left"
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}>
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}>
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box
//                   component="span"
//                   sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }
//
// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };
//
// function EnhancedTableToolbar(props: { numSelected: any }) {
//   const { numSelected } = props;
//
//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}>
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div">
//           {/*CP Stars*/}
//         </Typography>
//       )}
//
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }
//
// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };
//
// interface BasicInfoStarsTableProps {
//   originalRows: StarBasicInfo[];
// }
//
// const BasicInfoStarsTable = (props: BasicInfoStarsTableProps) => {

//
//   const handleRequestSort = (event: MouseEvent<unknown>, property: keyof StarBasicInfo) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };
//
//   const handleSelectAllClick = (event: { target: { checked: any } }) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };
//
//   const handleCheckboxClick = (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     name: number
//   ) => {
//     event.stopPropagation();
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: number[] = [];
//
//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }
//
//     setSelected(newSelected);
//   };
//
//   const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
//     setPage(newPage);
//   };
//
//   const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//
//   const handleChangeDense = (event: {
//     target: { checked: boolean | ((prevState: boolean) => boolean) };
//   }) => {
//     setDense(event.target.checked);
//   };
//
//   const isSelected = (name: number) => selected.indexOf(name) !== -1;
//
//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
//
//   return (
//     <Box sx={{ width: '100%' }}>
//       <h1 className="mb-5">Chemically Peculiar Stars</h1>
//       <>
//         {rows && (
//           <>
//             <Box
//               alignItems={'flex-end'}
//               justifyContent={'flex-start'}
//               display={'flex'}
//               sx={{ marginBottom: '10px' }}>
//               <Button
//                 variant="contained"
//                 endIcon={<ClearIcon />}
//                 onClick={resetFilter}
//                 sx={{ bottom: 0, marginRight: '10px', padding: '12px 16px 12px 16px' }}>
//                 <div>Reset</div>
//               </Button>
//               <TextField
//                 id="search-stars-input"
//                 label="Search"
//                 type="search"
//                 autoComplete="search-stars"
//                 variant="filled"
//                 value={searched}
//                 sx={{ marginRight: '25px' }}
//                 size={'small'}
//                 onChange={(searchVal) => updateName(searchVal.target.value)}
//               />
//               <TextField
//                 id="filter-stars-ra"
//                 label="RA"
//                 type="search"
//                 autoComplete="filter-stars-ra"
//                 variant="filled"
//                 value={filterRA === DEFAULT_RESET_RA ? '' : filterRA}
//                 sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
//                 size={'small'}
//                 onChange={(searchVal) => updateRA(Number(searchVal.target.value))}
//               />
//               <TextField
//                 id="filter-stars-dec"
//                 label="Dec"
//                 type="search"
//                 autoComplete="filter-stars-dec"
//                 variant="filled"
//                 value={filterDec === DEFAULT_RESET_DEC ? '' : filterDec}
//                 sx={{ width: 100, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
//                 size={'small'}
//                 onChange={(searchVal) => updateDec(Number(searchVal.target.value))}
//               />
//               <TextField
//                 id="filter-stars-radius"
//                 label="Radius"
//                 type="search"
//                 autoComplete="filter-stars-radius"
//                 variant="filled"
//                 value={filterRadius === DEFAULT_RESET_RADIUS ? '' : filterRadius}
//                 sx={{ width: 80, padding: '25px 0px 0px 25 px', marginRight: '10px' }}
//                 size={'small'}
//                 onChange={(searchVal) => updateRadius(Number(searchVal.target.value))}
//               />
//             </Box>
//
//             <Box
//               alignItems={'flex-end'}
//               justifyContent={'flex-start'}
//               display={'flex'}>
//               <Paper sx={{ width: '100%', mb: 2 }}>
//                 <EnhancedTableToolbar numSelected={selected.length} />
//                 <TableContainer>
//                   <Table
//                     sx={{ minWidth: 750 }}
//                     aria-labelledby="tableTitle"
//                     size={dense ? 'small' : 'medium'}>
//                     <EnhancedTableHead
//                       numSelected={selected.length}
//                       order={order}
//                       orderBy={orderBy}
//                       onSelectAllClick={handleSelectAllClick}
//                       onRequestSort={handleRequestSort}
//                       rowCount={rows.length}
//                     />
//                     <TableBody>
//                       {stableSort(rows, getComparator(order, orderBy))
//                         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                         .map((row, index) => {
//                           const isItemSelected = isSelected(row.id as number);
//                           const labelId = `enhanced-table-checkbox-${index}`;
//
//                           return (
//                             <TableRow
//                               hover
//                               onClick={() => navigate(`${paths.starDetails}/${row.id}`)}
//                               role="checkbox"
//                               aria-checked={isItemSelected}
//                               tabIndex={-1}
//                               key={row.id}
//                               selected={isItemSelected}
//                               style={{ cursor: 'pointer' }}>
//                               <TableCell padding="checkbox">
//                                 <Checkbox
//                                   color="primary"
//                                   checked={isItemSelected}
//                                   inputProps={{
//                                     'aria-labelledby': labelId,
//                                   }}
//                                   onClick={(event) => handleCheckboxClick(event, row.id)}
//                                 />
//                               </TableCell>
//                               <TableCell align="left">{row.id}</TableCell>
//                               <TableCell align="left">{row.name}</TableCell>
//                               <TableCell align="left">{row.icrsRightAscension}</TableCell>
//                               <TableCell align="left">{row.icrsDeclination}</TableCell>
//                               <TableCell align="left">{row.galacticLongitude}</TableCell>
//                               <TableCell align="left">{row.galacticLatitude}</TableCell>
//                             </TableRow>
//                           );
//                         })}
//                       {emptyRows > 0 && (
//                         <TableRow
//                           style={{
//                             height: (dense ? 33 : 53) * emptyRows,
//                           }}>
//                           <TableCell colSpan={6} />
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <TablePagination
//                   rowsPerPageOptions={PAGING.DEFAULT}
//                   component="div"
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//               </Paper>
//             </Box>
//           </>
//         )}
//       </>
//       <FormControlLabel
//         control={
//           <Switch
//             checked={dense}
//             onChange={handleChangeDense}
//           />
//         }
//         label="Dense padding"
//       />
//     </Box>
//   );
// };
//
// export default BasicInfoStarsTable;
