import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';

import { strToSlug } from 'helpers';

import { Input, SearchInput } from './styles';

const Repositories: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const { setUser, setRepository, setBranch, syncUrlParams } = useGitHub();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    setRepository(null);
    setBranch(null);
    syncUrlParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchUser = useCallback(() => {
    if (inputValue) navigate(`/${inputValue}`);
  }, [inputValue, navigate]);

  const handleSearchKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchUser();
    },
    [handleSearchUser],
  );

  return (
    <Wrapper>
      <Header />
      <main className="flex-grow-1">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col className="col-10 col-sm-8 col-md-6 text-center">
              <h2 className="text-color-body mb-4">Buscar perfil</h2>
              <SearchInput className="d-flex px-2 me-2">
                <Input
                  type="text"
                  placeholder="Buscar por nome de usuário"
                  className="border-0 bg-transparent text-color-header-icons flex-grow-1 py-2"
                  value={inputValue}
                  onChange={(e) => setInputValue(strToSlug(e.target.value))}
                  onKeyPress={handleSearchKeyPress}
                />
                <button
                  className="bg-transparent"
                  type="button"
                  onClick={handleSearchUser}
                >
                  <BiSearchAlt size={20} />
                </button>
              </SearchInput>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Repositories);
