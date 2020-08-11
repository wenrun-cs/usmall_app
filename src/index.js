import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css'



// 定义路由时hash 还是 history
import {HashRouter} from "react-router-dom"
// 加载重置css样式
import  './assets/css/reset.css'
// 加载remjs
import './assets/js/rem'

import {Provider} from 'react-redux'
import store from './store/index' 

Component.prototype.$img='http://localhost:3000'


ReactDOM.render(
  <Provider store={store}>
 <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

