import { memo } from 'react';

import { Container } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

const LoadingAbout: React.FC = () => (
  <Container className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={800}
      backgroundColor="#30363d"
      foregroundColor="#6e7681"
      className="d-block d-sm-none"
    >
      <rect x="0" y="0" rx="300" ry="300" width="100%" height="400" />
      <rect x="0" y="420" rx="5" ry="5" width="320px" height="30" />
      <rect x="0" y="460" rx="5" ry="5" width="180px" height="30" />
      <rect x="0" y="515" rx="5" ry="5" width="320px" height="40" />
      <rect x="0" y="565" rx="5" ry="5" width="230px" height="20" />
      <rect x="0" y="610" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="610" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="640" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="640" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="670" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="670" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="700" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="700" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="730" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="730" rx="5" ry="5" width="200px" height="20" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width="100%"
      height={800}
      backgroundColor="#30363d"
      foregroundColor="#6e7681"
      className="d-none d-sm-block d-md-none"
    >
      <rect x="0" y="0" rx="300" ry="300" width="100%" height="500" />
      <rect x="0" y="520" rx="5" ry="5" width="320px" height="30" />
      <rect x="0" y="560" rx="5" ry="5" width="180px" height="30" />
      <rect x="0" y="615" rx="5" ry="5" width="320px" height="40" />
      <rect x="0" y="665" rx="5" ry="5" width="230px" height="20" />
      <rect x="0" y="710" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="710" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="740" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="740" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="770" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="770" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="800" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="800" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="830" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="830" rx="5" ry="5" width="200px" height="20" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width="100%"
      height={700}
      backgroundColor="#30363d"
      foregroundColor="#6e7681"
      className="d-none d-md-block"
    >
      <rect x="0" y="0" rx="300" ry="300" width="300px" height="300" />
      <rect x="0" y="320" rx="5" ry="5" width="320px" height="30" />
      <rect x="0" y="360" rx="5" ry="5" width="180px" height="30" />
      <rect x="0" y="415" rx="5" ry="5" width="320px" height="40" />
      <rect x="0" y="465" rx="5" ry="5" width="230px" height="20" />
      <rect x="0" y="510" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="510" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="540" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="540" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="570" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="570" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="600" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="600" rx="5" ry="5" width="200px" height="20" />
      <rect x="0" y="630" rx="5" ry="5" width="20px" height="20" />
      <rect x="27" y="630" rx="5" ry="5" width="200px" height="20" />

      <rect x="340" y="0" rx="5" ry="5" width="75%" height="30" />
      <rect x="340" y="50" rx="5" ry="5" width="100%" height="1" />
      <rect x="340" y="70" rx="5" ry="5" width="300" height="30" />
      <rect x="340" y="110" rx="5" ry="5" width="300" height="20" />
      <rect x="340" y="140" rx="5" ry="5" width="27" height="20" />
      <rect x="375" y="140" rx="5" ry="5" width="110" height="20" />
      <rect x="505" y="140" rx="5" ry="5" width="27" height="20" />
      <rect x="540" y="140" rx="5" ry="5" width="110" height="20" />
      <rect x="340" y="180" rx="5" ry="5" width="100%" height="1" />
      <rect x="340" y="200" rx="5" ry="5" width="300" height="30" />
      <rect x="340" y="240" rx="5" ry="5" width="300" height="20" />
      <rect x="340" y="270" rx="5" ry="5" width="27" height="20" />
      <rect x="375" y="270" rx="5" ry="5" width="110" height="20" />
      <rect x="505" y="270" rx="5" ry="5" width="27" height="20" />
      <rect x="540" y="270" rx="5" ry="5" width="110" height="20" />
      <rect x="340" y="310" rx="5" ry="5" width="100%" height="1" />
      <rect x="340" y="330" rx="5" ry="5" width="300" height="30" />
      <rect x="340" y="370" rx="5" ry="5" width="300" height="20" />
      <rect x="340" y="400" rx="5" ry="5" width="27" height="20" />
      <rect x="375" y="400" rx="5" ry="5" width="110" height="20" />
      <rect x="505" y="400" rx="5" ry="5" width="27" height="20" />
      <rect x="540" y="400" rx="5" ry="5" width="110" height="20" />
      <rect x="340" y="440" rx="5" ry="5" width="100%" height="1" />
    </ContentLoader>
  </Container>
);

export default memo(LoadingAbout);
