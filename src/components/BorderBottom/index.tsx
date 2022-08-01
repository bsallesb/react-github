import { memo } from 'react';

import { BorderSection } from './styles';

interface IBorderBottomProps {
  children?: React.ReactNode;
  className?: string;
}

const BorderBottom: React.FC<IBorderBottomProps> = ({
  children,
  className = '',
}) => <BorderSection className={`pb-3 ${className}`}>{children}</BorderSection>;

export default memo(BorderBottom);
