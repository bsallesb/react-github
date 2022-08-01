import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import ErrorContainer from 'components/ErrorContainer';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingGate from 'components/LoadingGate';
import LoadingUser from 'components/LoadingUser';
import ProfileInformations from 'components/ProfileInformations';
import RepositoryList from 'components/RepositoryList';
import Wrapper from 'components/Wrapper';

const Repositories: React.FC = () => {
  const {
    user,
    isLoading,
    setBranch,
    setBranches,
    setRepository,
    syncUrlParams,
  } = useGitHub();

  const { username } = useParams();

  useEffect(() => {
    setBranch(null);
    setBranches([]);
    setRepository(null);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    syncUrlParams(username);
  }, [syncUrlParams, username]);

  return (
    <Wrapper>
      <Header searchInput />
      <main className="flex-grow-1">
        <LoadingGate waitFor={!isLoading} meanWile={<LoadingUser />}>
          <Container className="mb-5">
            <ErrorContainer />
            {user && (
              <Row className="g-5">
                <Col className="col-12 col-md-4 col-xl-3">
                  {user && <ProfileInformations user={user} />}
                </Col>
                <Col className="col-12 col-md-8 col-xl-9">
                  <RepositoryList />
                </Col>
              </Row>
            )}
          </Container>
        </LoadingGate>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Repositories);
