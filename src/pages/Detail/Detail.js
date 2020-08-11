import React, { Component } from 'react'
// nodejs的一个方法  把地址字符串转为对象
import querystring from 'querystring'
//将展示型函数定义为组件函数
import { withRouter } from 'react-router-dom'
// 链接connect库
import { connect } from 'react-redux'
// 获取库中方法和数据
import { goodsDetail, GoodsDetailAction} from '../../store/modules/detail'
import { getUser} from '../../store/modules/user'

// 加载头部公共组件
import Header from '../../components/Header/Header'
// 引入样式
import './Detail.css'
// 加载弹框
import {successAlert} from '../../utils/alert'
// 请求添加购物车函数
import {getCartadd} from '../../utils/request'
// 价格过滤器
import { filterPrice } from '../../utils/filter'
// 定义加载本地文档照片
import ff from '../../assets/img/img/cart_on.png'
class Detail extends Component {
    constructor(){
        super()
        this.state={
            flag:0, //flag为0时  小黑框不出现 为1 出现
            num:null  //定义一个数 点击时将下标赋给他  循环时 点击谁谁的类名添加 谁变为橙色
        }
    }
    //一进页面获取地址传来的id  将id传给库中方法 请求详情信息数据
    componentDidMount() {
       this.id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.GoodsDetailsAction(this.id);
    }
    // 点击加购 改变flag  小黑框出现
    jia(){
       this.setState({
           flag:1
       })
    }
    // 点击小黑框本身也会消失 为了阻止冒泡 设置事件源为自己时才消失
    xiao(e){
        if(e.target.className==='blackk'){
            this.setState({
                flag:0
            })
        }
     }
    //  改变点击时颜色
    changecolor(index){
       this.setState({
           num:index
       },()=>{
            //  console.log(this.state.num)
       })
    }
    // 加入购物车 直接请求数据  uid goodsid  num 
    addshop(){
        getCartadd({uid:this.props.user.uid,goodsid:this.id,num:1}).then(res=>{
            successAlert(res.data.msg)
            this.setState({
                ...this.state,
                flag:0
            })
        }) 
    }
    render() {
        const { goodsDetails,} = this.props
        const {flag,num} =this.state
        return (
            <div className='DDetail'>
                {
                    goodsDetails.length>0? 
                    (
                      goodsDetails.map(item=>{
                          return (
                            <div className='Detail' key={item.id}>
                            {/* 头部 */}
                            {/* <header>
                                <GoBack>返回</GoBack>
                                      商品详情
                            </header> */}
                            <Header  title={'商品详情'} back></Header>
                            <img src={this.$img + item.img} alt="" />
                            <div className="detailD">
                                <p>{item.goodsname}</p>
                                <div className="detailDP">
                                    <p className='pp'>{filterPrice(item.price)}</p>
                                    {
                                        item.ishot == 1 ? <p className='px'>热卖</p> : null
                                    }
                                    {
                                        item.isnew == 1 ? <p className='pr'>新品</p> : null
                                    }
    
                                </div>
                                <div className="detailDPP">
                                    <p>{filterPrice(item.market_price)}</p>
                                </div>
                                {/* 收藏 */}
                                <div className='shoucang'>
                                    <img src={ff} alt="" />
                                    <p >收藏</p>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                            
                        </div> 
                          )
                      })   
                    ): null
                }
                {/*加购*/}
                 <div className='jg'>
                    <p className='jga' onClick={()=>this.jia()}>加入购物车</p>
                </div>
                {/* 小黑框 */}
                {
                                flag===1?(
                                        goodsDetails.map(item=>{
                                            return (
                                                <div className='blackk' key={item.id} onClick={(e)=>this.xiao(e)}>
                                                <div className='writek' >
                                                     <div className='fir'>
                                                       <img src={item.img} alt=""/>
                                                       <p>{item.goodsname}</p>
                                                     </div>
                                                     <p className='guiName'>{item.specsname}</p>
                                                     <div className='gui'>
                                                          {
                                                              JSON.parse(item.specsattr).map((i,index)=>{
                                                                  return (
                                                                    <span key={i} className={index===num?'active':''}   onClick={()=>this.changecolor(index)}>{i}</span>
                                                                  )
                                                              })
                                                          }
                                                     </div>
                                                     <button className="jiagou" onClick={()=>this.addshop()}>加入购物车</button>  
                                                </div>
                                           </div>
                                            )
                                        })
                                    
                                ):null
                            }
            </div>
             
       )
    }
}
// 获取库中传来的数据
const mapStateToProps = (state) => {
    return {
        goodsDetails: goodsDetail(state),
        user:getUser(state)
    }
}
// 获取库中传来的方法
const mapDispatchToProps = (dispatch) => {
    return {
        GoodsDetailsAction: (id) => dispatch(GoodsDetailAction(id)),
    }
}
// 链接库
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))

