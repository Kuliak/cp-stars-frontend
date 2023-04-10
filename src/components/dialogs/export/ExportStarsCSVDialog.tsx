import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ApiCaller from '../../../services/ApiCaller';

interface ExportStarsCSVDialogProps {
  starIds: readonly number[];
  isOpen: boolean;
  onClose: () => void;
}

const ExportStarsCSVDialog = (props: ExportStarsCSVDialogProps) => {
  const { t } = useTranslation();

  const [isDialogOpen, setDialogOpen] = useState(props.isOpen);
  const [emptyValueRepresentation, setEmptyValueRepresentation] = useState('null');
  const [emptyValueRepresentationError, setEmptyValueRepresentationError] = useState(false);
  const [exportAttributes, setExportAttributes] = useState(true);
  const [exportIdentifiers, setExportIdentifiers] = useState(true);
  const [exportMagnitudes, setExportMagnitudes] = useState(true);
  const [exportMotions, setExportMotions] = useState(true);
  const [exportRadialVelocities, setExportRadialVelocities] = useState(true);

  const handleClose = () => {
    setDialogOpen(false);
    props.onClose();
  };

  const handleExport = () => {
    ApiCaller.exportController
      .downloadStarsCSVRaw({
        ExportCsvForm: {
          starIdsToExport: JSON.parse(JSON.stringify(props.starIds)),
          emptyValueRepresentation: emptyValueRepresentation,
          exportAttributes: exportAttributes,
          exportIdentifiers: exportIdentifiers,
          exportMagnitudes: exportMagnitudes,
          exportMotions: exportMotions,
          exportRadialVelocities: exportRadialVelocities,
        },
      })
      .then((file) => {
        file.raw.blob().then((blob) => {
          let url = URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.setAttribute('download', 'stars.csv');
          a.click();
          // URL.revokeObjectURL(url);
        });
      });
  };

  const handleChangeEmptyValueRepresentation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === ';') {
      setEmptyValueRepresentationError(true);
    } else {
      setEmptyValueRepresentationError(false);
      setEmptyValueRepresentation(event.target.value);
    }
  };

  const handleChangeExportAttributes = () => {
    setExportAttributes(!exportAttributes);
  };

  const handleChangeExportIdentifiers = () => {
    setExportIdentifiers(!exportIdentifiers);
  };

  const handleChangeExportMagnitudes = () => {
    setExportMagnitudes(!exportMagnitudes);
  };

  const handleChangeExportMotions = () => {
    setExportMotions(!exportMotions);
  };

  const handleChangeExportRadialVelocities = () => {
    setExportRadialVelocities(!exportRadialVelocities);
  };

  useEffect(() => {}, [props.isOpen, isDialogOpen]);

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}>
      <DialogTitle>{t('dialogs.export.stars.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <b>{props.starIds.length}</b> {t('dialogs.export.stars.info')}
        </DialogContentText>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={exportAttributes}
                onChange={handleChangeExportAttributes}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={t('dialogs.export.stars.attributes')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={exportIdentifiers}
                onChange={handleChangeExportIdentifiers}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={t('dialogs.export.stars.identifiers')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={exportMagnitudes}
                onChange={handleChangeExportMagnitudes}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={t('dialogs.export.stars.magnitudes')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={exportMotions}
                onChange={handleChangeExportMotions}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={t('dialogs.export.stars.motions')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={exportRadialVelocities}
                onChange={handleChangeExportRadialVelocities}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={t('dialogs.export.stars.radial_velocities')}
          />
          <TextField
            className={'mt-4'}
            error={emptyValueRepresentationError}
            variant="outlined"
            defaultValue={'null'}
            onChange={(changeEvent) => handleChangeEmptyValueRepresentation(changeEvent)}
            inputProps={{ 'aria-label': 'controlled' }}
            helperText={'Cannot be same as delimiter'}
            label={t('dialogs.export.stars.empty_value_representation')}
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('dialogs.export.stars.buttons.cancel')}</Button>
        <Button
          variant={'contained'}
          onClick={handleExport}>
          {t('dialogs.export.stars.buttons.export')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportStarsCSVDialog;
