import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default class Header extends Component{
    render(){
        return (
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/hello'>欢迎页</Link></li>
            </ul>
        )
    }
}