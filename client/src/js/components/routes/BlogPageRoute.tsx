import { useParams } from 'react-router-dom';
import { BlogPageLayout } from '../BlogPageLayout';

export const BlogPageRoute = () => {
  const { pageName } = useParams();
  return <BlogPageLayout pageName={pageName ?? ''} />;
};
