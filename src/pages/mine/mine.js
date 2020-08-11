import React, { Component } from 'react'
import "./Mine.css"
// 图片
import mine2 from "../../assets/img/set.png"
import mine from "../../assets/img/news.png"
import mine1 from "../../assets/img/1.jpg"
import keep from "../../assets/img/keep.png"
import icon from "../../assets/img/icon_refund.png"
// 链接库
import {connect} from 'react-redux'
// 获取库里user信息
import {getUser} from '../../store/modules/user'

 class Mine extends Component {
    render() {
        const {getUser} =this.props
        return (
            <div className="mine">
                <div className="top">
                    <div className="line1">
                        <span className="img1">
                            <img src={mine2} alt="" />
                        </span>
                        个人中心
                        <span className="img2">
                            <img src={mine} alt="" />
                        </span>
                    </div>
                    <div className="line2">
                        <div className="img3">
                            <img src={mine1} alt="" />
                        </div>
                       <h4>{getUser.nickname}</h4>
                    </div>
                </div>
                <div className="shoucang">
                    <img src={keep} alt="" />
                    &nbsp;&nbsp;我的收藏(5)
                </div>
                <div className="order">
                    我的订单
                    <span>查看订单</span>
                </div>
                <ul className="fa">
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <p>待发货</p>
                    </li>
                </ul>
                <div className="shou">收货地址管理</div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        getUser:getUser(state)
    }
}
export default connect(mapStateToProps)(Mine)