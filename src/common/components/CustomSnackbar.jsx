import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { closeSnackbar } from '@/reducers/snackbar';

function CustomSnackbar() {
  const dispatch = useDispatch();
  const { isOpen, severity, msg } = useSelector(({ snackbar }) => snackbar);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      sx={{ width: '30%' }}
    >
      <Alert onClose={handleClose} severity={severity || 'info'}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
