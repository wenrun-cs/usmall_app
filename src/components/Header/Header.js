import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './header.css'
class Header extends Component {
    goBack(){
        // console.log(this.props)
        this.props.history.goBack()
    }
    render() {
        const {title,back} =this.props
        return (
            <div className='header'>
                 {
                     back? <span className="header-back" onClick={()=>this.goBack()}>返回</span>:null
                 }
                  <div className='header-title'>{title}</div>
            </div>
        )
    }
}
export default withRouter(Header)
