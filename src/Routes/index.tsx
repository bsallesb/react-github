import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Branches from 'pages/Branches';
import Commits from 'pages/Commits';
import Home from 'pages/Home';
import Repositories from 'pages/Repositories';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Repositories />} />
        <Route path="/:username/:repository" element={<Branches />} />
        <Route path="/:username/:repository/:branch" element={<Commits />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
