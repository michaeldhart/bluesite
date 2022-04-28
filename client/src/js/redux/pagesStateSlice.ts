import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Languages } from '../../../../shared/src/js/enums/languages';
import { PagesApi } from '../api/pagesApi';
import { PagesState } from './appState';

interface GetPagePayload {
  lang: Languages;
  name: string;
}

const initialPagesState: PagesState = {
  pages: [],
};

export const pagesStateAsyncActions = {
  getPage: createAsyncThunk('page/get', async (payload: GetPagePayload) => {
    const { lang, name } = payload;
    return await PagesApi.getPage(lang, name);
  }),
};

export const pagesStateSlice = createSlice({
  name: 'pages',
  initialState: initialPagesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      pagesStateAsyncActions.getPage.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.pages = state.pages.filter(
            (p) => p.name !== action.payload?.name
          );
          state.pages.push(action.payload);
        }
      }
    );
  },
});
