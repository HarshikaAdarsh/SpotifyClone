import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  severity: '',
  msg: '',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      const { severity = '', msg = '' } = action.payload;

      return { isOpen: true, severity, msg };
    },
    closeSnackbar: () => {
      return initialState;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
