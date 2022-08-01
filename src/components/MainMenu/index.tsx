import { memo } from 'react';

import { Col, Row } from 'react-bootstrap';

interface IProfileMenuProps {
  children?: React.ReactNode;
  justifyContent?: 'start' | 'end';
}

const MainMenu: React.FC<IProfileMenuProps> = ({
  children,
  justifyContent = 'start',
}) => (
  <Row className={`d-none d-md-flex justify-content-${justifyContent}`}>
    <Col className="col-md-8 col-xl-9">
      <ul className="d-flex text-decoration-none list-unstyled text-color-body fw-bold m-0">
        {children}
      </ul>
    </Col>
  </Row>
);

export default memo(MainMenu);
