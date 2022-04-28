import { createSlice } from '@reduxjs/toolkit';
import { ContactsUIState } from './appState';

const initialContactsUiState: ContactsUIState = {
  addEditContactDialogState: false,
};

export const contatctsUIStateSlice = createSlice({
  name: 'contactsUI',
  initialState: initialContactsUiState,
  reducers: {
    toggleAddEditContactDialog: (state) => {
      state.addEditContactDialogState = !state.addEditContactDialogState;
    },
    openAddEditContactDialog: (state) => {
      state.addEditContactDialogState = true;
    },
    closeAddEditContactDialog: (state) => {
      state.addEditContactDialogState = false;
    },
  },
});
