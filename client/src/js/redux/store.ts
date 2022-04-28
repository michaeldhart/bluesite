import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { blogStateSlice } from './blogStateSlice';
import { contactsStateSlice } from './contactsStateSlice';
import { contatctsUIStateSlice } from './contactsUIStateSlice';
import { globalUIStateSlice } from './globalUIStateSlice';
import { pagesStateSlice } from './pagesStateSlice';
import { appConfigStateSlice } from './appConfigStateSlice';

export const store = configureStore({
  reducer: {
    appConfigState: appConfigStateSlice.reducer,
    pagesState: pagesStateSlice.reducer,
    blogState: blogStateSlice.reducer,
    contactsState: contactsStateSlice.reducer,
    globalUIState: globalUIStateSlice.reducer,
    contactsUIState: contatctsUIStateSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
