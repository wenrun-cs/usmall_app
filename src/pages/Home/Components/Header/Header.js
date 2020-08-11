import React from 'react'
import './header.css' 
import aa from '../../../../assets/img/img/home/logo.jpg'
export default function Header() {
    return (
        <div className='homeheader'>
             <img src={aa} alt=""/>
             <input type="text" placeholder='寻找商品'/>
        </div>
    )
}
