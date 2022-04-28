import { Grid, Typography } from '@mui/material';
import { SocialLinks } from './SocialLinks';
import { blueGrey } from '@mui/material/colors';

export const Footer = () => {
  return (
    <Grid
      container
      pt={10}
      pb={2}
      px={4}
      sx={{ background: blueGrey[500], color: '#fff' }}
    >
      <Grid item xs={12} sm={6}>
        <Typography>
          Copyright {new Date().getFullYear()} Operation Turn Boone Blue.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SocialLinks color="#fff" />
      </Grid>
    </Grid>
  );
};
