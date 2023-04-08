import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { paths } from '../../shared/paths';
import { Button, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

interface BackButtonProps {
  navigateTo: string;
}

const BackButton = (props: BackButtonProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <Tooltip title={t('general.buttons.back')}>
      <Button
        variant="contained"
        onClick={() => navigate(props.navigateTo)}
        className="flex-button mb-4 me-2"
        sx={{ bottom: 0, padding: '10px 16px 10px 16px' }}>
        <KeyboardBackspaceIcon />
      </Button>
    </Tooltip>
  );
};

export default BackButton;
