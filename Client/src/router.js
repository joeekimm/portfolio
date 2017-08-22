import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import App from './Components/App';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import AboutMe from './Components/AboutMe';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/aboutme' component={AboutMe}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;