import { Grid } from '@mui/material';
import { ReactElement } from 'react';

export interface ThreeColumnLayoutProps {
  leftContent?: ReactElement;
  rightContent?: ReactElement;
  centerContent: ReactElement;
}
export const ThreeColumnLayout = (props: ThreeColumnLayoutProps) => {
  const { leftContent, rightContent, centerContent } = props;

  return (
    <Grid container spacing={4} my={4}>
      <Grid item xs={1} />
      <Grid item xs={3}>
        {leftContent}
      </Grid>
      <Grid item xs={rightContent ? 4 : 7}>
        {centerContent}
      </Grid>
      <Grid item xs={3}>
        {rightContent}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
