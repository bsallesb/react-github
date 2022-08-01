import { memo } from 'react';

import { Container } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

const LoadingBranch: React.FC = () => (
  <Container className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={700}
      backgroundColor="#30363d"
      foregroundColor="#6e7681"
    >
      <rect x="0" y="0" rx="300" ry="300" width="300px" height="300" />
      <rect x="0" y="320" rx="5" ry="5" width="320px" height="30" />
    </ContentLoader>
  </Container>
);

export default memo(LoadingBranch);
