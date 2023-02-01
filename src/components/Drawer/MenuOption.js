import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';

export const MenuOption = ({ isDrawerOpen, text, icon, path }) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItem
        key={text}
        disablePadding
        sx={{ display: 'block' }}
        onClick={() => navigate(path)}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isDrawerOpen ? 'initial' : 'center',
            px: 2.5,
          }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isDrawerOpen ? 3 : 'auto',
              justifyContent: 'center',
              color: 'white',
            }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={{ opacity: isDrawerOpen ? 1 : 0, color: 'white' }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
};
