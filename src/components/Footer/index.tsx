import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

import { FooterEdge } from './styles';

const Footer: React.FC = () => (
  <FooterEdge className="pt-3">
    <Container>
      <div className="d-flex align-items-center text-color-footer-icons py-3 mb-5">
        <div className="me-2">
          <FaGithub size={35} />
        </div>
        &copy; 2022 GitHub, Inc.
      </div>
    </Container>
  </FooterEdge>
);

export default memo(Footer);
