import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { parseBranchName } from 'helpers';

import Api from 'services/Api';

import { BranchType } from 'types/Branch';
import { CommitType } from 'types/Commit';
import { RepositoryType } from 'types/Repository';
import { UserType } from 'types/User';

interface IGitHubProps {
  user: UserType | null;
  repositories: RepositoryType[];
  repository: RepositoryType | null;
  branches: BranchType[];
  branch: BranchType | null;
  commits: CommitType[];
  error: string | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  setRepository: Dispatch<SetStateAction<RepositoryType | null>>;
  setBranch: Dispatch<SetStateAction<BranchType | null>>;
  getUser: (username: string) => Promise<void>;
  getRepositories: (username: string) => Promise<void>;
  getBranches: (username: string, repositoryName: string) => Promise<void>;
  getCommits: (
    username: string,
    repositoryName: string,
    sha: string,
  ) => Promise<void>;
  setBranches: Dispatch<SetStateAction<BranchType[]>>;
  setCommits: Dispatch<SetStateAction<CommitType[]>>;
  syncUrlParams: (
    username?: string,
    repositoryName?: string,
    branchName?: string,
  ) => void;
}

interface IGitHubProviderProps {
  children: React.ReactNode;
}

export const GitHubContext = createContext<IGitHubProps>({} as IGitHubProps);

export const GitHubProvider: React.FC<IGitHubProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);
  const [repository, setRepository] = useState<RepositoryType | null>(null);
  const [branches, setBranches] = useState<BranchType[]>([]);
  const [branch, setBranch] = useState<BranchType | null>(null);
  const [commits, setCommits] = useState<CommitType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userParam, setUserParam] = useState<string | undefined>();
  const [repositoryParam, setRepositoryParam] = useState<string | undefined>();
  const [branchParam, setBranchParam] = useState<string | undefined>();

  const syncUrlParams = useCallback(
    (username?: string, repositoryName?: string, branchName?: string) => {
      setUserParam(username);
      setRepositoryParam(repositoryName);
      setBranchParam(branchName ? parseBranchName(branchName) : undefined);
    },
    [],
  );

  const getRepositories = useCallback(
    async (username: string): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await Api.get(`/users/${username}/repos`);
        setRepositories(data);
      } catch {
        setRepositories([]);
        setError('Erro ao carregar os repositórios');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const getUser = useCallback(
    async (username: string): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await Api.get(`/users/${username}`);
        setUser(data);
        getRepositories(username);
      } catch {
        setUser(null);
        setError('Usuário não encontrado');
        setIsLoading(false);
      }
    },
    [getRepositories],
  );

  const getBranches = useCallback(
    async (username: string, repositoryName: string): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await Api.get(
          `/repos/${username}/${repositoryName}/branches`,
        );
        setBranches(data);
      } catch {
        setBranches([]);
        setError('Erro ao carregar as branchs');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const getCommits = useCallback(
    async (
      username: string,
      repositoryName: string,
      sha: string,
    ): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await Api.get(
          `/repos/${username}/${repositoryName}/commits?sha=${sha}`,
        );
        setCommits(data);
      } catch {
        setCommits([]);
        setError('Erro ao carregar os commits');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    if (userParam && (!user || user?.login !== userParam)) {
      getUser(String(userParam));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userParam]);

  useEffect(() => {
    if (userParam && repositoryParam && branchParam && !branches.length)
      getBranches(String(userParam), String(repositoryParam));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositoryParam, userParam, branchParam]);

  useEffect(() => {
    if (
      Array.isArray(repositories) &&
      repositories.length &&
      repositoryParam &&
      !repository
    ) {
      const findRepo = repositories.find((r) => r.name === repositoryParam);
      if (findRepo) setRepository(findRepo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositoryParam, repositories]);

  useEffect(() => {
    if (Array.isArray(branches) && branches.length && branchParam && !branch) {
      const findBranch = branches.find((b) => b.name === branchParam);
      if (findBranch) setBranch(findBranch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branchParam, branches]);

  return (
    <GitHubContext.Provider
      value={useMemo(
        () => ({
          user,
          repositories,
          repository,
          branches,
          branch,
          commits,
          error,
          isLoading,
          setUser,
          setRepository,
          setBranch,
          getUser,
          getRepositories,
          getBranches,
          getCommits,
          setBranches,
          setCommits,
          syncUrlParams,
        }),
        [
          user,
          repositories,
          repository,
          branches,
          branch,
          commits,
          error,
          isLoading,
          setUser,
          setRepository,
          setBranch,
          getUser,
          getRepositories,
          getBranches,
          getCommits,
          setBranches,
          setCommits,
          syncUrlParams,
        ],
      )}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = (): IGitHubProps => {
  const context = useContext(GitHubContext);

  if (!context) {
    throw new Error('useGitHub must be within GitHubProvider');
  }

  return context;
};
