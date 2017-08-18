import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import App from './Components/App';
import Projects from './Components/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path='/projects' component={Projects}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;