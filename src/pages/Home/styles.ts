import styled from 'styled-components';

export const SearchInput = styled.div`
  border: solid 1px;
  border-color: var(--color-scale-gray-5);
  border-radius: 7px;
  background-color: var(--color-scale-gray-9);
  min-width: 300px;

  button {
    color: var(--color-scale-gray-5);
    border: none;
  }
`;

export const Input = styled.input`
  input::placeholder {
    color: var(--color-header-icons);
  }
`;
