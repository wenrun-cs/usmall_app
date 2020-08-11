// 导入请求数据的函数
import {getbanner,getIndexgoods} from '../../utils/request'


//定义变量 状态
const initState={
    bannerList:[],//轮播图列表  
    goodsList:[],//商品列表
}
// action creator
// ================轮播图信息===============
const changeBannerList=(bannerarr)=>{
    return {
        type:'changeBanner',
        list:bannerarr
    }
}
export const BannerListAction=()=>{
    return (dispatch,getState)=>{
    const {bannerList} =getState().home
        if(bannerList.length>0){
            return
        }
        getbanner().then(res=>{
             dispatch(changeBannerList(res.data.list))
        })  
    }
}

// ==================商品信息====================
const changeGoodsList=(goodsArr)=>{
  return{
      type:'changeGoods',
      GoodsList:goodsArr
  }
}

export const GoodsListAction=()=>{
    return   (dispatch,getState)=>{
    const {goodsList} =getState().home;
    if(goodsList.length>0){
        return;
    }
    getIndexgoods().then(res=>{
        console.log(res.data.list[0])
        dispatch(changeGoodsList(res.data.list[0].content))
    })
    }
}
// reducer
const reducer=(state=initState,action)=>{
     switch(action.type){
        case 'changeBanner'://轮播图信息
            return {
               ...state,
               bannerList:action.list
            }
        case 'changeGoods'://首页商品列表
            return{
                ...state,
                goodsList:action.GoodsList
           } 
        default: return state;
    }
}

// 导出函数
export const bannerList =(state)=>state.home.bannerList //轮播图
export const  goodsList=(state)=>state.home.goodsList  //商品列表


export default reducer