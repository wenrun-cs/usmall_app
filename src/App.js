import React from 'react';

import {Switch , Route,Redirect} from 'react-router-dom'
import asyncRouter from  './utils/asyncRouter'

const Index=asyncRouter(()=>import('./pages/Index/Index.js'))
const Login =asyncRouter(()=>import('./pages/Login/Login.js'))
const Register =asyncRouter(()=>import('./pages/Register/Register.js'))
const Detail =asyncRouter(()=>import('./pages/Detail/Detail.js')) 



 function App() {
  return (
    <div>
       <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/index' component={Index}></Route>
          <Route path='/detail' component={Detail}></Route>
          <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}

export default App;
