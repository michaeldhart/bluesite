import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
  TextField,
  Autocomplete,
} from '@mui/material';
import { useFormik } from 'formik';
import {
  contactsStateAsyncActions,
  contactsStateSlice,
} from '../redux/contactsStateSlice';
import { contatctsUIStateSlice } from '../redux/contactsUIStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

const states = [
  { name: 'AL' },
  { name: 'AK' },
  { name: 'AS' },
  { name: 'AZ' },
  { name: 'AR' },
  { name: 'CA' },
  { name: 'CO' },
  { name: 'CT' },
  { name: 'DE' },
  { name: 'DC' },
  { name: 'FM' },
  { name: 'FL' },
  { name: 'GA' },
  { name: 'GU' },
  { name: 'HI' },
  { name: 'ID' },
  { name: 'IL' },
  { name: 'IN' },
  { name: 'IA' },
  { name: 'KS' },
  { name: 'KY' },
  { name: 'LA' },
  { name: 'ME' },
  { name: 'MH' },
  { name: 'MD' },
  { name: 'MA' },
  { name: 'MI' },
  { name: 'MN' },
  { name: 'MS' },
  { name: 'MO' },
  { name: 'MT' },
  { name: 'NE' },
  { name: 'NV' },
  { name: 'NH' },
  { name: 'NJ' },
  { name: 'NM' },
  { name: 'NY' },
  { name: 'NC' },
  { name: 'ND' },
  { name: 'MP' },
  { name: 'OH' },
  { name: 'OK' },
  { name: 'OR' },
  { name: 'PW' },
  { name: 'PA' },
  { name: 'PR' },
  { name: 'RI' },
  { name: 'SC' },
  { name: 'SD' },
  { name: 'TN' },
  { name: 'TX' },
  { name: 'UT' },
  { name: 'VT' },
  { name: 'VI' },
  { name: 'VA' },
  { name: 'WA' },
  { name: 'WV' },
  { name: 'WI' },
  { name: 'WY' },
];

export const AddEditContactDialog = () => {
  const dispatch = useAppDispatch();
  const addEditContactModalState = useAppSelector(
    (state) => state.contactsUIState.addEditContactDialogState
  );
  const selectedContactState = useAppSelector(
    (state) => state.contactsState.selectedContact
  );
  const handleCloseDialog = () => {
    dispatch(contactsStateSlice.actions.unsetSelectedContact());
    dispatch(contatctsUIStateSlice.actions.closeAddEditContactDialog());
  };
  const initialValues = selectedContactState
    ? {
        fullName: selectedContactState.fullName,
        preferredName: selectedContactState.preferredName,
        address1: selectedContactState.address[0].address1,
        address2: selectedContactState.address[0].address2,
        city: selectedContactState.address[0].city,
        state: selectedContactState.address[0].state,
        zip: selectedContactState.address[0].zip,
        phone: selectedContactState.phone[0].number.toString(),
        email: selectedContactState.email[0],
      }
    : {
        fullName: '',
        preferredName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
      };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      const {
        fullName,
        preferredName,
        address1,
        address2,
        city,
        state,
        zip,
        phone,
        email,
      } = values;
      const newContact = {
        guid: selectedContactState ? selectedContactState.guid : '',
        fullName: fullName,
        preferredName: preferredName,
        address: [
          {
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
          },
        ],
        phone: [
          {
            number: Number(phone.replace(/\D/g, '')),
            smsFriendly: true,
          },
        ],
        email: [email],
      };
      selectedContactState
        ? dispatch(contactsStateAsyncActions.updateContact(newContact))
        : dispatch(contactsStateAsyncActions.addContact(newContact));
      actions.resetForm();
      handleCloseDialog();
    },
  });

  return (
    <Dialog
      open={addEditContactModalState}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="md"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>
          {selectedContactState
            ? `Edit ${selectedContactState.fullName}`
            : 'Add Contact'}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ paddingTop: 2 }}>
            <TextField
              name="fullName"
              label="Full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              fullWidth
            />
            <TextField
              name="preferredName"
              label="Preferred name"
              value={formik.values.preferredName}
              onChange={formik.handleChange}
              fullWidth
            />
            <Divider />
            <Typography variant="subtitle1">Address</Typography>
            <TextField
              name="address1"
              label="Address 1"
              value={formik.values.address1}
              onChange={formik.handleChange}
            />
            <TextField
              name="address2"
              label="Address 2"
              value={formik.values.address2}
              onChange={formik.handleChange}
            />
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <Autocomplete
                  blurOnSelect
                  options={states}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="state"
                      label="State"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      fullWidth
                    />
                  )}
                  sx={{ width: 150 }}
                />
              </Grid>
              <Grid
                item
                xs
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <TextField
                  name="zip"
                  label="Zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            <Divider />
            <TextField
              name="phone"
              label="Phone"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit">{selectedContactState ? 'Save' : 'Add'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
