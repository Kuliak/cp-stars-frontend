import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';
import React, { ReactNode } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { paths } from '../../shared/paths';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useTranslation } from 'react-i18next';

interface MenuOptionsProps {
  open: boolean;
}

interface MenuOptionProps {
  isDrawerOpen: boolean;
  text: string;
  icon: ReactNode;
  path: string;
}

const MenuOption = (props: MenuOptionProps) => {
  const navigate = useNavigate();

  return (
    <ListItem
      key={props.text}
      disablePadding
      sx={{ display: 'block' }}
      onClick={() => navigate(props.path)}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: props.isDrawerOpen ? 'initial' : 'center',
          px: 2.5,
        }}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: props.isDrawerOpen ? 3 : 'auto',
            justifyContent: 'center',
            color: 'white',
          }}>
          {props.icon}
        </ListItemIcon>
        <ListItemText
          primary={props.text}
          sx={{ opacity: props.isDrawerOpen ? 1 : 0, color: 'white' }}
        />
      </ListItemButton>
    </ListItem>
  );
};

const MenuOptions = (props: MenuOptionsProps) => {
  const { t } = useTranslation();

  const menuOptions = [
    {
      id: 0,
      text: t('drawer.home'),
      icon: <HomeIcon />,
      routerPath: paths.home,
    },
    { id: 1, text: t('drawer.about'), icon: <InfoIcon />, routerPath: paths.about.general },
    {
      id: 2,
      text: t('drawer.manual'),
      icon: <MenuBookIcon />,
      routerPath: paths.manual,
    },
  ];

  return (
    <>
      {menuOptions.map((option) => (
        <MenuOption
          key={option.id}
          isDrawerOpen={props.open}
          text={option.text}
          icon={option.icon}
          path={option.routerPath}
        />
      ))}
    </>
  );
};

export { MenuOptions };
