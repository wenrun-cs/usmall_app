import React from 'react';

import {Switch , Route,Redirect} from 'react-router-dom'
import asyncRouter from  './utils/asyncRouter'

const Index=asyncRouter(()=>import('./pages/Index/Index.js'))

function App() {
  return (
    <div>
       <Switch>
          <Route path={'/index'} component={Index}></Route>
      </Switch>
    </div>
  )
}

export default App;
