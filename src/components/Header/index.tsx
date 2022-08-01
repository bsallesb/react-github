import { memo, useCallback, useState } from 'react';

import { Stack } from 'react-bootstrap';
import { CgFormatSlash } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import { strToSlug } from 'helpers';

import { Input, Logo, MenuBackground, SearchInput } from './styles';

interface IHeaderProps {
  searchInput?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ searchInput }) => {
  const [inputValue, setInputValue] = useState('');

  const { setUser } = useGitHub();
  const navigate = useNavigate();

  const handleSearchUser = useCallback(() => {
    if (inputValue) {
      setUser(null);
      navigate(`/${inputValue}`);
    }
  }, [inputValue, navigate, setUser]);

  const handleSearchKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchUser();
    },
    [handleSearchUser],
  );

  return (
    <MenuBackground className="px-3">
      <Stack direction="horizontal" className="p-3">
        <Logo
          to="/"
          className="text-color-header-icons me-3 text-decoration-none"
        >
          <FaGithub size={35} />
        </Logo>
        {searchInput && (
          <SearchInput className="p-1 me-2">
            <Input
              type="text"
              placeholder="Buscar por usuario"
              className="border-0 bg-transparent ps-2 text-color-header-icons"
              value={inputValue}
              onChange={(e) => setInputValue(strToSlug(e.target.value))}
              onKeyPress={handleSearchKeyPress}
            />
            <button
              className="bg-transparent"
              type="button"
              onClick={handleSearchUser}
            >
              <CgFormatSlash size={20} />
            </button>
          </SearchInput>
        )}
        <ul className="d-none d-md-flex m-0 text-color-header-icons text-decoration-none list-unstyled">
          <li className="mx-2 fw-bold">GitHub</li>
        </ul>
      </Stack>
    </MenuBackground>
  );
};

export default memo(Header);
