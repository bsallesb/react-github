import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import BorderBottom from 'components/BorderBottom';
import BranchList from 'components/BranchList';
import Breadcrumb from 'components/Breadcrumb';
import BreadcrumbItem from 'components/Breadcrumb/BreadcrumbItem';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingGate from 'components/LoadingGate';
import RepoInformations from 'components/RepoInformations';
import Wrapper from 'components/Wrapper';

const Branches: React.FC = () => {
  const {
    repository,
    isLoading,
    getBranches,
    setBranch,
    setCommits,
    syncUrlParams,
  } = useGitHub();

  const { username, repository: repositoryName } = useParams();

  useEffect(() => {
    setBranch(null);
    setCommits([]);
    syncUrlParams(username, repositoryName);
    getBranches(String(username), String(repositoryName));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, repositoryName]);

  console.log('repository', repository);

  return (
    <Wrapper>
      <Header searchInput />
      <main className="flex-grow-1">
        <BorderBottom className="mb-3 ps-3 ps-sm-5">
          <LoadingGate
            waitFor={!!repository}
            meanWile={<p className="text-white">Carregando...</p>}
          >
            {repository && (
              <Breadcrumb
                title={repository.owner.login}
                domain={repository.private}
                url={`/${username}`}
              >
                <BreadcrumbItem item={repository.name} />
              </Breadcrumb>
            )}
          </LoadingGate>
        </BorderBottom>
        <Container className="mb-5">
          <LoadingGate
            waitFor={!isLoading}
            meanWile={<p className="text-white">Carregando...</p>}
          >
            <Row className="row-cols-1">
              <Col className="col-md-8 order-2 order-md-1">
                <BranchList />
              </Col>
              <Col className="mb-3 col-md-4 order-1 order-md-2">
                {repository && <RepoInformations repository={repository} />}
              </Col>
            </Row>
          </LoadingGate>
        </Container>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Branches);
