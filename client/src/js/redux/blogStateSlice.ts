import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Languages } from '../../../../shared/src/js/enums/languages';
import { BlogApi } from '../api/blogApi';
import { BlogState } from './appState';

interface GetBlogPayload {
  lang: Languages;
  name: string;
}

const initialBlogState: BlogState = {
  blogs: [],
};

export const blogStateAsyncActions = {
  getBlog: createAsyncThunk('blog/get', async (payload: GetBlogPayload) => {
    const { lang, name } = payload;
    return await BlogApi.getBlog(lang, name);
  }),
};

export const blogStateSlice = createSlice({
  name: 'blog',
  initialState: initialBlogState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      blogStateAsyncActions.getBlog.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.blogs = state.blogs.filter(
            (b) => b.name !== action.payload?.name
          );
          state.blogs.push(action.payload);
        }
      }
    );
  },
});
