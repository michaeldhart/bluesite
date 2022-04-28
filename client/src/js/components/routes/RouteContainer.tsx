import { Grid } from '@mui/material';
import { HeroImage } from '../HeroImage';

interface RouteContainerProps {
  pageTitle: string;
  heroImgSrc?: string;
  pageContent: JSX.Element;
}

export const RouteContainer = (props: RouteContainerProps) => {
  const { pageTitle, heroImgSrc, pageContent } = props;

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs>
          <HeroImage imgSrc={heroImgSrc} title={pageTitle} />
        </Grid>
      </Grid>
      {pageContent}
    </>
  );
};
