import React, { Component } from 'react'
// 引入redux库
import {connect} from 'react-redux'
// 从module中引入库
import {BannerListAction,bannerList} from '../../store/modules/home'


// 子组件
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import HDetail from './Components/HDetail/HDetail'
import XianShi from './Components/XianShi/xianshi'

//类名
import './home.css'

// 主页主要组件
class Home extends Component {
    constructor(){
        super()
        this.state={
            banner:[],
            goodslist:[]
        }
    }
    // 加载库中函数
    componentDidMount(){
       this.props.BannerListAction();
    }
    render() {
      //获取库中的数据
        const {bannerList} =this.props
        return (
            <div className='home'>
                <Header></Header>
                <Banner banner={bannerList}></Banner>
                <XianShi></XianShi>
                <HDetail></HDetail>
            </div>
        )
    }
}
// 从库中调取数据
const mapStateToProps =(state)=>{
  return {
    bannerList:bannerList(state) 
  }
}
// 从库中调取函数
const mapDispatchToProps=(dispatch)=>{
  return {
    BannerListAction:()=>dispatch(BannerListAction())
  }
}
// 链接redux库
export default connect(mapStateToProps,mapDispatchToProps)(Home)