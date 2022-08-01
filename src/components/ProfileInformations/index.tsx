import { memo } from 'react';

import { Col, Row } from 'react-bootstrap';
import { BsDot, BsTwitter } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineLink, HiOutlineMail } from 'react-icons/hi';
import { RiBuildingLine } from 'react-icons/ri';

import Avatar from 'assets/user-avatar.jpeg';

import BorderBottom from 'components/BorderBottom';

import { formatThousand, pluralize, truncateString } from 'helpers';

import { UserType } from 'types/User';

import { Button, ProfilePicture, Wrapper } from './styles';

interface IProfileInformationsProps {
  user: UserType;
}

const ProfileInformations: React.FC<IProfileInformationsProps> = ({ user }) => (
  <Wrapper>
    {user.avatar_url ? (
      <ProfilePicture
        style={{ backgroundImage: `url(${user.avatar_url})` }}
        className="img-fluid mb-3"
      />
    ) : (
      <ProfilePicture
        style={{ backgroundImage: `url(${Avatar})` }}
        className="img-fluid mb-3"
      />
    )}
    <div>
      {user.name && (
        <h2 className="text-color-body fw-bold m-0">{user.name}</h2>
      )}
      {user.login && <p className="text-color-body fs-5">{user.login}</p>}
    </div>
    <div className="mb-3">
      <Button type="button" className="btn w-100">
        Follow
      </Button>
    </div>
    {user.bio && <div className="mb-3 text-color-body">{user.bio}</div>}
    <div className="mb-2">
      <Row className="row-cols-1 row-cols-lg-2 text-color-body">
        <Col className="d-flex align-items-center">
          <div className="me-2 mb-2 mb-lg-0">
            <FiUsers size={20} />
          </div>
          {`${formatThousand(user.followers)} ${pluralize(
            'follower',
            'followers',
            user.followers,
          )}`}
        </Col>
        <Col className="d-flex align-items-center">
          <div className="me-2">
            <FiUsers size={20} className="d-block d-lg-none" />
            <BsDot size={20} className="d-none d-lg-block" />
          </div>
          {`${formatThousand(user.following)} following`}
        </Col>
      </Row>
    </div>
    <BorderBottom>
      {user.company && (
        <div className="d-flex text-color-body mb-1 align-items-center">
          <div className="me-2">
            <RiBuildingLine size={20} />
          </div>
          {truncateString(user.company)}
        </div>
      )}
      {user.location && (
        <div className="d-flex text-color-body mb-1 align-items-center">
          <div className="me-2">
            <GoLocation size={20} />
          </div>
          {user.location}
        </div>
      )}
      {user.email && (
        <div className="d-flex text-color-body mb-1">
          <div className="me-2">
            <HiOutlineMail size={20} />
          </div>
          <a
            className="text-decoration-none"
            href={`"mailto:${user.email}?subject=GitHub"`}
            target="_blank"
            rel="noreferrer"
          >
            {user.email}
          </a>
        </div>
      )}
      {user.blog && (
        <div className="d-flex text-color-body mb-1">
          <div className="me-2">
            <HiOutlineLink size={20} />
          </div>
          <a
            className="text-decoration-none"
            href={`${user.blog}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.blog}
          </a>
        </div>
      )}
      {user.twitter_username && (
        <div className="d-flex text-color-body mb-1">
          <div className="me-2">
            <BsTwitter size={20} />
          </div>
          <a
            className="text-decoration-none"
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.twitter_username}
          </a>
        </div>
      )}
    </BorderBottom>
  </Wrapper>
);

export default memo(ProfileInformations);
