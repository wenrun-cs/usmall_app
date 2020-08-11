// 导入请求函数
// import {} from '../../utils/request'


// 定义状态
const initState={
    shopCarList:[],//购物车列表
}

// ================添加购物车信息===================
const addShopCar=(arr)=>{
    return {
        type:'addShopCarm',
        shopcarlist:arr
    }
}

// export const addShopCarAction=()=>{
//     return (dispatch,getState)=>{
//         if()
//     }
// }
