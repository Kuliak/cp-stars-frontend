import Paper from '@mui/material/Paper';
import { Button, Collapse, Grid, TextField } from '@mui/material';
import { Key, useCallback, useEffect, useState } from 'react';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../../services/DataUtils';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';

interface IdentifiersListProps {
  identifiers: string[];
}

const IdentifiersList = (props: IdentifiersListProps) => {
  const { t } = useTranslation();
  const [externalOpen, setExternalOpen] = useState(false);

  const [filteredIdentifiers, setFilteredIdentifiers] = useState<String[]>(props.identifiers);

  const [searched, setSearched] = useState('');
  const debouncedSearchTerm = useDebounce(searched, 200);

  const resetFilter = () => {
    setSearched('');
    applyFilter('');
  };

  const applyFilter = useCallback(
    (identifierFilter: string | undefined) => {
      let filtered = props.identifiers;

      if (identifierFilter && identifierFilter.length !== 0) {
        filtered = filtered.filter((identifier) => {
          return identifier && identifier.toLowerCase().includes(identifierFilter.toLowerCase());
        });
      }

      setFilteredIdentifiers(filtered);
    },
    [props.identifiers]
  );

  useEffect(() => {
    applyFilter(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <Paper>
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

      <Paper className={externalOpen ? 'p-3' : '0'}>
        <Collapse
          in={externalOpen}
          timeout="auto"
          unmountOnExit>
          <Box
            alignItems={'flex-end'}
            justifyContent={'flex-start'}
            display={'flex'}
            sx={{ marginBottom: '15px' }}>
            <Button
              variant="contained"
              endIcon={<ClearIcon />}
              onClick={resetFilter}
              className="flex-button"
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
          </Box>
          <Grid
            container
            direction="row"
            spacing={3}
            rowSpacing={1}>
            {filteredIdentifiers.map((identifier) => (
              <Grid
                key={identifier as Key}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}>
                {identifier}
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Paper>
    </Paper>
  );
};

export default IdentifiersList;
