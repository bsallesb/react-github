import React, { memo } from 'react';

import { Link } from 'react-router-dom';

interface IBreadcrumbItemProps {
  item: string;
  url?: string;
}

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = ({
  item,
  url = null,
}) => (
  <li className="breadcrumb-item active" aria-current="page">
    {url ? (
      <Link to={url} className="text-color-blue text-decoration-none">
        {item}
      </Link>
    ) : (
      <span className="text-white">{item}</span>
    )}
  </li>
);

export default memo(BreadcrumbItem);
