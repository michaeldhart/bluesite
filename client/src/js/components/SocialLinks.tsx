import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

interface SocialLinksProps {
  color?: string;
}

export const SocialLinks = (props: SocialLinksProps) => {
  const { color } = props;

  return (
    <Stack direction="row">
      <IconButton aria-label="facebook" href="" target="_blank">
        <Facebook sx={{ color: color ?? '#000' }} />
      </IconButton>
      <IconButton
        aria-label="twitter"
        href="https://twitter.com/TurnBooneBlue"
        target="_blank"
      >
        <Twitter sx={{ color: color ?? '#000' }} />
      </IconButton>
      <IconButton
        aria-label="instagram"
        href="https://www.instagram.com/turnbooneblue"
        target="_blank"
      >
        <Instagram sx={{ color: color ?? '#000' }} />
      </IconButton>
    </Stack>
  );
};
