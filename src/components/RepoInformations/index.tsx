import { memo } from 'react';

import { BsEye, BsStar } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

import BorderBottom from 'components/BorderBottom';

import { RepositoryType } from 'types/Repository';

interface IRepoInformationsProps {
  repository: RepositoryType;
}

const RepoInformations: React.FC<IRepoInformationsProps> = ({ repository }) => (
  <div>
    <div>
      <h2 className="text-color-body fw-bold mb-3 fs-4">About</h2>
      {repository.description && (
        <p className="text-color-body">{repository.description}</p>
      )}
    </div>
    <BorderBottom>
      {repository.subscribers_count >= 0 && (
        <div className="d-flex text-color-body mb-2">
          <div className="me-3">
            <BsEye size={20} />
          </div>
          {repository.subscribers_count} watching
        </div>
      )}
      {repository.license && (
        <div className="d-flex text-color-body mb-2">
          <div className="me-3">
            <FaBalanceScale size={18} />
          </div>
          {repository.license.name}
        </div>
      )}
      {repository.stargazers_count >= 1 && (
        <div className="d-flex text-color-body mb-2">
          <div className="me-3">
            <BsStar size={18} />
          </div>
          {repository.stargazers_count} stars
        </div>
      )}
      {repository.forks_count >= 1 && (
        <div className="d-flex text-color-body mb-2">
          <div className="me-3">
            <TbGitFork size={18} />
          </div>
          {repository.forks_count} forks
        </div>
      )}
    </BorderBottom>
  </div>
);

export default memo(RepoInformations);
