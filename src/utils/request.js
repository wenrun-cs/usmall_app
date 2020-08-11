import axios from 'axios'
import qs from 'qs'
axios.interceptors.response.use((res)=>{
   console.group("=======当前访问的地址为"+res.config.url+"=====")
   console.log(res);
   return res;
})

const baseUrl=''

// 获取分类信息(首页)
export const getsort=()=>{
     return axios({
         url:baseUrl+'/api/getcate',
         method:'get'
     })
}
// 获取轮播图信息(首页)
export const getbanner=()=>{
    return axios({
        url:baseUrl+'/api/getbanner',
        method:'get'
    })
}
// 获取限时秒杀信息(首页)
export const getseckill=()=>{
    return axios({
        url:baseUrl+'/api/getseckill',
        method:'get'
    })
}
// 获取商品信息（首页）
export const getIndexgoods=()=>{
     return axios({
         url:baseUrl+'/api/getindexgoods',
         method:'get'
     })
}
//获取分类树形结构
export const cateTree=()=>{
    return axios({
        url:baseUrl+'/api/getcatetree',
        method:'get'
    })
}
// 获取分类商品  fid分类编号
export const getGoods=(params)=>{
    return axios({
        url:baseUrl+'/api/getgoods',
        method:'get',
        params 
    })
}
// 获取一个商品信息  id商品编号
export const getGoodsInfo=(params)=>{
    return axios({
        url:baseUrl+'/api/getgoodsinfo',
        method:'get',
        params
    })
}
// 会员注册  phone nickname  password
export const getRegister=(params)=>{
    return axios({
        url:baseUrl+'/api/register',
        method:'post',
        data:qs.stringify(params)
    })
}
// 会员登录  phone password
export const getLogin=(params)=>{
    return axios({
        url:baseUrl+'/api/login',
        method:'post',
        data:qs.stringify(params)
    })
}
// 购物车列表 uid
export const getShopcar=(params)=>{
    return axios({
        url:baseUrl+'/api/cartlist',
        method:'get',
        params
    })
}
// 购物车添加 uid goodsid  num 
export const getCartadd=(params)=>{
   return axios({
       url:baseUrl+'/api/cartadd',
       method:'post',
       data:qs.stringify(params)
   })
}
//购物车删除 id购物车编号
export const getCartdelete=(params)=>{
   return axios({
       url:baseUrl+'/api/cartdelete',
       method:'post',
       data:qs.stringify(params)
   })
}
// 购物车修改  id type 1自减 2自增
export const getCartupdate=(params)=>{
    return axios({
        url:baseUrl+'/api/cartedit',
        method:'post',
        data:qs.stringify(params)
    })
}
// 