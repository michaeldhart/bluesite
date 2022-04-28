import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../../../../shared/src/js/models/Person';
import { PeopleApi } from '../api/peopleApi';
import { ContactsState } from './appState';

const initialContactsState: ContactsState = {
  contacts: [],
  selectedContact: undefined,
};

export const contactsStateAsyncActions = {
  addContact: createAsyncThunk('contacts/add', async (person: Person) => {
    return await PeopleApi.create(person);
  }),
  listContacts: createAsyncThunk('contacts/list', async () => {
    return await PeopleApi.list();
  }),
  updateContact: createAsyncThunk('contacts/update', async (person: Person) => {
    return await PeopleApi.update(person);
  }),
  deleteContact: createAsyncThunk('contacts/delete', async (guid: string) => {
    return await PeopleApi.delete(guid);
  }),
};

export const contactsStateSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    setSelectedContact: (state, action: PayloadAction<Person>) => {
      state.selectedContact = action.payload;
    },
    unsetSelectedContact: (state) => {
      state.selectedContact = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      contactsStateAsyncActions.addContact.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.contacts.push(action.payload);
        }
      }
    );

    builder.addCase(
      contactsStateAsyncActions.listContacts.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.contacts = action.payload;
        }
      }
    );

    builder.addCase(
      contactsStateAsyncActions.updateContact.fulfilled,
      (state, action) => {
        if (action.payload) {
          state.contacts = state.contacts.map((p) =>
            p.guid === action.payload?.guid ? action.payload : p
          );
        }
      }
    );

    builder.addCase(
      contactsStateAsyncActions.deleteContact.fulfilled,
      (state, action) => {
        state.contacts = state.contacts.filter(
          (p) => p.guid !== action.payload
        );
      }
    );
  },
});
