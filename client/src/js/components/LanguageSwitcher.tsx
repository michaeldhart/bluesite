import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { Languages } from '../enums/languages';
import { globalUIStateSlice } from '../redux/globalUIStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const LanguageSwitcher = () => {
  const language = useAppSelector((state) => state.globalUIState.language);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    dispatch(globalUIStateSlice.actions.toggleLanguage());
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {language === Languages.EN ? 'Language' : 'Idioma'}
        </Typography>
        <Typography variant="subtitle1">
          {language === Languages.EN
            ? 'Lea esta página en Español'
            : 'Read this page in English'}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>EN</Typography>
          <Switch checked={language === Languages.ES} onChange={handleChange} />
          <Typography>ES</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
