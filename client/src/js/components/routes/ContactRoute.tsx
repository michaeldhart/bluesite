import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { SocialLinks } from '../SocialLinks';

export const ContactRoute = () => {
  return (
    <Grid container my={4}>
      <Grid item xs={0} sm={1} lg={3}></Grid>
      <Grid item xs={12} sm={10} lg={6}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe-IAMjblKUeJRjxRdDIMrus1Jg9t6qUeoceawPnriB6Ihctg/viewform?embedded=true"
          width="100%"
          height="729"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
        <Card sx={{ marginTop: 4 }}>
          <CardHeader title="Follow Us Online"></CardHeader>
          <CardContent>
            <SocialLinks />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
