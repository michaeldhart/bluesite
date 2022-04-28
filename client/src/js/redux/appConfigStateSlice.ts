import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppConfigApi } from '../api/configApi';
import { AppConfigState } from './appState';

const initialAppConfigState: AppConfigState = {
  appConfig: {
    appName: '',
    appSubtitle: '',
  },
};

export const appConfigStateAsyncActions = {
  getAppConfig: createAsyncThunk('appConfig/get', async () => {
    return await AppConfigApi.get();
  }),
};

export const appConfigStateSlice = createSlice({
  name: 'appConfig',
  initialState: initialAppConfigState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      appConfigStateAsyncActions.getAppConfig.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.appConfig = action.payload;
        }
      }
    );
  },
});
