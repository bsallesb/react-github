import { memo, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import BorderBottom from 'components/BorderBottom';
import Breadcrumb from 'components/Breadcrumb';
import BreadcrumbItem from 'components/Breadcrumb/BreadcrumbItem';
import CommitList from 'components/CommitList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingGate from 'components/LoadingGate';
import Wrapper from 'components/Wrapper';

import { parseBranchName } from 'helpers';

const Commits: React.FC = () => {
  const { repository, branch, isLoading, getCommits, syncUrlParams } =
    useGitHub();

  const {
    username,
    repository: repositoryName,
    branch: branchName,
  } = useParams();

  useEffect(() => {
    if (branch)
      getCommits(
        String(username),
        String(repositoryName),
        String(branch.commit.sha),
      );

    syncUrlParams(username, repositoryName, branchName);

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branch]);

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
                <BreadcrumbItem
                  item={repository.name}
                  url={`/${username}/${repository.name}`}
                />
                <BreadcrumbItem item={parseBranchName(String(branchName))} />
              </Breadcrumb>
            )}
          </LoadingGate>
        </BorderBottom>
        <Container className="mb-5">
          <LoadingGate
            waitFor={!isLoading}
            meanWile={<p className="text-white">Carregando...</p>}
          >
            <CommitList />
          </LoadingGate>
        </Container>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default memo(Commits);
