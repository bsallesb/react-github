import React, { memo } from 'react';

import { RiGitRepositoryLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Pill } from './styles';

interface IBreadcrumbProps {
  title: string;
  domain: boolean;
  url: string;
  children: React.ReactNode;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({
  title,
  domain,
  children,
  url,
}) => {
  return (
    <nav aria-label="breadcrumb mb-4">
      <ol className="breadcrumb fs-4">
        <li className="text-color-body me-2">
          <RiGitRepositoryLine size={20} />
        </li>
        <li className="breadcrumb-item">
          <Link to={url} className="text-color-blue text-decoration-none">
            {title}
          </Link>
        </li>
        {children}
      </ol>
      {domain && (
        <Pill className="fw-bold mx-1 border rounded-pill px-2 text-color-body">
          {domain ? 'Private' : 'Public'}
        </Pill>
      )}
    </nav>
  );
};

export default memo(Breadcrumb);
