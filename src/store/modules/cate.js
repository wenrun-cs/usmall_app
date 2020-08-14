// 请求分类信息
import {getsort,cateTree,getGoods} from '../../utils/request'

const initState={
   cateList:[],//分类信息列表,
   cateTreeList:[],//分类信息树
   catedetail:[],//分类树下的具体详情
} 

// ==================分类信息(首页)=================
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
            dispatch(changeCate(res.data.list)) 
        })
    }
}
// ==================分类树形结构======================
const changeCateTree=(treearr)=>{
   return{
       type:"changeCateTreeList",
       treelist:treearr
   }
}
export const changeCateTreeAction=()=>{
    return (dispatch,getState)=>{
        if(getState().cate.cateTreeList.length>0){
            return
        }
        cateTree().then(res=>{
            console.log(res);
            dispatch(changeCateTree(res.data.list))
        })
    }
}
// ===============分类树下的具体详情===============
const changecateDetail=(detaillist)=>{
    return {
        type:'changecateDetail',
        detailList:detaillist
    }
}
export const changecateDetailAction=(id)=>{
    return (dispatch,getState)=>{
        if(getState().cate.catedetail.length>0&&getState().cate.catedetail[0].id===id){
            return
        }
        getGoods({fid:id}).then(res=>{
            console.log(res);
            if(res.data.list===null){
                res.data.list=[]
            }
            dispatch(changecateDetail(res.data.list))
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
          case "changeCateTreeList" :
           return {
               ...state,
               cateTreeList:action.treelist
           }
           case "changecateDetail":
               return{
                   ...state,
                   catedetail:action.detailList
               }
        default :return state;
      }
}
//导出数据
export  const getCateList = (state)=>state.cate.cateList // 一进分类左边栏数据
export const getCateTreeList=(state)=>state.cate.cateTreeList // 对应的右边栏数据
export const getCatedetail=(state)=>state.cate.catedetail //  点击右边栏出现的数据
export default reducer