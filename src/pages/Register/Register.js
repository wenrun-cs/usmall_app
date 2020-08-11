import React, { Component } from 'react'
// 引入jscss文件
import './rejsiter.css'
// 发起注册请求
import {getRegister} from '../../utils/request'
//弹窗口
import {successAlert} from '../../utils/alert'
// 引入头部公共组件
import Header from '../../components/Header/Header'
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                nickname:"",
                password:''
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    register(){
        getRegister(this.state.user).then(res=>{
            if(res.data.code==200){
                successAlert('注册成功')
                this.props.history.push('/login') 
            }
            else{
                successAlert(res.data.msg)
            }
        })
    }
    render() {
        const {user} =this.state
        return (
            <div className='register'>
                 {/* 头部 */}
                   <Header title={'注册'} back></Header>
                  {/*表单*/}
                  <form>
                      <div>
                          <p>手机号:</p>
                          <input type="text" value={user.phone}  onChange={(e)=>this.changeUser(e,"phone")}  />
                      </div>
                      <div>
                          <p>昵称：</p>
                          <input type="text" value={user.nickname} onChange={(e)=>this.changeUser(e,'nickname')} />
                      </div>
                      <div>
                          <p>密码：</p>
                          <input type="password" value={user.password} onChange={(e)=>this.changeUser(e,'password')} />
                      </div>
                      <button onClick={()=>this.register()}>注册</button>
                  </form>
            </div>
        )
    }
}
