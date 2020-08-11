import React, { Component } from 'react'
// 从库里拿方法跟函数
import {getCateList,changeCateAction} from '../../store/modules/cate'
// 链接
import {connect} from 'react-redux'

class Cate extends Component{
    componentDidMount(){
        this.props.changeCateActions();
        console.log(this.props.getCateList)
    }
    render() {
        return (
            <div>
                <h3>cate</h3>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return {
    getCateList:getCateList(state)
   }
}
const mapDispatchToProps=(dispatch)=>{
   return{
    changeCateActions:()=>dispatch(changeCateAction())
   }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cate)

