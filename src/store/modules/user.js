// 定义user数据
const initState={
    user:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')):null,//用户信息
}

//修改user的action
// ============用户信息=============
export const userInfo=(user)=>{
    return {
        type:'changeUser',
        user
    }
}
// reduce函数
const reducer = (state = initState, action)=>{
    switch(action.type){
        case "changeUser":
            return{
                ...state,
                user:action.user
            }
        default: return state;
    }
}
// 导出数据
export const getUser=(state)=>state.user.user

export default reducer
