export type BranchType = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
};
