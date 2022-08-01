import { memo } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import { safeBranchName } from 'helpers';

import { TitleBackground, Wrapper } from './styles';

const BranchList: React.FC = () => {
  const { branches, setBranch } = useGitHub();

  const { username, repository } = useParams();

  return (
    <ul className="p-0">
      {branches?.map((branch) => (
        <Wrapper key={branch.commit.sha} className="list-unstyled mb-4">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <TitleBackground
            className="d-block text-color-body fw-bold ps-3 py-2 text-decoration-none"
            to={`/${username}/${repository}/${safeBranchName(branch.name)}`}
            onClick={() => setBranch(branch)}
          >
            {branch.name}
          </TitleBackground>
        </Wrapper>
      ))}
    </ul>
  );
};

export default memo(BranchList);
