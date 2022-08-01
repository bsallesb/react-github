import styled from 'styled-components';

export const ProfilePicture = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  border-radius: 500px;
  background-position: center center;
  background-size: cover;
`;

export const Wrapper = styled.div``;

export const Button = styled.button`
  background-color: var(--color-scale-gray-7);
  border: solid 1px var(--color-scale-gray-4);
  color: var(--color-scale-gray-2);

  :hover {
    background-color: var(--color-scale-gray-7);
    border: solid 1px var(--color-scale-gray-1);
    color: var(--color-scale-gray-1);
  }
`;
