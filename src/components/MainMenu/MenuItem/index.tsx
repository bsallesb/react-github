import { memo, ReactElement } from 'react';

import { Title } from './styles';

interface IMenuItemProps {
  icon?: ReactElement;
  title: string;
  url?: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, title, url = '' }) => (
  <li className="d-flex me-4">
    <Title to={url} className="d-flex text-decoration-none">
      <div className="me-2">{icon}</div>
      {title}
    </Title>
  </li>
);

export default memo(MenuItem);
