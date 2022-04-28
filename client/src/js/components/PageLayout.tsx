import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { pagesStateAsyncActions } from '../redux/pagesStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThreeColumnLayout } from './ThreeColumnLayout';

export interface PageLayoutProps {
  pageName: string;
}

export const PageLayout = (props: PageLayoutProps) => {
  const { pageName } = props;

  const language = useAppSelector((state) => state.globalUIState.language);

  const page = useAppSelector((state) =>
    state.pagesState.pages.find(
      (p) => p.name === pageName && p.lang === language
    )
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      pagesStateAsyncActions.getPage({ lang: language, name: pageName })
    );
  }, [language]);

  return (
    <ThreeColumnLayout
      leftContent={
        <div>
          <LanguageSwitcher />
        </div>
      }
      centerContent={
        <Typography sx={{ fontSize: '1.2rem' }}>
          <div dangerouslySetInnerHTML={{ __html: page?.html ?? '' }}></div>
        </Typography>
      }
    />
  );
};
