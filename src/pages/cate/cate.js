import React, { Component } from 'react'
// 从库里拿方法跟函数
import {getCateList,changeCateAction,getCateTreeList,changeCateTreeAction} from '../../store/modules/cate'
// 链接
import {connect} from 'react-redux'
// 引入头部
import Header from '../../components/Header/Header'
// 引入样式
import './cate.css'
class Cate extends Component{
    constructor(){
        super()
       this.state={
           num:0
       }
    }
    componentDidMount(){
        // 拿到首页分类数据方法
        this.props.changeCateActions();
       // 拿到树形结构分类数据方法   
        this.props.changeCateTreeActions();
    }
    // 控制点击谁谁变化
    changeStyle(index){
        this.setState({
            num:index
        })
    }
    // 跳转到分类的具体产品下面
    pushCateDetail(id,name){
        this.props.history.push('/catedetail?id='+id+"&name="+name)
    }
    render() {
        //拿到首页分类数据、树形结构分类数据
        const {getCateLists,getCateTreeLists} =this.props
        // 拿自定义num控制动态类名
        const {num } =this.state
        // console.log(getCateLists)//,getCateTreeLists
        return (
            <div className='cate'>
                {/* 头部样式 */}
                <Header title={'分类'}></Header>
                {/* 内容 */}
                {/* 左边导航 */}
                <div className='left'>
                    <ul>
                        { getCateLists.length>0?getCateLists.map((item,index)=>{
                            return (<li key={item.id} className={num===index?'select':''} onClick={()=>this.changeStyle(index)}>{item.catename}</li>)
                           }):null
                        }
                    </ul>
                </div>
                {/* 右边组价切换 */}
                <div  className='right'>
                    {
                        getCateTreeLists.length>0?getCateTreeLists[num].children.map(item=>{
                            return (
                                        <div className='right-img' key={item.id} onClick={()=>this.pushCateDetail(item.id,item.catename)}>
                                               <img src={item.img} alt=""/>
                                               <p>{item.catename}</p>  
                                        </div>
                                      )
                        }):null
                  }
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return {
    getCateLists:getCateList(state),
    getCateTreeLists:getCateTreeList(state)
   }
}
const mapDispatchToProps=(dispatch)=>{
   return{
    changeCateActions:()=>dispatch(changeCateAction()),
    changeCateTreeActions:()=>dispatch(changeCateTreeAction())
   }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cate)

