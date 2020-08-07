import React, { Component } from 'react'
function asyncRouter(fn){
    class zujian extends  Component {
        constructor(){
            super()
            this.state={
                C:null
            }
        }
        componentDidMount(){
           fn().then(res=>{
              this.setState({
                  C:res.default
              })
        })
        }
        render() {
            const {C} = this.state
            return (
                <div>
                    {
                        C?<C {...this.props}></C>:null
                    }
                </div>
            )
        }
    }  
    return zujian 
}
export default  asyncRouter
