import { createSlice } from '@reduxjs/toolkit';
import { Languages } from '../enums/languages';
import { GlobalUIState } from './appState';

const initialGlobalUiState: GlobalUIState = {
  language: Languages.EN,
};

export const globalUIStateSlice = createSlice({
  name: 'globalUI',
  initialState: initialGlobalUiState,
  reducers: {
    toggleLanguage: (state) => {
      state.language =
        state.language === Languages.EN ? Languages.ES : Languages.EN;
    },
  },
});
