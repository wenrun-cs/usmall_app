import {getGoodsInfo} from '../../utils/request'

// 定义状态
const initState={
    goodsDetail:[],//商品详情
}

// ==================商品详情===================
const changeGoodsDetails=(goodsObj)=>{
    return {
        type:'changeGoodsDetail',
        goodsdetailObj:goodsObj
    }
}
export const GoodsDetailAction=(id)=>{
   return (dispatch,getState)=>{
    if(id===getState().detail.goodsDetail.id){
        return;
    }
    getGoodsInfo({id:id}).then(res=>{
        console.log(res.data.list[0])
        dispatch(changeGoodsDetails(res.data.list));//obj
    })
    }  
}


// reduce函数
const reducer =(state=initState,action)=>{
      switch(action.type){
        case "changeGoodsDetail":
            return{
                ...state,
                goodsDetail:action.goodsdetailObj
            }
        default: return state;
      }
}
// 导出函数

export const goodsDetail=(state)=>state.detail.goodsDetail //商品详情
export default reducer