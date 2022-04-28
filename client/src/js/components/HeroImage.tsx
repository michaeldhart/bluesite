import { alpha, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import courthouse from '../../img/courthouse.jpg';

interface HeroImageProps {
  imgSrc?: string;
  title: string;
}

export const HeroImage = (props: HeroImageProps) => {
  const imgSrc = props.imgSrc ?? courthouse;

  return (
    <Stack
      sx={{
        backgroundImage: `url(${imgSrc})`,
        backgroundColor: alpha(blue[500], 0.5),
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          my: { xs: 5, sm: 10, md: 20, lg: 30, xl: 40 },
          ml: 3,
          color: '#fff',
        }}
      >
        {props.title}
      </Typography>
    </Stack>
  );
};
