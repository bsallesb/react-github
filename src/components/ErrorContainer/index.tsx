import { memo } from 'react';

import { Alert } from 'react-bootstrap';

import { useGitHub } from 'context/GitHub';

const ErrorContainer: React.FC = () => {
  const { error } = useGitHub();

  return error ? <Alert variant="warning">{error}</Alert> : null;
};

export default memo(ErrorContainer);
