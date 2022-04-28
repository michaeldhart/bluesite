import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { blogStateAsyncActions } from '../redux/blogStateSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThreeColumnLayout } from './ThreeColumnLayout';

export interface BlogPageLayoutProps {
  pageName: string;
}

export const BlogPageLayout = (props: BlogPageLayoutProps) => {
  const { pageName } = props;

  const language = useAppSelector((state) => state.globalUIState.language);

  const blogPage = useAppSelector((state) =>
    state.blogState.blogs.find(
      (b) => b.name === pageName && b.lang === language
    )
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(blogStateAsyncActions.getBlog({ lang: language, name: pageName }));
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
          <div dangerouslySetInnerHTML={{ __html: blogPage?.html ?? '' }}></div>
        </Typography>
      }
    />
  );
};
