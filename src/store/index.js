import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'

import user from './modules/user' //用户
import cate from './modules/cate' //分类
import home from './modules/home' //主页
import detail from './modules/detail' //详情页
import shop from './modules/shop' //购物车

const reducer=combineReducers({
   user,
   home,
   detail,
   shop,
   cate,
})

// 创建库
const store =createStore(reducer,applyMiddleware(thunk))
// 导出库
export default store
