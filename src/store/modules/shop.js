// 导入请求函数
import {getShopcar,getCartdelete,getCartupdate} from '../../utils/request'
import {getUser} from '../modules/user'

// 定义状态
const initState={
    shopCarList:[],//购物车列表
    isEditor:false,//是否编辑
    isAll:false,//是否全选
}
// ================购物车列表信息===================
const getShopCar=(arr)=>{
    return {
        type:'addShopCarm',
        shopcarlist:arr
    }
}
// 请求购物车列表
export const addShopCarAction=(isD)=>{
    return (dispatch,getState)=>{
        const {shopCarList}=getState().shop
        const arrC=shopCarList.map(item=>item.checked)
        getShopcar({uid:getUser(getState()).uid}).then(res=>{
            const list=res.data.list?res.data.list:[]
            list.forEach((item,index) => {
               if(isD){
                item.checked=false
                dispatch(changeisAllAction(true))
               }else{
                item.checked=arrC[index]
                dispatch(changeisAllAction(false))
               }
            });
           
            dispatch(getShopCar(list))
        })
    }
}
// =============修改isEditor编辑==========
export const changeIsEditorAction=()=>{
    return {
        type:'changeIsEditor'
    }
}
// ===========修改isAll全选==============
export const changeisAllAction=(bool)=>{
    return{
        type:'changeIsAll',
        bool
    }
}

// =============修改某条数据的checked==============
export const changeOneAction=index=>{
    return{
        type:'changeOne',
        index
    }
}


// =============点击+ — 效果 ==================
export const requestEditAction=(data)=>{
    return (dispatch)=>{
        getCartupdate(data).then(res=>{
            dispatch(addShopCarAction())                 
        })
    }
}

//删除 
export const requestDelAction=id=>{
    return (dispatch)=>{
        getCartdelete({id:id}).then(res=>{
           dispatch(addShopCarAction(true))
        })
    }
}


const reducer=(state=initState,action)=>{
    switch(action.type){
        //获取购物车列表
        case "addShopCarm" :
            return{
                ...state,
                shopCarList:action.shopcarlist
            }
        //改变编辑
        case 'changeIsEditor':
            return{
                ...state,
                isEditor:!state.isEditor
            }
        //改变全选
        case "changeIsAll":
            return{
                ...state,
                isAll:action.bool?false:!state.isAll,
                shopCarList:state.shopCarList.map(item=>{
                   item.checked=!state.isAll
                    return item
                })
            }
        // 改变一个框 
        case "changeOne":
            const {shopCarList}=state
            shopCarList[action.index].checked=!shopCarList[action.index].checked
            return{
                ...state,
                shopCarList:[...shopCarList],
                isAll:shopCarList.every(item=>item.checked)
            }
      default : return state
    }
}
// 导出数据
export const   getshopCarList =(state)=>state.shop.shopCarList  //购物车列表数据
export const   isEditor =(state)=>state.shop.isEditor //是否编辑
export const    isAll=(state)=>state.shop.isAll //是否全选
export const    getAllPrice=(state)=>{
    var sum=0;
    const {shopCarList}=state.shop
    shopCarList.forEach(item=>{
        if(item.checked){
            sum+=item.price*item.num
        }  
    })
    return sum;
    // return  getshopCarList.reducer((val,item)=>item.checked?val+item.price*item.num :val,0)
}
export default reducer