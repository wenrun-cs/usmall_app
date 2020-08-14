import React from 'react';
// 引入路由
import {Switch , Route,Redirect} from 'react-router-dom'
// 懒加载
import asyncRouter from  './utils/asyncRouter'
// 路由拦截
import MyRoute from './pages/MyRoute/MyRoute'
// 路由
const Index=asyncRouter(()=>import('./pages/Index/Index.js'))
const Login =asyncRouter(()=>import('./pages/Login/Login.js'))
const Register =asyncRouter(()=>import('./pages/Register/Register.js'))
const Detail =asyncRouter(()=>import('./pages/Detail/Detail.js')) 
const Catedetail=asyncRouter(()=>import('./pages/catedetail/catedetail.js'))



 function App() {
  return (
    <div>
       <Switch>
          <Route path='/login' component={Login}></Route>
          <MyRoute path='/register' component={Register}></MyRoute>
          <MyRoute path='/index' component={Index}></MyRoute>
          <MyRoute path='/detail' component={Detail}></MyRoute>
          <MyRoute path='/catedetail' component={Catedetail}></MyRoute>
          <Redirect to='/login'></Redirect>
      </Switch>
    </div>
  )
}

export default App;
