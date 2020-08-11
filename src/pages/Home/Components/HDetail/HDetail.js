import React,{Component} from 'react'
// 链接库
import {connect} from 'react-redux'
// 从库中获取方法跟变量
import {goodsList,GoodsListAction} from '../../../../store/modules/home'

// 搞成组件
import {withRouter} from 'react-router-dom'

import './HDetail.css'
// 在工具类中获取过滤器
import {filterPrice} from '../../../../utils/filter'
class HDetail extends Component {
    //页面一进来就加载调用redux库的函数
   componentDidMount(){
    this.props.GoodsListsAction()
   }
   // 点击列表 跳转到详情页面
    ToDetail(id){
      this.props.history.push('/detail?id='+id)
    }
    //渲染
   render(){
    //    从库中拿到数据 定义 到props上
       const {goodsLists} =this.props
    return (
        <div className='HDetail'>
             <ul>
                 {goodsLists.length>0?//查询列表数据是否为空
                    goodsLists.map(item=>{
                        return (
                        <li  key={item.id}>
                            <img src={this.$img+item.img} alt=""/>
                            <div className='HDdiv'>
                                <p className='p1'>{item.goodsname}</p>
                                <p className='p2'>{'￥'+filterPrice(item.price)}</p>
                                <button onClick={()=>this.ToDetail(item.id)}> 
                                       立即抢购
                                </button>
                            </div> 
                        </li>
                        )
                    }):null
                }
             </ul>
        </div>
    )
   }
}
// 从库中获取数据定义到props上
const mapStateToProps=(state)=>{
   return{
    goodsLists:goodsList(state) 
   }
}
// 从库中获取方法定义到props上
const mapDispatchToProps=(dispatch)=>{
   return{
    GoodsListsAction: ()=>dispatch(GoodsListAction())    
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HDetail))
