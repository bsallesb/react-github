import { LicenseType } from './license';
import { UserType } from './User';

export type RepositoryType = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: UserType;
  html_url: string;
  description: string;
  fork: boolean;
  updated_at: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
  license: LicenseType;
  visibility: string;
  watchers: number;
  subscribers_count: number;
};
