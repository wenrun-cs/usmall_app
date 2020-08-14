import React, { Component } from 'react'
// 引入头部
import Header from '../../components/Header/Header'
// 引入css文件
import './shopcar.css'
// 引入弹框
import { Modal } from 'antd-mobile';

// 引入图片
import bb from '../../assets/img/store.png' //小店铺图标
import gg from '../../assets/img/radio_hig.png' //选中的图标
import ww from '../../assets/img/radio_nor.png'//未选中的图标
import shop from '../../assets/img/tab_shopping_nor.png' //购物车
import bj from '../../assets/img/editor_hig.png'  //编辑
import wbj from '../../assets/img/editor_nor.png'  //未编辑
// 链接库
import { connect } from 'react-redux'
// 引入库中数据
import { getshopCarList, addShopCarAction ,changeIsEditorAction,isEditor,
    isAll,changeisAllAction,getAllPrice,changeOneAction,requestEditAction,
    requestDelAction

} from '../../store/modules/shop'
import { getUser } from '../../store/modules/user'
// 引入过滤器
import {filterPrice} from '../../utils/filter'
// 引入弹框
import {successAlert} from '../../utils/alert'
const alert = Modal.alert;
class shortcar extends Component {
    componentDidMount() {
        const id = this.props.getUser.uid;
        this.props.addShopCarAction(id)
        console.log(this.props.getshopCarList)
    }
    // 设置数字减到一不能再减了
    sub(item){
        if(item.num<=1){
            successAlert('宝贝不能再少了')
            return
        }
        this.props.requestEditAction({id:item.id,type:1})
    }
    delete(id){
        alert('','你确定要删除吗?', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () =>  this.props.requestDelAction(id)},
          ])
    }
    render() {
        const {requestEditAction,changeOneAction, getshopCarList ,isEditor,changeIsEditorAction,isAll,changeisAllAction,getAllPrice} = this.props
        return (
            <div className="shopcar">
                <Header title={'购物车'}></Header>
                {/* 一个样式 */}
                {getshopCarList.length > 0 ?
                    getshopCarList.map((item,index )=> {
                        return (
                            <div className='shopcar-con' key={item.id}>
                                {/* 店铺名 */}
                                <div className='shopcar-h'>
                                    <img src={bb} alt="" />
                                    <span>杭州保税区仓</span>
                                </div>
                                {/* 产品 */}
                                {/* 点击编辑 删除按钮出现 */}
                                <div  className={isEditor?"shopcar-c-move":'shopcar-c'}>
                                    <img  onClick={()=>changeOneAction(index)}  className='img1' src={item.checked?gg:ww} alt="" />
                                    {/* <img src="" alt=""/> */}
                                    <div className='shopcar-cc'>
                                        <img src={item.img} alt="" />
                                        <p className='psn'>{item.goodsname}</p>
                                        <div className='shopcar-span'>
                                            <span onClick={()=>this.sub(item)}>-</span>
                                            <span>{item.num}</span>
                                            <span onClick={()=>requestEditAction({id:item.id,type:2})}>+</span>
                                        </div>
                        <p className='psp'>总价：{  filterPrice(item.num*item.price)}</p>
                                    </div>
                                    <div className='shopcar-cr'>
                        <p>￥{filterPrice(item.price)}</p>
                                    </div>
                                    <button onClick={()=>this.delete(item.id)}>删除</button>
                                </div>
                            </div>
                        )
                    })
                    : <div className='kong'>
                          <div className='kongcenter'>
                             <img src={shop} alt=""/>
                             <p>购物车还是空的快去逛逛吧~</p> 
                          </div>
                    </div>
                }
                {/* 编辑 全选 合计 结算 */}
                <div className='shopcar-footer'>
                    <div onClick={()=>changeisAllAction()}>
                        <img src={isAll?gg:ww} alt="" /><br/>
                        <span>全选</span>
                    </div>
                    {/* 点击编辑  判断是否编辑 */}
                    <div onClick={()=>changeIsEditorAction()}>
                        <img src={isEditor?bj:wbj} alt="" /><br />
                        <span>编辑</span>
                    </div>
                    <div className='he'>
                    <span className='he1'>合计：{getAllPrice}</span><br />
                        <span>（不含运费）</span>
                    </div>
                    <button>去结算</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getshopCarList: getshopCarList(state),//购物车列表数据
        getUser: getUser(state), //调用user库  拿到uid
        isEditor:isEditor(state), //是否编辑
        isAll:isAll(state) ,//是否全选
        getAllPrice:getAllPrice(state),//总价
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addShopCarAction: (id) => dispatch(addShopCarAction(id)),//购物车列表
        changeIsEditorAction:()=>dispatch(changeIsEditorAction()),//是否编辑
        changeisAllAction:()=>dispatch(changeisAllAction()),//是否全选
        changeOneAction:(index)=>dispatch(changeOneAction(index)),//点击其中一个框框
        requestEditAction:(data)=>dispatch(requestEditAction(data)),//用户点击加减
        requestDelAction:(id)=>dispatch(requestDelAction(id))//点击删除
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(shortcar)  