import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




// 定义路由时hash 还是 history
import {HashRouter} from "react-router-dom"
// 加载重置css样式
import  './assets/css/reset.css'
// 加载remjs
import './assets/js/rem'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

