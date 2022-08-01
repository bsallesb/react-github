import { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GitHubProvider } from 'context/GitHub';

import Routes from 'Routes';

import GlobalStyles from 'styles/GlobalStyles';

const App: React.FC = () => (
  <GitHubProvider>
    <Routes />
    <GlobalStyles />
  </GitHubProvider>
);

export default memo(App);
