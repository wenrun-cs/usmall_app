// 请求分类信息
import {getsort} from '../../utils/request'

const initState={
   cateList:[]//分类信息列表
} 

// ==================分类信息=================
 const changeCate=(arr)=>{
    return {
        type:'changeCateinfo', 
        list:arr
    }
} 
// 改变分类的action
export const changeCateAction=()=>{
    return (dispatch,getState)=>{
        getsort().then(res=>{
            console.log(res);
            dispatch(changeCate(res.data.list)) 
        })
    }
}
// 设置分类的reducer
const reducer =(state=initState,action)=>{
      switch(action.type){
          case "changeCateinfo" :
           return {
               ...state,
               cateList:action.list
           } 
        default :return state;
      }
}
//导出数据
export  const getCateList = (state)=>state.cate.cateList
export default reducer