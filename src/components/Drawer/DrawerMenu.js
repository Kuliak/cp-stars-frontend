import { IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles';
import { AppBar, Drawer, DrawerHeader } from './DrawerMenuStyles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { MenuOption } from './MenuOption';
import { paths } from '../../shared/paths';
import Content from '../Content';

const drawerWidth = 200;

const DrawerMenu = () => {
  const { t } = useTranslation();
  const menuOptions = [
    {
      id: 0,
      text: t('drawer.home'),
      icon: <HomeIcon />,
      routerPath: paths.home,
    },
    { id: 1, text: t('drawer.about'), icon: <InfoIcon />, routerPath: paths.about },
    {
      id: 2,
      text: t('drawer.manual'),
      icon: <MenuBookIcon />,
      routerPath: paths.manual,
    },
  ];

  const isSmallScreen = useMediaQuery('(max-width: 360px)');

  const theme = useTheme();
  theme.drawerWidth = isSmallScreen ? '100%' : drawerWidth;
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={isDrawerOpen}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(isDrawerOpen && { display: 'none' }),
              }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div">
              {t('project.title')}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={isDrawerOpen}>
          <DrawerHeader>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ color: 'white' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menuOptions.map((option) => (
              <MenuOption
                key={option.id}
                isDrawerOpen={isDrawerOpen}
                text={option.text}
                icon={option.icon}
                path={option.routerPath}
              />
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, padding: 0 }}>
          <DrawerHeader />
          <Content />
        </Box>
      </Box>
    </>
  );
};

export default DrawerMenu;
