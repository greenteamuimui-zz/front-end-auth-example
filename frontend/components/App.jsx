import React from 'react';
import GreetingContainer from  './greeting_container';
import {Route, Switch} from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bnb</h1>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
