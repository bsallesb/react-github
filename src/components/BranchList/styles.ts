import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleBackground = styled(Link)`
  background-color: var(--color-scale-gray-8);
  border-bottom: solid 1px var(--color-scale-gray-4);
  border-radius: 10px 10px;

  :hover {
    color: var(--color-scale-gray-0);
  }
`;

export const Wrapper = styled.li`
  border: solid 1px var(--color-scale-gray-4);
  border-radius: 10px;
`;
