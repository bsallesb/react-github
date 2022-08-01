import { memo } from 'react';

import { useGitHub } from 'context/GitHub';

import { Profile, TitleBackground, Wrapper } from './styles';

const CommitList: React.FC = () => {
  const { commits } = useGitHub();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {commits?.map((commit) => (
        <Wrapper className="mt-3" key={commit.node_id}>
          <TitleBackground className="text-color-body fw-bold ps-3 py-2">
            {commit?.commit?.message}
          </TitleBackground>
          <div className="d-flex px-3 my-3">
            <div className="d-flex text-color-body me-2">
              {commit?.author ? (
                <>
                  <Profile
                    className="me-2"
                    style={{
                      backgroundImage: `url(${commit.author.avatar_url})`,
                    }}
                  />
                  <span>{commit.author.login}</span>
                </>
              ) : (
                <span>Usuário excluído</span>
              )}
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default memo(CommitList);
