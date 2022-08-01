import { memo } from 'react';

import { BsFillCircleFill, BsStar } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

import { useGitHub } from 'context/GitHub';

import { BorderSection } from 'components/BorderBottom/styles';

import { formatDate } from 'helpers';

import { Pill } from './styles';

const RepositoryList: React.FC = () => {
  const { repositories, setRepository } = useGitHub();
  const { username } = useParams();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {repositories?.map((repository) => (
        <BorderSection className="pb-3 pt-4" key={repository.id}>
          <div className="d-flex align-items-center mb-1">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              to={`/${username}/${repository.name}`}
              className="fw-bold text-color-blue fs-4 m-0 me-2 text-decoration-none"
              onClick={() => setRepository(repository)}
            >
              {repository.name}
            </Link>
            <Pill className="fw-bold mx-1 border rounded-pill px-2 text-color-body">
              {repository.private ? 'Private' : 'Public'}
            </Pill>
          </div>
          {repository.description && (
            <div className="text-color-body">{repository.description}</div>
          )}
          <div className="d-flex text-color-body align-items-center mt-4">
            {repository.language && (
              <div className="d-flex align-items-center me-3">
                <div className="me-1 d-flex align-items-center">
                  <BsFillCircleFill size={13} />
                </div>
                {repository.language}
              </div>
            )}
            {repository.watchers >= 1 && (
              <div className="d-flex align-items-center me-3">
                <div className="me-1 d-flex align-items-center">
                  <BsStar size={18} />
                </div>
                {repository.watchers}
              </div>
            )}
            {repository.forks_count >= 1 && (
              <div className="d-flex align-items-center me-3">
                <div className="me-1">
                  <TbGitFork size={18} />
                </div>
                {repository.forks_count}
              </div>
            )}
            {repository.license && (
              <div
                className="d-flex align-items-center me-3"
                key={repository.license.name}
              >
                <div className="me-1 d-flex align-items-center">
                  <FaBalanceScale size={18} />
                </div>
                {repository.license.name}
              </div>
            )}
            {repository.updated_at && (
              <div className="d-flex align-items-center me-3">
                {formatDate(repository.updated_at)}
              </div>
            )}
          </div>
        </BorderSection>
      ))}
    </>
  );
};

export default memo(RepositoryList);
