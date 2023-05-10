import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Content from '../Content';
import { AppBar, DrawerCustom, DrawerHeader, Main } from './DrawerMenuStyles';
import { MenuOptions } from './MenuOptions';
import { useTranslation } from 'react-i18next';

export default function PersistentDrawerLeft() {
  const { t } = useTranslation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <div className={'float-right'}>
            <img
              className={'float-right'}
              src={require('../../assets/img/e-infra-cz-logo2-small.png')}
            />
          </div>
          <Typography
            className="ms-4"
            variant="h6"
            noWrap
            component="div">
            {t('project.title')}
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerCustom
        variant="permanent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: 'white' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuOptions open={open} />
      </DrawerCustom>
      <Main open={open}>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, padding: 0 }}>
          <DrawerHeader />
          <Content />
        </Box>
      </Main>
    </Box>
  );
}
