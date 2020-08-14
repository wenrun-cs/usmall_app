import React, { Component } from 'react'
import './index.css'
import './iconfont.css'
import { Switch,Route,Redirect, NavLink } from 'react-router-dom'

import Home  from '../Home/Home'
import Cate from '../cate/cate'
import Shopcar from '../shortcar/shortcar'
import Mine  from '../mine/mine' 

export default class Index extends Component {
    render() {
        return (
            <div>
                <Switch>
                   <Route path='/index/home' component={Home}></Route>
                   <Route path='/index/cate' component={Cate}></Route>
                   <Route path='/index/shopcar' component={Shopcar}></Route>
                   <Route path='/index/mine' component={Mine}></Route>
                   <Redirect to='/index/home'></Redirect>
                </Switch>
                 <footer className='indexFooter'>
                    <NavLink to='/index/home' activeClassName='select'>
                        <span className='iconfont icon-shouye' ></span>
                        <span>首页</span>
                    </NavLink> 
                    <NavLink to="/index/cate" activeClassName='select'>
                        <span className='iconfont icon-fenlei'></span>
                        <span>分类</span>
                    </NavLink> 
                    <NavLink to="/index/shopcar" activeClassName='select'>
                        <span className='iconfont icon-gouwuchezhengpin'></span>
                        <span>购物车</span>
                    </NavLink> 
                    <NavLink to='/index/mine' activeClassName='select'>
                        <span className='iconfont icon-wode'></span>
                        <span>我的</span>
                    </NavLink> 
                 </footer>
            </div>
        )
    }
}
