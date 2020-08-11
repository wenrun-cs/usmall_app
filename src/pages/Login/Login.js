import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// 移入css
import './login.css'
// 登陆请求
import {getLogin} from '../../utils/request'
// user信息添加
import {userInfo} from '../../store/modules/user'
// 链接库
import {connect} from 'react-redux' 
// 弹出框
import {successAlert} from '../../utils/alert'

 class Login extends Component {
    // 构造函数
    constructor(){
        super()
        // 定义user
        this.state={
             user:{
                phone:'',
                password:'',
             }
        }
    }
    // 表单改变事件
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    // 登录
    login(){
        getLogin(this.state.user).then( res=>{
            if(res.data.code==200){
                successAlert('登录成功')
                // 调用方法将user信息放进库里
                 this.props.userInfo(res.data.list)
                //  将信息存到本地存储
                sessionStorage.setItem('user',JSON.stringify(res.data.list))
                // 跳转到首页
                this.props.history.push('/index')    
            }else{
                alert(res.data.msg);
                // 失败清空数据
                this.setState({
                    user:{
                        phone:'',
                        password:'',
                    }
                })
            }
        })
    }
    render() {
        const {user} =this.state
        return (
            <div className="login">
                 {/* 头部 */}
                 <header>
                      登录
                     <Link to="/register">注册</Link>
                 </header>
                  {/*表单*/}
                  <form>
                      <div>
                          <p>账号：</p>
                          <input type="text" value={user.phone}  onChange={(e)=>this.changeUser(e,"phone")}  />
                      </div>
                      <div>
                          <p>密码：</p>
                          <input type="password" value={user.password} onChange={(e)=>this.changeUser(e,'password')} />
                      </div>
                      <p className="wang">忘记密码</p>
                      <button onClick={()=>this.login()}>登录</button>
                  </form>
            </div>
        )
    }
}
// 从库里拿数据
const mapStateToProps =(state)=>{
    return{
             
    }
}
// 从库里拿方法
const mapDispatchToProps=(dispatch)=>{
    return{
        userInfo:(user)=>dispatch(userInfo(user))
    }
}
// 连接库
export default connect(mapStateToProps,mapDispatchToProps)(Login)