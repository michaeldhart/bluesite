import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

export const GlobalAppBar = () => {
  const appConfig = useAppSelector((state) => state.appConfigState.appConfig);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">
            {appConfig.appName}
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/who-we-are">
          Who We Are
        </Button>
        <Button color="inherit" component={Link} to="/what-we-do">
          What We Do
        </Button>
        {/* <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button> */}
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};
