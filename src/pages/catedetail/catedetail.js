import React, { Component } from 'react'
// 引入样式
import './catedetail.css'
// 加载node方法 最快速的拿到地址栏id
import querystring from 'querystring'
// 加载链接库
import {connect} from 'react-redux'
// 将库中方法导入
import {getCatedetail,changecateDetailAction} from '../../store/modules/cate'
// 加载一个头部
import Header from '../../components/Header/Header'
// 引入过滤器
import {filterPrice} from '../../utils/filter'
// 加载失败图片
import ss from '../../assets/img/pen.jpg'
 class catedetail extends Component {
     constructor(){
         super()
         this.state={
             name:"null" //定义头部名字
         }
     }
    componentDidMount(){
        var obj=querystring.parse(this.props.location.search.slice(1))
        var id=obj.id
        this.setState({
            name:obj.name
        })
        console.log(id)
        this.props.changecateDetailActions(id)
    }
    pushDetail(id){
       this.props.history.push('/detail?id='+id)
    }
    render() {
        const {name} =this.state
        var {getCatedetails} =this.props
        console.log(getCatedetails)
        return (
            <div className='catedetail'>
                  <Header title={name} back></Header>
                  {
                      getCatedetails.length>0?getCatedetails.map(item=>{
                          return(
                            <div className='catedetail-list' key={item.id}>
                                <div className='catedetail-left'>
                                    <img src={item.img} alt=""/>
                                </div>
                                 <div className='catedetail-right'>
                                    <p className='pn'>{item.goodsname}</p>
                                    <p className='pp'>￥{filterPrice(item.price)}</p>
                                    <button onClick={()=>this.pushDetail(item.id)}>立即抢购</button>
                                </div> 
                            </div> 
                          )
                      })
                     : <div className="shibai">
                         <img src={ss} alt=""/>
                         <p>暂时还没有数据哦!!!!!</p>{/* //后期再改好看点 */}
                     </div>
                  }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        getCatedetails:getCatedetail(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changecateDetailActions:(id)=>dispatch(changecateDetailAction(id))
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(catedetail)
