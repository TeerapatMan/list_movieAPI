import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home/index.js';
import Detail from '../pages/detail/index.js';

export default () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/detail/:Idmovie" component={Detail}/>
    </Switch>
  )