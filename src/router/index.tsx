import * as React from 'react';

import { MembersAreaContainer, IndividualUserContainer } from '../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/:id' component={IndividualUserContainer} />
        <Route path='/' component={MembersAreaContainer} />
      </Switch>
    </Router>
  );
};
