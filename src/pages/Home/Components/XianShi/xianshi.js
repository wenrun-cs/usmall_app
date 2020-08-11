import React from 'react'
import './xianshi.css'
import bb from '../../../../assets/img/img/home/1.jpg'
export default function xianshi() {
    var xianshiList=['限时抢购','积分商城','联系我们','商品分类']
    return (
        <div className='xianshi'>
            <ul>
                {
                  xianshiList.map(item=>{
                      return (
                          <li key={item}>
                              <img src={bb} alt="" title={item}/>  
                              <p >{item}</p>
                          </li>
                      )
                  })  
                }
            </ul>
        </div>
    )
}
