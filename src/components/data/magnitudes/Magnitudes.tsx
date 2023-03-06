import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Magnitude } from '../../../libs/cpstars/openapi';
import { useEffect, useState } from 'react';
import MagnitudesPanel from './magnitudesPanel';
import IconButton from '@mui/material/IconButton';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { Collapse } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface MagnitudesProps {
  magnitudes: Magnitude[];
}

export default function Magnitudes(props: MagnitudesProps) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const [tabs] = useState<{ index: number; name: string; magnitudes: Magnitude[] }[]>([]);

  useEffect(() => {
    const all_datasources = [
      { displayName: '2MASS', datasourceName: '2MASS' },
      { displayName: 'APASS', datasourceName: 'APASS' },
      { displayName: '2005A&A...441..631P', datasourceName: '2005A&A...441..631P' },
      { displayName: 'Gaia DR2', datasourceName: 'GaiaDr2' },
      { displayName: 'Gaia DR3', datasourceName: 'GaiaDr3' },
      { displayName: 'Hipparcos', datasourceName: 'Hipparcos' },
      { displayName: 'Johnson UBV', datasourceName: 'Johnson' },
      { displayName: 'Stroemgren', datasourceName: 'Stroemgren' },
    ];

    let index = 0;

    all_datasources.forEach((datasource) => {
      const datasourceMagnitudes = props.magnitudes.filter((magnitude) => {
        return magnitude.datasource.name === datasource.datasourceName;
      });

      if (datasourceMagnitudes.length !== 0) {
        tabs.push({
          index: index++,
          name: datasource.displayName,
          magnitudes: datasourceMagnitudes,
        });
      }
    });
  }, [props.magnitudes, tabs]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Magnitudes tabs">
                {tabs.map(({ index, name }) => {
                  return (
                    <Tab
                      key={name}
                      label={name}
                      {...a11yProps(index)}
                    />
                  );
                })}
              </Tabs>
            </Box>
            {tabs.map(({ index, name, magnitudes }) => (
              <TabPanel
                key={name}
                value={value}
                index={index}>
                <MagnitudesPanel magnitudes={magnitudes} />
              </TabPanel>
            ))}
          </Box>
        </Collapse>
      </TableContainer>
    </>
  );
}
