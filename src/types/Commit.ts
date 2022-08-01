export type CommitType = {
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    id: number;
    avatar_url: string;
  };
  verification: {
    verified: boolean;
    reason: string;
  };
};
