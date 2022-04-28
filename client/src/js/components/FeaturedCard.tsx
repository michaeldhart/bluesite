import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface FeaturedCardProps {
  title: string;
  image: string;
  subtitle: string;
  link: string;
}

export const FeaturedCard = (props: FeaturedCardProps) => {
  const { title, image, subtitle, link } = props;
  return (
    <Card variant="outlined" sx={{ height: 400 }}>
      <CardActionArea href={link}>
        <CardMedia component="img" height="140" image={image}></CardMedia>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
