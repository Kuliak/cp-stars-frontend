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

export default function PersistentDrawerLeft() {
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
          <Typography
            variant="h6"
            noWrap
            component="div">
            Persistent drawer
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

// import { IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
// import React, { useState } from 'react';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { styled, useTheme } from '@mui/material/styles';
// import { AppBar, Drawer, DrawerHeader, AppBarProps as MuiAppBarProps } from './DrawerMenuStyles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import Box from '@mui/material/Box';
// import { useTranslation } from 'react-i18next';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import { MenuOption } from './MenuOption';
// import { paths } from '../../shared/paths';
// import Content from '../Content';
// import MuiAppBar from '@mui/material/AppBar';
// import MuiDrawer from '@mui/material/Drawer';
//
// const drawerWidth = 200;
//
// export interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }
//
// export const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   background: '#303234',
//   overflowX: 'hidden',
// });
//
// export const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   background: '#303234',
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });
//
// export const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1, // move appbar in front of drawer
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   backgroundColor: '#000000',
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
//
// export const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));
//
// export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   })
// );
//
// const DrawerMenu = () => {
//   const { t } = useTranslation();
//   const menuOptions = [
//     {
//       id: 0,
//       text: t('drawer.home'),
//       icon: <HomeIcon />,
//       routerPath: paths.home,
//     },
//     { id: 1, text: t('drawer.about'), icon: <InfoIcon />, routerPath: paths.about },
//     {
//       id: 2,
//       text: t('drawer.manual'),
//       icon: <MenuBookIcon />,
//       routerPath: paths.manual,
//     },
//   ];
//
//   const isSmallScreen = useMediaQuery('(max-width: 360px)');
//
//   const theme = useTheme();
//   theme.drawerWidth = isSmallScreen ? '100%' : drawerWidth;
//   const [isDrawerOpen, setDrawerOpen] = useState(true);
//
//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };
//
//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };
//
//   return (
//     <>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           open={isDrawerOpen}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{
//                 marginRight: 5,
//                 ...(isDrawerOpen && { display: 'none' }),
//               }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div">
//               {t('project.title')}
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           open={isDrawerOpen}>
//           <DrawerHeader>
//             <IconButton
//               onClick={handleDrawerClose}
//               sx={{ color: 'white' }}>
//               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//             </IconButton>
//           </DrawerHeader>
//           <Divider />
//           <List>
//             {menuOptions.map((option) => (
//               <MenuOption
//                 key={option.id}
//                 isDrawerOpen={isDrawerOpen}
//                 text={option.text}
//                 icon={option.icon}
//                 path={option.routerPath}
//               />
//             ))}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, p: 3, padding: 0 }}>
//           <DrawerHeader />
//           <Content />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default DrawerMenu;
