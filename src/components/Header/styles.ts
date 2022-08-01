import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuBackground = styled.header`
  background-color: var(--color-scale-gray-8);
  margin-bottom: 40px;
`;

export const Profile = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  background-position: center center;
  background-size: cover;
`;

export const SearchInput = styled.div`
  border: solid 1px;
  border-color: var(--color-scale-gray-5);
  border-radius: 7px;
  background-color: var(--color-scale-gray-9);

  button {
    color: var(--color-scale-gray-5);
    border: solid 1px var(--color-scale-gray-5);
    border-radius: 5px;
  }
`;

export const Input = styled.input`
  width: 250px;

  input::placeholder {
    color: var(--color-header-icons);
  }
`;

export const Logo = styled(Link)`
  :hover {
    color: var(--color-scale-gray-0);
  }
`;
