import { Delete, Edit } from '@mui/icons-material';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect } from 'react';
import { Person } from '../../../../shared/src/js/models/Person';
import {
  contactsStateSlice,
  contactsStateAsyncActions,
} from '../redux/contactsStateSlice';
import { contatctsUIStateSlice } from '../redux/contactsUIStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const ContactsTable = () => {
  const contacts = useAppSelector((state) => state.contactsState.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(contactsStateAsyncActions.listContacts());
  }, []);

  const handleDeleteContact = (contact: Person) => {
    dispatch(contactsStateAsyncActions.deleteContact(contact.guid));
  };

  const handleSelectContact = (contact: Person) => {
    dispatch(contactsStateSlice.actions.setSelectedContact(contact));
    dispatch(contatctsUIStateSlice.actions.openAddEditContactDialog());
  };

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell colSpan={2}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((c, i) => (
            <TableRow key={`${c.fullName}-${i}`} hover>
              <TableCell>{c.fullName}</TableCell>
              <TableCell>{c.address[0]?.address1}</TableCell>
              <TableCell>{c.address[0]?.city}</TableCell>
              <TableCell>{c.address[0]?.state}</TableCell>
              <TableCell>{c.address[0]?.zip}</TableCell>
              <TableCell>{c.phone[0]?.number}</TableCell>
              <TableCell>{c.email[0]}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleSelectContact(c)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeleteContact(c)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
